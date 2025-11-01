"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/assets/imgs";

const MainNav = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 1, href: "/", label: "الرئيسية" },
    { id: 2, href: "/about", label: "من نحن" },
    { id: 3, href: "/service", label: "الخدمات" },
    { id: 4, href: "/contact", label: "فروعنا" },
  ];

  // اغلاق بالـ Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="absolute top-0 left-0 w-full flex justify-center z-20 bg-transparent">
      <div className="w-[min(1350px,94%)] flex items-center justify-between pt-15 pb-5">
        {/* logo */}
        <div className="flex items-center gap-4">
          <Image
            className="w-13 h-13 rounded-2xl"
            src={Logo}
            alt="لوجو-الصالون"
          />
          <Link href="/" className="text-2xl text-[#c68a3f] transition">
            هير استايل
          </Link>
        </div>

        {/* desktop links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary navigation"
        >
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className="text-sm text-white hover:text-[#c68a3f] transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* right side: CTA / play / hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            role="button"
            className="hidden md:inline-block px-4 py-2 rounded-md text-sm font-semibold text-white bg-[#c68a3f] hover:brightness-95 transition"
          >
            فروعنا
          </Link>

          <button
            className="md:hidden bg-white text-gray-700 p-2 rounded-md hover:bg-gray-100 transition"
            aria-expanded={open}
            aria-label={open ? "اغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((s) => !s)}
            type="button"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile off-canvas overlay + panel */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "var(--mobile-menu-bg, rgba(0,0,0,0.45))" }}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <aside
          className={`fixed top-0 right-0 h-full w-4/5 max-w-[360px] bg-[#252525] shadow-xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <button
              aria-label="اغلاق"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md bg-gray-100 text-gray-700 transition"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-2 p-4" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-3 text-base text-gray-200 hover:text-[#c68a3f] border-b-2 border-white"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 px-3 py-3 text-base text-white bg-[#c68a3f] rounded-md text-center"
              onClick={() => setOpen(false)}
            >
              فروعنا
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default MainNav;
