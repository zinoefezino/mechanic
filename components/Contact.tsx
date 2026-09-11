import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Mail01Icon,
  Location01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import ContactForm from "@/components/ContactForm";
import {
  SHOP_EMAIL,
  SHOP_LOCATION,
  SHOP_PHONE_DISPLAY,
  SHOP_PHONE_TEL,
} from "@/lib/site";

export default function Contact() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brake">Contact</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Book a visit or ask a question
          </h2>
          <p className="mt-3 text-paper/65">
            Share a few details and we will get back to you shortly.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-white/8 bg-steel/40 p-6 sm:p-8">
            <ContactForm />
          </div>

          <aside className="space-y-4">
            <div className="border border-white/8 bg-steel/40 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-brake/15 text-brake">
                  <HugeiconsIcon icon={Call02Icon} size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-paper">Phone</p>
                  <a
                    href={`tel:${SHOP_PHONE_TEL}`}
                    className="mt-1 block text-sm text-paper/70 transition hover:text-brake"
                  >
                    {SHOP_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-white/8 bg-steel/40 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-brake/15 text-brake">
                  <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-paper">Email</p>
                  <a
                    href={`mailto:${SHOP_EMAIL}`}
                    className="mt-1 block text-sm text-paper/70 transition hover:text-brake"
                  >
                    {SHOP_EMAIL}
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-white/8 bg-steel/40 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-brake/15 text-brake">
                  <HugeiconsIcon icon={Location01Icon} size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-paper">Location</p>
                  <p className="mt-1 text-sm text-paper/70">{SHOP_LOCATION}</p>
                </div>
              </div>
            </div>
            <div className="border border-white/8 bg-steel/40 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-brake/15 text-brake">
                  <HugeiconsIcon icon={Clock01Icon} size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-paper">Hours</p>
                  <p className="mt-1 text-sm text-paper/70">Mon to Sat, 8:00 AM to 6:00 PM</p>
                  <p className="text-sm text-paper/70">Sunday closed</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}