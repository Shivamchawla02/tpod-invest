import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrustBar />

        <Services />

        <WhyChooseUs />

        <HowItWorks />

        <Partners />

        <Insights />

        <CTA />
      </main>

      <Footer />
    </>
  );
}