import { FOOTER_LINKS, SHOP_EMAIL, SHOP_NAME, SHOP_PHONE_DISPLAY, SHOP_PHONE_TEL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <a href="/" className="text-xl font-bold tracking-tight text-paper sm:text-2xl">
            {SHOP_NAME}
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
            Honest diagnostics and reliable repairs for drivers who want clarity
            before the wrench turns.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-paper">Explore</p>
          <ul className="mt-3 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-paper/60 transition hover:text-brake"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-paper">Workshop hours</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/60">
            <li>Mon to Sat: 8:00 AM to 6:00 PM</li>
            <li>Sunday: Closed</li>
            <li className="pt-2">
              <a href={`tel:${SHOP_PHONE_TEL}`} className="transition hover:text-brake">
                {SHOP_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${SHOP_EMAIL}`} className="transition hover:text-brake">
                {SHOP_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            Copyright {new Date().getFullYear()} {SHOP_NAME}. All rights reserved.
          </p>
          <p>Local auto repair</p>
        </div>
      </div>
    </footer>
  );
}