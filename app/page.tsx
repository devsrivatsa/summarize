import HeroSection from "@/components/home/hero-section";
import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HowItWorks from "@/components/home/how-it-works-section";
export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
      <DemoSection />
      <HowItWorks />
      </div>
      {/* <PricingSection /> */}
      {/* <CTASection /> */}
      
    </div>
  );
}
