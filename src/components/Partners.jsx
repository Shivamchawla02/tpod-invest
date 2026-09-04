"use client";

import { motion } from "framer-motion";

const platforms = [
  "MUTUAL FUNDS",
  "INSURANCE",
  "EQUITIES",
  "BONDS",
  "NPS",
  "IPO",
];

export default function Partners() {
  return (
    <section className="border-y border-gray-100 bg-white py-16">

      <div className="container-tpod">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >

          <p className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
            Our Financial Solutions
          </p>

          <h3 className="mt-3 text-xl font-semibold text-[#10254A]">
            Access to a Wide Range of Investment Opportunities
          </h3>

        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {platforms.map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="flex h-[72px] items-center justify-center rounded-2xl border border-gray-100 bg-[#FAFBFD] px-4 text-center transition hover:border-[#d9c398] hover:bg-white hover:shadow-sm"
            >
              <span className="text-[11px] font-bold tracking-[1px] text-gray-500">
                {platform}
              </span>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}