import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-charcoal">
      <Image
        src="/hero.jpg"
        alt="Technician working under a vehicle in the Summit Auto workshop"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-28 lg:pt-32">
        <div className="max-w-2xl">
          {/* <p className="font-medium uppercase tracking-[0.14em] text-brake text-xs sm:text-sm">
            Auto repair
          </p> */}
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Honest car care. Clear diagnostics. Solid repairs.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Summit Auto keeps your vehicle road ready with transparent checks,
            fair pricing, and technicians who explain every finding before we
            touch a bolt.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="inline-flex w-fit items-center justify-center gap-2 bg-brake px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brakedeep"
            >
              Book service
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={18}
                strokeWidth={2}
              />
            </a>
            <a
              href="/services"
              className="inline-flex w-fit items-center justify-center border border-paper/35 bg-transparent px-7 py-3.5 text-sm font-semibold text-paper transition hover:border-paper"
            >
              View services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
