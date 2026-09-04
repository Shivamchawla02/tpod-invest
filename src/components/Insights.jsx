"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  BookOpen,
} from "lucide-react";

const articles = [
  {
    category: "MUTUAL FUNDS",
    title: "How Does SIP Investing Work?",
    description:
      "Understand how systematic investing can help you build long-term wealth.",
    date: "May 20, 2026",
    readTime: "5 min read",
    type: "sip",
  },
  {
    category: "INVESTING",
    title: "SIP vs Lumpsum: Which Is Better?",
    description:
      "Explore the difference between SIP and lumpsum investing and when each approach may be useful.",
    date: "May 14, 2026",
    readTime: "4 min read",
    type: "money",
  },
  {
    category: "STOCK MARKET",
    title: "How Beginners Can Start Investing",
    description:
      "A simple introduction to understanding the stock market and starting your investment journey.",
    date: "May 08, 2026",
    readTime: "6 min read",
    type: "market",
  },
];

function ArticleVisual({ type }) {
  if (type === "sip") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#eaf3ff] to-[#d8e8fa]">
        <div className="absolute bottom-8 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-white/70" />

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-end gap-2">
          <div className="h-12 w-10 rounded-t bg-[#C9A15B]" />
          <div className="h-20 w-10 rounded-t bg-[#10254A]" />
          <div className="h-28 w-10 rounded-t bg-[#7DA66D]" />
        </div>

        <div className="absolute left-1/2 top-10 -translate-x-1/2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#10254A] shadow-lg">
          SIP
        </div>
      </div>
    );
  }

  if (type === "money") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#FCF7ED] to-[#F4E4C9]">

        <div className="absolute bottom-8 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full border-[14px] border-[#C9A15B] bg-white" />

        <div className="absolute left-1/2 top-10 -translate-x-1/2 rounded-xl bg-white px-4 py-3 shadow-lg">
          <span className="text-xl font-bold text-[#10254A]">
            ₹
          </span>
        </div>

      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#edf7f1] to-[#d9eadf]">

      <div className="absolute bottom-10 left-8 right-8">
        <svg
          viewBox="0 0 400 150"
          className="h-full w-full"
          fill="none"
        >
          <path
            d="M10 130 L75 105 L125 112 L180 65 L235 80 L300 35 L390 10"
            stroke="#4E8C68"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M10 130 L75 105 L125 112 L180 65 L235 80 L300 35 L390 10"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeDasharray="5 8"
          />
        </svg>
      </div>

      <div className="absolute left-6 top-6 rounded-xl bg-white px-4 py-3 shadow-lg">
        <span className="text-xs font-bold text-[#10254A]">
          MARKET
        </span>
      </div>

    </div>
  );
}

export default function Insights() {
  return (
    <section className="tpod-section bg-white">

      <div className="container-tpod">

        {/* HEADER */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#C9A15B]">
              Insights
            </p>

            <h2 className="text-3xl font-semibold tracking-[-1px] text-[#10254A] sm:text-4xl">
              Latest Financial Insights
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Simple, practical insights to help you understand
              money, investing and financial planning better.
            </p>
          </div>

          <Link
            href="/resources"
            className="group flex items-center gap-2 text-sm font-semibold text-[#10254A]"
          >
            View All Articles

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* ARTICLES */}
        <div className="grid gap-6 lg:grid-cols-3">

          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              {/* IMAGE / VISUAL */}
              <div className="h-[220px] overflow-hidden">
                <ArticleVisual type={article.type} />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <p className="text-[10px] font-bold tracking-[1.5px] text-[#C9A15B]">
                  {article.category}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-7 text-[#10254A]">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {article.description}
                </p>

                <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-5 text-[11px] text-gray-400">

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={13} />
                    {article.readTime}
                  </span>

                  <span>{article.date}</span>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}