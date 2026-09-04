"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container-tpod">
        <nav className="flex h-[76px] items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <div>
              <div className="text-[30px] font-bold leading-none tracking-[-2px] text-[#10254A]">
                TP<span className="text-[#C9A15B]">O</span>D
              </div>

              <div className="mt-1 text-[7px] font-semibold tracking-[1.5px] text-gray-500">
                INVESTMENTS & FINANCIAL SERVICES
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 lg:flex">

            <Link
              href="/"
              className="text-sm font-medium text-[#10254A]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 transition hover:text-[#10254A]"
            >
              About Us
            </Link>

            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-[#10254A]">
                Services
                <ChevronDown size={15} />
              </button>

              <div className="invisible absolute left-0 top-full mt-3 w-56 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">

                <Link
                  href="/insurance"
                  className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#10254A]"
                >
                  Insurance
                </Link>

                <Link
                  href="/mutual-funds"
                  className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#10254A]"
                >
                  Mutual Funds
                </Link>

                <Link
                  href="/stock-market"
                  className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#10254A]"
                >
                  Stock Market
                </Link>

              </div>
            </div>

            <Link
              href="/resources"
              className="text-sm font-medium text-gray-600 transition hover:text-[#10254A]"
            >
              Resources
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 transition hover:text-[#10254A]"
            >
              Contact Us
            </Link>

          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-xl bg-[#10254A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0b1d3b]"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-[#10254A] lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-gray-100 py-5 lg:hidden">

            <div className="flex flex-col gap-2">

              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-[#10254A]"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
              >
                About Us
              </Link>

              <Link
                href="/insurance"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
              >
                Insurance
              </Link>

              <Link
                href="/mutual-funds"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
              >
                Mutual Funds
              </Link>

              <Link
                href="/stock-market"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
              >
                Stock Market
              </Link>

              <Link
                href="/resources"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
              >
                Resources
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
              >
                Contact Us
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-[#10254A] px-4 py-3 text-center font-semibold text-white"
              >
                Get Started
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}