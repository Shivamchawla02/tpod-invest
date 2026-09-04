import "./globals.css";

export const metadata = {
  title: "TPOD Invest | Investments & Financial Services",
  description:
    "TPOD Investments & Financial Services helps you plan, protect and grow your wealth through Insurance, Mutual Funds and Stock Market solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}