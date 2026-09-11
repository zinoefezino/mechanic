import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  Search01Icon,
  Wrench01Icon,
  HandshakeIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { steps } from "@/lib/process";

const icons = [Calendar03Icon, Search01Icon, Wrench01Icon, HandshakeIcon];
const stepImages = [
  "/process.jpg",
  "/process-inspect.jpg",
  "/process-repair.jpg",
  "/workshop-bay.jpg",
];

type ProcessProps = {
  preview?: boolean;
};

export default function Process({ preview = false }: ProcessProps) {
  if (preview) {
    return (
      <section className="bg-paper text-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-brake">
                Process
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Four clear steps from book to handover
              </h2>
            </div>
            <a
              href="/process"
              className="inline-flex w-fit items-center justify-center gap-2 bg-brake px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brakedeep"
            >
              See the process
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
            </a>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <article
                key={item.step}
                className="border border-steel/15 bg-white p-6"
              >
                <span className="text-xs font-bold tracking-widest text-brake">
                  {item.step}
                </span>
                <span className="mt-3 flex h-11 w-11 items-center justify-center bg-brake text-paper">
                  <HugeiconsIcon
                    icon={icons[index]}
                    size={22}
                    strokeWidth={1.75}
                  />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper text-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brake">
            Process
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Four clear steps from book to handover
          </h2>
          <p className="mt-3 text-steel">
            No mystery timeline. You always know what happens next and what it
            costs.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {steps.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={item.step}
                className="relative min-h-[320px] overflow-hidden border border-steel/15 lg:min-h-[380px]"
              >
                {/* Photo fills the whole box */}
                <Image
                  src={stepImages[index]}
                  alt={`${item.title} step at Summit Auto`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                {/* Copy panel sits on one side of the same box */}
                <div
                  className={`relative z-10 flex h-full min-h-[320px] items-stretch lg:min-h-[380px] ${
                    reverse ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex w-full flex-col justify-center bg-paper/95 p-6 backdrop-blur-[2px] sm:p-8 lg:w-[48%] lg:p-10">
                    <span className="text-xs font-bold tracking-widest text-brake">
                      {item.step}
                    </span>
                    <span className="mt-4 flex h-11 w-11 items-center justify-center bg-brake text-paper">
                      <HugeiconsIcon
                        icon={icons[index]}
                        size={22}
                        strokeWidth={1.75}
                      />
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base text-steel">{item.body}</p>
                    <p className="mt-3 text-sm leading-relaxed text-steel/90">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}