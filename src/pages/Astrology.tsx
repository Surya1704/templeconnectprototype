import ComingSoon from "./ComingSoon";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Astrology() {
  return (
    <>
      <ComingSoon
        title="Astrology AI"
        subline="Personalised muhurta, panchang, and temple-aligned guidance — thoughtfully built, arriving soon."
      />
      <section className="max-w-container mx-auto px-5 md:px-8 pb-24">
        <div className="max-w-lg mx-auto">
          <WaitlistForm
            type="devotee"
            title="Get notified at launch"
            blurb="Leave your details and we'll let you know the moment Astrology AI is live."
            showOrganization={false}
          />
        </div>
      </section>
    </>
  );
}
