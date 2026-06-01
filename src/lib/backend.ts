import { supabase } from "@/lib/supabase";

export type DonationIntentInput = {
  templeRef: string;
  amountInr: number;
  donorEmail?: string;
};

export type TempleInquiryInput = {
  trustName: string;
  contactName: string;
  state: string;
  donationVolume: string;
  phone: string;
  note?: string;
};

type QueuedWrite = {
  table: "donation_intents" | "temple_inquiries";
  payload: DonationIntentInput | TempleInquiryInput;
  createdAt: string;
};

const queueKey = "fc:supabase-write-queue";

const queueWrite = (write: QueuedWrite) => {
  const existing = localStorage.getItem(queueKey);
  const queue = existing ? (JSON.parse(existing) as QueuedWrite[]) : [];
  queue.push(write);
  localStorage.setItem(queueKey, JSON.stringify(queue.slice(-50)));
};

export async function createDonationIntent(input: DonationIntentInput) {
  if (!supabase) {
    queueWrite({ table: "donation_intents", payload: input, createdAt: new Date().toISOString() });
    return { queued: true };
  }

  const { error } = await supabase.from("donation_intents").insert({
    temple_ref: input.templeRef,
    amount_inr: input.amountInr,
    donor_email: input.donorEmail ?? null,
    status: "payment_pending",
  });

  if (error) throw error;
  return { queued: false };
}

export async function submitTempleInquiry(input: TempleInquiryInput) {
  if (!supabase) {
    queueWrite({ table: "temple_inquiries", payload: input, createdAt: new Date().toISOString() });
    return { queued: true };
  }

  const { error } = await supabase.from("temple_inquiries").insert({
    trust_name: input.trustName,
    contact_name: input.contactName,
    state: input.state,
    donation_volume: input.donationVolume,
    phone: input.phone,
    note: input.note ?? null,
    status: "new",
  });

  if (error) throw error;
  return { queued: false };
}
