"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  QuoteUpIcon,
  StarIcon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

const reviews = [
  {
    name: "Adaeze O.",
    role: "Toyota Camry owner",
    quote:
      "They found a cooling leak another shop missed, explained the options, and had me back on the road the same afternoon.",
  },
  {
    name: "Chinedu K.",
    role: "Honda Accord owner",
    quote:
      "Transparent pricing and no pressure. My brakes feel solid again and the team kept me updated with photos.",
  },
  {
    name: "Funke B.",
    role: "Hyundai Tucson owner",
    quote:
      "AC service was quick and thorough. Summit Auto is now my default workshop whenever something feels off.",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const prev = () =>
    setIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  const next = () =>
    setIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));

  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brake">
              Reviews
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-paper sm:text-4xl">
              Drivers who trust Summit Auto
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center border border-paper/25 text-paper transition hover:border-paper hover:text-brake"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} size={22} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center border border-paper/25 text-paper transition hover:border-paper hover:text-brake"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={22} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div className="relative mt-10 border border-white/10 bg-charcoal p-8 sm:p-10 lg:p-14">
          <span className="text-brake">
            <HugeiconsIcon icon={QuoteUpIcon} size={36} strokeWidth={1.5} />
          </span>

          <div className="mt-6 flex gap-1 text-brake">
            {Array.from({ length: 5 }).map((_, i) => (
              <HugeiconsIcon key={i} icon={StarIcon} size={16} strokeWidth={1.5} />
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-xl leading-snug text-paper sm:text-2xl lg:text-[1.75rem]">
            {review.quote}
          </p>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="font-semibold text-paper">{review.name}</p>
            <p className="mt-1 text-sm text-paper/55">{review.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}