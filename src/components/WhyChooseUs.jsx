"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  UserRound,
  BarChart3,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: UserRound,
    title: "Personalized Financial Advice",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Ethical Practices",
  },
  {
    icon: BarChart3,
    title: "Technology Driven Solutions",
  },
  {
    icon: Headphones,
    title: "Dedicated Client Support",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="tpod-section bg-white">

      <div className="container-tpod">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#C9A15B]">
              Why Choose TPOD Invest
            </p>

            <h2 className="max-w-[500px] text-4xl font-semibold leading-tight tracking-[-1.5px] text-[#10254A] sm:text-5xl">
              Your Goals,
              <br />
              Our Commitment.
            </h2>

            <p className="mt-6 max-w-[530px] text-base leading-7 text-gray-500">
              At TPOD Investments, we believe financial planning
              should be personal, transparent and built around
              your aspirations. Our approach combines expert
              guidance with smart financial solutions to help you
              move confidently toward your goals.
            </p>

            {/* BENEFITS */}
            <div className="mt-8 space-y-4">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex items-center gap-3"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FCF7ED]">
                      <CheckCircle2
                        size={17}
                        className="text-[#C9A15B]"
                      />
                    </div>

                    <span className="text-sm font-medium text-gray-700">
                      {benefit.title}
                    </span>

                  </div>
                );
              })}

            </div>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#10254A] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              Know More About Us

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="relative min-h-[500px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#EEF5FF] via-white to-[#F8EEDF]">

              {/* BACKGROUND CIRCLE */}
              <div className="absolute right-[-80px] top-[-80px] h-[350px] w-[350px] rounded-full bg-blue-50" />

              {/* FAMILY CARD */}
              <div className="absolute bottom-0 right-0 h-[78%] w-[82%] overflow-hidden rounded-tl-[100px] bg-gradient-to-br from-[#e9d8c6] to-[#c6a989]">

                {/* Decorative family representation */}
                <div className="absolute bottom-0 left-[12%] h-[60%] w-[30%] rounded-t-[80px] bg-[#10254A]" />

                <div className="absolute bottom-0 left-[40%] h-[55%] w-[25%] rounded-t-[70px] bg-[#C58E75]" />

                <div className="absolute bottom-0 right-[10%] h-[45%] w-[24%] rounded-t-[60px] bg-[#D8B18D]" />

                {/* Tablet */}
                <div className="absolute bottom-[22%] left-[37%] h-[70px] w-[105px] rotate-[-5deg] rounded-xl border-[5px] border-gray-700 bg-white shadow-xl">
                  <div className="m-2 h-full rounded bg-[#EEF5FF]" />
                </div>

              </div>

              {/* FLOATING BENEFIT CARDS */}
              <div className="absolute left-5 top-[18%] space-y-3">

                <div className="flex items-center gap-3 rounded-xl border border-white bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                  <UserRound
                    size={19}
                    className="text-blue-600"
                  />
                  <span className="text-xs font-semibold text-gray-700">
                    Personalized Solutions
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                  <ShieldCheck
                    size={19}
                    className="text-green-600"
                  />
                  <span className="text-xs font-semibold text-gray-700">
                    Secure Investments
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                  <Headphones
                    size={19}
                    className="text-[#C9A15B]"
                  />
                  <span className="text-xs font-semibold text-gray-700">
                    Expert Guidance
                  </span>
                </div>

              </div>

              {/* PERFORMANCE CARD */}
              <div className="absolute bottom-7 right-7 rounded-2xl border border-white bg-white/95 p-5 shadow-xl backdrop-blur">

                <div className="flex items-center justify-between gap-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">
                      Your Financial Journey
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#10254A]">
                      Plan. Invest. Grow.
                    </p>
                  </div>

                  <BarChart3
                    size={34}
                    className="text-[#C9A15B]"
                  />
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}