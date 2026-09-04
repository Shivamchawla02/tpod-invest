"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sprout,
  TrendingUp,
  HeartPulse,
  Umbrella,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react";

const services = [
  {
    title: "Insurance",
    description:
      "Protect yourself and your loved ones with the right insurance solutions designed for life's uncertainties.",
    icon: ShieldCheck,
    theme: "blue",
    items: [
      "Life Insurance",
      "Health Insurance",
      "General Insurance",
      "Retirement Planning",
    ],
    href: "/insurance",
  },
  {
    title: "Mutual Funds",
    description:
      "Build long-term wealth through professionally managed mutual fund investments aligned with your financial goals.",
    icon: Sprout,
    theme: "green",
    items: [
      "SIP Plans",
      "Equity Funds",
      "Debt Funds",
      "Tax Saving Funds",
    ],
    href: "/mutual-funds",
  },
  {
    title: "Stock Market",
    description:
      "Participate in the growth of the market with informed investment strategies built around your objectives.",
    icon: TrendingUp,
    theme: "gold",
    items: [
      "Equity Investments",
      "IPO & NCD",
      "Portfolio Advisory",
      "Market Research",
    ],
    href: "/stock-market",
  },
];

function ServiceIllustration({ type }) {
  if (type === "blue") {
    return (
      <div className="absolute bottom-7 right-7 opacity-90">
        <div className="relative">

          <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-blue-100 bg-white shadow-sm">
            <Umbrella
              size={54}
              strokeWidth={1.5}
              className="text-blue-500"
            />
          </div>

          <div className="absolute -bottom-2 -left-5 rounded-xl bg-white p-2.5 shadow-lg">
            <HeartPulse
              size={20}
              className="text-blue-500"
            />
          </div>

        </div>
      </div>
    );
  }

  if (type === "green") {
    return (
      <div className="absolute bottom-6 right-7 opacity-90">
        <div className="relative">

          <div className="h-24 w-24 rounded-b-[30px] bg-gradient-to-b from-[#e7c6a1] to-[#c99661]" />

          <div className="absolute -top-20 left-3">
            <Sprout
              size={75}
              strokeWidth={1.4}
              className="text-green-600"
            />
          </div>

          <div className="absolute -right-7 top-[-50px]">
            <Sprout
              size={48}
              strokeWidth={1.4}
              className="rotate-45 text-green-500"
            />
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="absolute bottom-8 right-7 opacity-90">
      <div className="relative flex h-32 items-end gap-2">

        <div className="h-14 w-5 rounded-t bg-orange-200" />
        <div className="h-20 w-5 rounded-t bg-orange-300" />
        <div className="h-28 w-5 rounded-t bg-[#C9A15B]" />
        <div className="h-20 w-5 rounded-t bg-orange-300" />
        <div className="h-32 w-5 rounded-t bg-[#10254A]" />

        <TrendingUp
          size={90}
          strokeWidth={1.5}
          className="absolute -left-5 -top-3 text-[#C9A15B]"
        />

      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="tpod-section bg-[#FAFBFD]">

      <div className="container-tpod">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >

          <p className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#C9A15B]">
            Our Services
          </p>

          <h2 className="text-3xl font-semibold tracking-[-1px] text-[#10254A] sm:text-4xl">
            Comprehensive Financial Solutions
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-500">
            From protecting your family to growing your wealth,
            we provide solutions designed around your financial
            goals and future aspirations.
          </p>

        </motion.div>

        {/* SERVICES */}
        <div className="grid gap-6 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            const backgrounds = {
              blue: "bg-[#F0F6FF]",
              green: "bg-[#F0F8F3]",
              gold: "bg-[#FCF7ED]",
            };

            const iconBackgrounds = {
              blue: "bg-white text-blue-600",
              green: "bg-white text-green-600",
              gold: "bg-white text-[#C9A15B]",
            };

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className={`group relative min-h-[470px] overflow-hidden rounded-[24px] border border-white p-8 shadow-sm ${backgrounds[service.theme]}`}
              >

                {/* ICON */}
                <div
                  className={`mb-7 flex h-14 w-14 items-center justify-center rounded-full shadow-sm ${iconBackgrounds[service.theme]}`}
                >
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl font-semibold text-[#10254A]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-[330px] text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                {/* FEATURES */}
                <div className="mt-7 space-y-3">

                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-green-600 shadow-sm">
                        ✓
                      </span>

                      {item}
                    </div>
                  ))}

                </div>

                {/* LINK */}
                <Link
                  href={service.href}
                  className="group/link absolute bottom-8 left-8 flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#10254A] shadow-sm transition hover:shadow-md"
                >
                  Learn More

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </Link>

                {/* ILLUSTRATION */}
                <ServiceIllustration type={service.theme} />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}