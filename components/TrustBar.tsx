import { HugeiconsIcon } from "@hugeicons/react";
import {
  Award01Icon,
  Car01Icon,
  Clock01Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";

const stats = [
  { icon: Award01Icon, value: "12+", label: "Years of service" },
  { icon: Car01Icon, value: "8,500+", label: "Cars serviced" },
  { icon: Clock01Icon, value: "Same day", label: "Express slots" },
  { icon: Shield01Icon, value: "90 day", label: "Repair warranty" },
];

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-12 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl bg-charcoal px-6 py-8 sm:px-10 sm:py-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brake text-paper">
                <HugeiconsIcon icon={stat.icon} size={22} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xl font-bold text-paper sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-paper/60 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}