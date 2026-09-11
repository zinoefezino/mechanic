import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { services } from "@/lib/services";

type ServicesProps = {
  preview?: boolean;
};

export default function Services({ preview = false }: ServicesProps) {
  const items = preview ? services.slice(0, 3) : services;

  return (
    <section
      className={`bg-paper text-charcoal ${
        preview ? "pt-16 sm:pt-20" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brake">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {preview
                ? "Core work we handle every week"
                : "Everything your car needs under one roof"}
            </h2>
            <p className="mt-3 text-steel">
              From routine maintenance to tricky electrical faults, our bay is
              set up for thorough work without the runaround.
            </p>
          </div>
          {preview && (
            <a
              href="/services"
              className="inline-flex w-fit items-center justify-center gap-2 bg-brake px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brakedeep"
            >
              All services
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
            </a>
          )}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.slug}
              className="overflow-hidden border border-steel/15 bg-white"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={service.image}
                  alt={`${service.title} at Summit Auto`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {preview ? service.blurb : service.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}