"use client";

import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="pb-20 pt-4">

      <div className="container-tpod">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] bg-[#10254A] px-7 py-12 sm:px-12 lg:px-14"
        >

          {/* BACKGROUND DECORATION */}
          <div className="absolute right-[-100px] top-[-150px] h-[400px] w-[400px] rounded-full border border-white/10" />

          <div className="absolute bottom-[-180px] left-[30%] h-[350px] w-[350px] rounded-full border border-white/5" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">

            {/* LEFT */}
            <div className="flex items-start gap-5">

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 sm:flex">
                <Sparkles
                  size={24}
                  className="text-[#C9A15B]"
                />
              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#C9A15B]">
                  Start Your Journey
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Ready to Achieve Your Financial Goals?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                  Get personalized guidance and take the first
                  step toward a more confident financial future.
                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">

              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#10254A] transition hover:-translate-y-1"
              >
                Get Started Now

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={16} />
                Talk to an Expert
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}