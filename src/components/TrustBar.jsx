"use client";

import { motion } from "framer-motion";
import {
  Users,
  IndianRupee,
  Award,
  Handshake,
} from "lucide-react";

const stats = [
  {
    value: "10,000+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "₹500 Cr+",
    label: "Investments Guided",
    icon: IndianRupee,
  },
  {
    value: "10+",
    label: "Years of Experience",
    icon: Award,
  },
  {
    value: "100%",
    label: "Client Focus",
    icon: Handshake,
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="container-tpod">

        <div className="flex flex-col items-center justify-between gap-7 py-7 lg:flex-row">

          {/* TRUST TEXT */}
          <div className="flex items-center gap-3 text-center lg:text-left">
            <div className="hidden h-2 w-2 rounded-full bg-[#C9A15B] sm:block" />

            <p className="text-sm font-medium text-gray-500">
              Trusted by{" "}
              <span className="font-semibold text-[#10254A]">
                10,000+
              </span>{" "}
              happy clients across India
            </p>
          </div>

          {/* STATS */}
          <div className="grid w-full grid-cols-2 divide-x divide-gray-100 sm:grid-cols-4 lg:w-auto">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-3 px-5 py-2 first:pl-0 last:pr-0"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
                    <Icon
                      size={18}
                      className="text-[#10254A]"
                    />
                  </div>

                  <div>
                    <p className="text-base font-bold text-[#10254A]">
                      {stat.value}
                    </p>

                    <p className="mt-0.5 whitespace-nowrap text-[11px] text-gray-500">
                      {stat.label}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}