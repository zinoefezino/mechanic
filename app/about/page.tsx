import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Summit Auto focuses on clear diagnostics, approved work, and honest repairs for local drivers.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <WhyUs />
      <Reviews />
      <CTA />
    </SiteShell>
  );
}