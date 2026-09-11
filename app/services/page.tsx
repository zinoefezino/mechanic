import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Diagnostics, oil changes, brakes, engine cooling, electrical, and AC service from Summit Auto.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <Services />
      <CTA />
    </SiteShell>
  );
}