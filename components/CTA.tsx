import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function CTA() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-charcoal px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brake">
            Ready when you are
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Book a service slot and get a clear plan for your car
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-paper/65 sm:text-base">
            Tell us what is going on. We will confirm availability and walk you
            through the next steps.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-brake px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brakedeep"
          >
            Book service
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}