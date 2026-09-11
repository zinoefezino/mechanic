import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a service or ask Summit Auto a question about your vehicle.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <Contact />
    </SiteShell>
  );
}