import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Process",
  description:
    "See how Summit Auto takes your car from booking to handover in four clear steps.",
};

export default function ProcessPage() {
  return (
    <SiteShell>
      <Process />
      <CTA />
    </SiteShell>
  );
}