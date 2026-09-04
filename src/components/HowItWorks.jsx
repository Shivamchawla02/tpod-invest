"use client";

import { motion } from "framer-motion";
import {
  Target,
  ClipboardList,
  TrendingUp,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Your Goals",
    description:
      "We understand your financial goals, current situation and future aspirations.",
    icon: Target,
  },
  {
    number: "02",
    title: "Plan Your Investment",
    description:
      "We create a personalized financial strategy based on your needs and objectives.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Invest Smartly",
    description:
      "We help you choose suitable financial products and investment solutions.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Track & Grow",
    description:
      "We help you monitor your journey and make informed decisions as your goals evolve.",
    icon: BarChart3,
  },
];

export default function HowItWorks() {
  return (
    <section className="tpod-section bg-[#FAFBFD]">

      <div className="container-tpod">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >

          <p className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#C9A15B]">
            How It Works
          </p>

          <h2 className="text-3xl font-semibold tracking-[-1px] text-[#10254A] sm:text-4xl">
            Simple Steps to Financial Freedom
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-500">
            A simple and transparent approach to help you
            make better financial decisions.
          </p>

        </motion.div>

        {/* STEPS */}
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* CONNECTING LINE */}
          <div className="absolute left-[12%] right-[12%] top-[47px] hidden border-t border-dashed border-gray-300 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative text-center"
              >

                {/* NUMBER */}
                <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF5FF]">
                    <Icon
                      size={27}
                      strokeWidth={1.6}
                      className="text-[#10254A]"
                    />
                  </div>

                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#C9A15B] text-[10px] font-bold text-white">
                    {step.number}
                  </span>

                </div>

                <h3 className="text-base font-semibold text-[#10254A]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[230px] text-sm leading-6 text-gray-500">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}