"use client";

import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-[550px] w-[550px] rounded-full bg-blue-50 blur-3xl" />

      <div className="container-tpod relative">

        <div className="grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* BADGE */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#C9A15B]" />
              Smart Investing. Secure Future.
            </div>

            {/* HEADING */}
            <h1 className="max-w-[650px] text-5xl font-semibold leading-[1.05] tracking-[-2px] text-[#10254A] sm:text-6xl lg:text-[64px]">

              Plan Today.
              <br />

              Invest Smart.
              <br />

              Live Your{" "}
              <span className="text-[#C9A15B]">
                Dreams.
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[560px] text-lg leading-8 text-gray-500">
              Your trusted partner for Insurance, Mutual Funds and
              Stock Market investments. We help you make informed
              financial decisions and build a stronger tomorrow.
            </p>

            {/* BENEFITS */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShieldCheck
                  size={17}
                  className="text-[#C9A15B]"
                />
                Expert Guidance
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShieldCheck
                  size={17}
                  className="text-[#C9A15B]"
                />
                Transparent Process
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShieldCheck
                  size={17}
                  className="text-[#C9A15B]"
                />
                Client First
              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-xl bg-[#10254A] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-1"
              >
                Explore Our Services

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 text-sm font-semibold text-[#10254A] shadow-sm transition hover:-translate-y-1"
              >
                <Phone size={17} />
                Talk to an Expert
              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* MAIN VISUAL */}
            <div className="relative mx-auto aspect-square max-w-[600px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#eef5ff] via-white to-[#f9f1e5]">

              {/* DECORATIVE CIRCLE */}
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-inner" />

              {/* GRAPH */}
              <div className="absolute left-[18%] right-[15%] top-[25%] h-[35%]">

                <svg
                  viewBox="0 0 500 220"
                  className="h-full w-full"
                  fill="none"
                >
                  <path
                    d="M20 190 L100 145 L175 165 L250 95 L330 120 L410 40 L475 15"
                    stroke="#7DA66D"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M20 190 L100 145 L175 165 L250 95 L330 120 L410 40 L475 15 L475 220 L20 220 Z"
                    fill="#dcebdc"
                    opacity="0.45"
                  />

                </svg>

              </div>

              {/* FAMILY PLACEHOLDER */}
              <div className="absolute bottom-0 left-1/2 h-[45%] w-[78%] -translate-x-1/2 rounded-t-[45%] bg-gradient-to-t from-[#d7c1a6] to-[#f1dfca]" />

              {/* PERSON SHAPES */}
              <div className="absolute bottom-[15%] left-[35%] h-[130px] w-[100px] rounded-t-[50px] bg-[#10254A]" />

              <div className="absolute bottom-[13%] right-[27%] h-[115px] w-[85px] rounded-t-[45px] bg-[#c58e75]" />

              {/* FLOATING CARDS */}

              <div className="absolute left-[7%] top-[35%] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <ShieldCheck
                    size={21}
                    className="text-blue-600"
                  />
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  Insurance
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  Secure what matters most
                </p>
              </div>

              <div className="absolute right-[8%] top-[17%] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur">

                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  ↗
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  Mutual Funds
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  Grow your wealth
                </p>

              </div>

              <div className="absolute right-[3%] top-[48%] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur">

                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#C9A15B]">
                  ↗
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  Stock Market
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  Invest for tomorrow
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}