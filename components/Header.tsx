"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Menu01Icon,
  Cancel01Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import {
  NAV_LINKS,
  SHOP_NAME,
  SHOP_PHONE_DISPLAY,
  SHOP_PHONE_TEL,
} from "@/lib/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
          isScrolled
            ? "border-steel/20 bg-paper/95 backdrop-blur-sm"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          <a
            href="/"
            className="justify-self-start text-xl font-bold tracking-tight text-charcoal sm:text-2xl"
          >
            {SHOP_NAME}
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center justify-center gap-8 lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-charcoal/80 transition-colors hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="justify-self-end">
            <a
              href={`tel:${SHOP_PHONE_TEL}`}
              className="hidden items-center gap-2 bg-brake px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brakedeep lg:inline-flex"
            >
              <HugeiconsIcon icon={Call02Icon} size={20} strokeWidth={1.6} />
              {SHOP_PHONE_DISPLAY}
            </a>

            {!isMenuOpen && (
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-expanded={false}
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center lg:hidden"
              >
                <HugeiconsIcon
                  icon={Menu01Icon}
                  size={28}
                  strokeWidth={1.6}
                  color="#201D1A"
                />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-charcoal/30 backdrop-blur-sm`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Glass slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-[60] h-full w-[82%] max-w-sm lg:hidden
        bg-paper/75 backdrop-blur-xl border-l border-white/40 shadow-2xl
        transition-transform duration-300 ease-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 border-b border-steel/10">
          <span className="text-xl font-bold tracking-tight text-charcoal sm:text-2xl">
            {SHOP_NAME}
          </span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center"
          >
            <HugeiconsIcon
              icon={Cancel01Icon}
              size={26}
              strokeWidth={1.6}
              color="#201D1A"
            />
          </button>
        </div>

        <nav
          aria-label="Mobile primary"
          className="flex flex-col px-4 sm:px-6 mt-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between border-b border-steel/10 py-4 text-lg font-semibold text-charcoal"
            >
              {link.label}
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={18}
                className="text-charcoal/40"
              />
            </a>
          ))}
        </nav>

        <div className="px-4 sm:px-6 mt-6">
          <a
            href={`tel:${SHOP_PHONE_TEL}`}
            className="inline-flex w-full items-center justify-center gap-2 bg-brake px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brakedeep"
          >
            <HugeiconsIcon icon={Call02Icon} size={20} strokeWidth={1.6} />
            {SHOP_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </>
  );
}
