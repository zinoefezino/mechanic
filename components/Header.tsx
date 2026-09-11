"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Menu01Icon,
  Cancel01Icon,
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
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      window.scrollTo(0, scrollY);
    };
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

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-paper lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-bold tracking-tight text-charcoal sm:text-2xl"
            >
              {SHOP_NAME}
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center"
            >
              <HugeiconsIcon
                icon={Cancel01Icon}
                size={28}
                strokeWidth={1.6}
                color="#201D1A"
              />
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-8 sm:px-6">
            <nav aria-label="Mobile primary" className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-steel/10 py-4 text-2xl font-semibold text-charcoal"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={`tel:${SHOP_PHONE_TEL}`}
              className="mt-auto inline-flex w-full items-center justify-center gap-2 bg-brake px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-brakedeep"
            >
              <HugeiconsIcon icon={Call02Icon} size={20} strokeWidth={1.6} />
              {SHOP_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </>
  );
}