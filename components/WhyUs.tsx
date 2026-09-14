import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  HandshakeIcon,
  SecurityCheckIcon,
  CustomerServiceIcon,
  ToolsIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { aboutStory, reasons } from "@/lib/why-us";

const icons = [
  HandshakeIcon,
  SecurityCheckIcon,
  ToolsIcon,
  CustomerServiceIcon,
];

type WhyUsProps = {
  preview?: boolean;
};

export default function WhyUs({ preview = false }: WhyUsProps) {
  const shown = preview ? reasons.slice(0, 2) : reasons;

  if (preview) {
    return (
      <section className="bg-charcoal">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative min-h-[320px] overflow-hidden">
            <Image
              src="/why-us.jpg"
              alt="Summit Auto technician inspecting a vehicle"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brake">
              Why us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-paper sm:text-4xl">
              Built for drivers who want clarity
            </h2>
            <p className="mt-3 text-paper/65">{aboutStory.lead}</p>
            <div className="mt-8 space-y-5">
              {shown.map((reason, index) => (
                <article
                  key={reason.title}
                  className="border border-white/10 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brake text-paper">
                      <HugeiconsIcon
                        icon={icons[index]}
                        size={22}
                        strokeWidth={1.75}
                      />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-paper">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-paper/65">
                        {reason.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a
              href="/about"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-brake px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brakedeep"
            >
              Our story
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={18}
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brake">
              {aboutStory.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-paper sm:text-4xl">
              {aboutStory.title}
            </h2>
            <p className="mt-3 text-paper/65">{aboutStory.lead}</p>
            <div className="mt-6 space-y-4">
              {aboutStory.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className=" leading-relaxed text-paper/70"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden">
            <Image
              src="/about.jpg"
              alt="Workshop bay at Summit Auto"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="border border-white/8 bg-steel/50 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center bg-brake text-paper">
                <HugeiconsIcon
                  icon={icons[index]}
                  size={22}
                  strokeWidth={1.75}
                />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-paper">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                {reason.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
