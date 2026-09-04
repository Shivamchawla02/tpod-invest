import Link from "next/link";

/* =========================================
   SIMPLE INLINE ICONS
   These do NOT depend on lucide-react
========================================= */

function InstagramIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A2 2 0 1 0 4.8 7a2 2 0 0 0 .05-4ZM21 13.85c0-3.75-2-5.5-4.65-5.5-2.15 0-3.1 1.18-3.65 2v-1.85H9.4V21h3.3v-6.2c0-1.64.3-3.22 2.34-3.22 2.02 0 2.05 1.87 2.05 3.33V21h3.3l.01-7.15Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12c1.88.58 9.38.58 9.38.58s7.5 0 9.38-.58a3 3 0 0 0 2.12-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.6 3.9-6.6 3.9Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21" />
      <path d="M12 3c-2.5 2.5-3.8 5.5-3.8 9S9.5 18.5 12 21" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}


/* =========================================
   FOOTER
========================================= */

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">

      <div className="container-tpod">

        {/* =====================================
            MAIN FOOTER
        ====================================== */}

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">

          {/* =====================================
              BRAND
          ====================================== */}

          <div>

            <Link href="/" className="inline-block">

              <div className="text-[30px] font-bold leading-none tracking-[-2px] text-[#10254A]">
                TP<span className="text-[#C9A15B]">O</span>D
              </div>

              <div className="mt-1 text-[7px] font-semibold tracking-[1.5px] text-gray-500">
                INVESTMENTS & FINANCIAL SERVICES
              </div>

            </Link>

            <p className="mt-6 max-w-[280px] text-sm leading-6 text-gray-500">
              Helping individuals and families plan, protect
              and grow their wealth through thoughtful
              financial solutions.
            </p>


            {/* SOCIAL MEDIA */}

            <div className="mt-6 flex gap-3">

              {/* Website */}

              <a
                href="#"
                aria-label="Website"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#10254A] hover:text-[#10254A]"
              >
                <GlobeIcon />
              </a>


              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#10254A] hover:text-[#10254A]"
              >
                <InstagramIcon />
              </a>


              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#10254A] hover:text-[#10254A]"
              >
                <LinkedinIcon />
              </a>


              {/* YouTube */}

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#10254A] hover:text-[#10254A]"
              >
                <YoutubeIcon />
              </a>

            </div>

          </div>


          {/* =====================================
              COMPANY
          ====================================== */}

          <div>

            <h3 className="text-sm font-semibold text-[#10254A]">
              Company
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/about"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                About Us
              </Link>

              <Link
                href="/about"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Our Team
              </Link>

              <Link
                href="/careers"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Careers
              </Link>

              <Link
                href="/contact"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Contact Us
              </Link>

            </div>

          </div>


          {/* =====================================
              SERVICES
          ====================================== */}

          <div>

            <h3 className="text-sm font-semibold text-[#10254A]">
              Services
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/insurance"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Insurance
              </Link>

              <Link
                href="/mutual-funds"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Mutual Funds
              </Link>

              <Link
                href="/stock-market"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Stock Market
              </Link>

              <Link
                href="/financial-planning"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Financial Planning
              </Link>

            </div>

          </div>


          {/* =====================================
              RESOURCES
          ====================================== */}

          <div>

            <h3 className="text-sm font-semibold text-[#10254A]">
              Resources
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/resources"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Financial Insights
              </Link>

              <Link
                href="/calculators"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Calculators
              </Link>

              <Link
                href="/faq"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                FAQs
              </Link>

              <Link
                href="/contact"
                className="block text-sm text-gray-500 transition hover:text-[#10254A]"
              >
                Get Advice
              </Link>

            </div>

          </div>


          {/* =====================================
              CONTACT
          ====================================== */}

          <div>

            <h3 className="text-sm font-semibold text-[#10254A]">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              {/* PHONE */}

              <div className="flex items-start gap-3">

                <PhoneIcon />

                <div>

                  <p className="text-xs text-gray-400">
                    Call us
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-600">
                    +91 XXXXX XXXXX
                  </p>

                </div>

              </div>


              {/* EMAIL */}

              <div className="flex items-start gap-3">

                <MailIcon />

                <div>

                  <p className="text-xs text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-600">
                    info@tpodinvest.com
                  </p>

                </div>

              </div>


              {/* ADDRESS */}

              <div className="flex items-start gap-3">

                <MapPinIcon />

                <div>

                  <p className="text-xs text-gray-400">
                    Office
                  </p>

                  <p className="mt-1 text-sm font-medium leading-5 text-gray-600">
                    India
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            DISCLAIMER
        ====================================== */}

        <div className="border-t border-gray-100 py-6">

          <p className="text-[11px] leading-5 text-gray-400">
            Investments are subject to market risks. Please read
            all scheme related documents carefully before investing.
            Past performance does not guarantee future returns.
            The information provided on this website is for general
            informational purposes and should not be considered
            investment advice.
          </p>

        </div>


        {/* =====================================
            BOTTOM BAR
        ====================================== */}

        <div className="flex flex-col justify-between gap-4 border-t border-gray-100 py-6 text-xs text-gray-400 sm:flex-row">

          <p>
            © {new Date().getFullYear()} TPOD Investments & Financial Services.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              href="/privacy-policy"
              className="transition hover:text-[#10254A]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#10254A]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer"
              className="transition hover:text-[#10254A]"
            >
              Disclaimer
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}