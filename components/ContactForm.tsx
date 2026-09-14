"use client";

import { FormEvent, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { services } from "@/lib/services";

const serviceTypes = [...services.map((service) => service.title), "Other"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
        <span className="flex h-14 w-14 items-center justify-center bg-brake text-paper">
          <HugeiconsIcon icon={Tick02Icon} size={28} strokeWidth={2} />
        </span>
        <h3 className="mt-5 text-2xl font-semibold text-paper">
          Request received
        </h3>
        <p className="mt-2 max-w-md text-sm text-paper/70">
          Thanks for reaching out. A Summit Auto advisor will contact you soon
          to confirm your slot.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex border border-white/15 px-7 py-3.5 text-sm font-semibold text-paper transition hover:border-paper"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block sm:col-span-1">
        <span className="mb-1.5 block text-xs font-medium text-paper/70">
          Name
        </span>
        <input
          required
          name="name"
          type="text"
          placeholder="Your full name"
          className="w-full border border-white/10 bg-charcoal px-3.5 py-3 text-base text-paper outline-none transition placeholder:text-paper/35 focus:border-brake"
        />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-1.5 block text-xs font-medium text-paper/70">
          Phone
        </span>
        <input
          required
          name="phone"
          type="tel"
          placeholder="+234 ..."
          className="w-full border border-white/10 bg-charcoal px-3.5 py-3 text-base text-paper outline-none transition placeholder:text-paper/35 focus:border-brake"
        />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-1.5 block text-xs font-medium text-paper/70">
          Vehicle
        </span>
        <input
          required
          name="vehicle"
          type="text"
          placeholder="Make, model, year"
          className="w-full border border-white/10 bg-charcoal px-3.5 py-3 text-base text-paper outline-none transition placeholder:text-paper/35 focus:border-brake"
        />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-1.5 block text-xs font-medium text-paper/70">
          Service type
        </span>
        <select
          required
          name="service"
          defaultValue=""
          className="w-full border border-white/10 bg-charcoal px-3.5 py-3 text-base text-paper outline-none transition focus:border-brake"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-xs font-medium text-paper/70">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="What is going on with the car?"
          className="w-full resize-y border border-white/10 bg-charcoal px-3.5 py-3 text-base text-paper outline-none transition placeholder:text-paper/35 focus:border-brake"
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center bg-brake px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brakedeep sm:w-auto"
        >
          Send request
        </button>
      </div>
    </form>
  );
}
