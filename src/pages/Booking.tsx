import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { getTempleById } from "@/data/temples";
import { useAuth } from "@/context/AuthContext";
import { bookings } from "@/lib/storage";
import { toast } from "@/hooks/use-toast";

type Step = "select" | "confirmed";

export default function Booking() {
  const { templeId = "" } = useParams();
  const navigate = useNavigate();
  const temple = getTempleById(templeId);
  const { user, loading } = useAuth();

  const [step, setStep] = useState<Step>("select");
  const [date, setDate] = useState<Date | undefined>();
  const [poojaId, setPoojaId] = useState<string>(temple?.poojas[0]?.id ?? "");
  const [bookingId, setBookingId] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { state: { from: `/book/${templeId}` } });
    }
  }, [user, loading, templeId, navigate]);

  if (!temple) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="font-serif text-2xl">Temple not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">Back to discover</Link>
      </div>
    );
  }
  if (!user) return null;

  const selectedPooja = temple.poojas.find((p) => p.id === poojaId);

  const confirm = () => {
    if (!date || !selectedPooja) {
      toast({ title: "Please pick a date and pooja", variant: "destructive" });
      return;
    }
    const b = bookings.add({
      userId: user.id,
      templeId: temple.id,
      templeName: temple.name,
      poojaId: selectedPooja.id,
      poojaName: selectedPooja.name,
      date: format(date, "yyyy-MM-dd"),
    });
    setBookingId(b.id);
    setStep("confirmed");
  };

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      {step === "select" && (
        <>
          <h1 className="font-serif text-2xl font-semibold">Book your visit</h1>
          <p className="mt-1 text-muted-foreground">
            {temple.name}, {temple.location}
          </p>

          {/* Step 1 — Date */}
          <section className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Date</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "mt-2 w-full justify-start h-12 rounded-xl text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </section>

          {/* Step 2 — Pooja */}
          <section className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Pooja type
            </h2>
            <div className="mt-2 space-y-2">
              {temple.poojas.map((p) => (
                <label
                  key={p.id}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border-2 p-3 transition-colors",
                    poojaId === p.id ? "border-primary bg-primary/5" : "border-border bg-card"
                  )}
                >
                  <input
                    type="radio"
                    name="pooja"
                    value={p.id}
                    checked={poojaId === p.id}
                    onChange={() => setPoojaId(p.id)}
                    className="mt-1 accent-primary"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">{p.name}</p>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{p.duration}</p>
                  </div>
                </label>
              ))}
            </div>
          </section>

          <Button
            size="lg"
            className="mt-8 w-full h-12 rounded-full text-base font-semibold"
            onClick={confirm}
          >
            Confirm booking
          </Button>
        </>
      )}

      {step === "confirmed" && bookingId && (
        <div className="mt-6 animate-fade-in text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-9 w-9 text-primary" />
          </div>
          <h1 className="mt-4 font-serif text-2xl font-semibold">Booking confirmed</h1>
          <p className="mt-1 text-muted-foreground">
            We've reserved your spot. A confirmation has been added to your profile.
          </p>

          <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-card p-5 text-left shadow-[var(--shadow-card)]">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Booking ID</div>
            <div className="font-mono text-sm">{bookingId.slice(0, 8).toUpperCase()}</div>
            <hr className="my-3 border-border" />
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Temple</dt><dd className="font-medium">{temple.name}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Pooja</dt><dd className="font-medium">{selectedPooja?.name}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Date</dt><dd className="font-medium">{date && format(date, "PPP")}</dd></div>
            </dl>
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/profile">View my bookings</Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link to="/">Back to discover</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
