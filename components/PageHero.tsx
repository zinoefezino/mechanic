import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[52svh] overflow-hidden bg-charcoal sm:min-h-[58svh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative mx-auto flex min-h-[52svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:min-h-[58svh] sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="max-w-2xl">
          <p className="font-medium uppercase tracking-[0.14em] text-brake text-xs sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            {lead}
          </p>
        </div>
      </div>
    </section>
  );
}