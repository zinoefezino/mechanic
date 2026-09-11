import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      {/* <TrustBar /> */}
      <Services preview />
      <WhyUs preview />
      <Reviews />
      <CTA />
    </SiteShell>
  );
}
