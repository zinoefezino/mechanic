export type ServiceItem = {
  slug: string;
  title: string;
  blurb: string;
  detail: string;
  image: string;
};

export const services: ServiceItem[] = [
  {
    slug: "diagnostics",
    title: "Diagnostics",
    blurb: "Computer scans, road tests, and clear reports so you know exactly what is wrong.",
    detail:
      "We start with a structured check: scan tools, visual inspection, and a short road test when needed. You leave with a plain language report, not a vague guess.",
    image: "/service-diagnostics.jpg",
  },
  {
    slug: "oil-and-filters",
    title: "Oil and filters",
    blurb: "Scheduled oil changes, filter swaps, and fluid top ups that protect your engine.",
    detail:
      "Fresh oil, the right filter, and a quick look at other fluids. We stick to intervals that match how you drive, not a one size sales pitch.",
    image: "/service-oil.jpg",
  },
  {
    slug: "brakes",
    title: "Brakes",
    blurb: "Pads, discs, fluid flushes, and safety checks that restore confident stopping power.",
    detail:
      "From squeaks to soft pedals, we measure wear, flush fluid when it is due, and only replace what your stopping power actually needs.",
    image: "/service-brakes.jpg",
  },
  {
    slug: "engine-and-cooling",
    title: "Engine and cooling",
    blurb: "Overheating, belts, hoses, and coolant system work to keep temperatures steady.",
    detail:
      "Belts, hoses, thermostats, and coolant flushes get checked as a system. We find the leak or weak part before heat turns into a roadside stop.",
    image: "/service-engine.jpg",
  },
  {
    slug: "electrical",
    title: "Electrical",
    blurb: "Battery, alternator, starters, lights, and wiring faults traced and fixed properly.",
    detail:
      "Weak starts and odd electrical faults get traced with load tests and wiring checks so we fix the root cause, not just swap the battery again.",
    image: "/service-electrical.jpg",
  },
  {
    slug: "ac",
    title: "AC",
    blurb: "Gas recharge, leak checks, and compressor service for cool cabin comfort again.",
    detail:
      "We pressure test for leaks, recharge correctly, and check compressor health so cold air lasts longer than a quick top up.",
    image: "/service-ac.jpg",
  },
];