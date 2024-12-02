import Image from "next/image";
import HeroSection from "../components/Sections/HeroSection";
import SupportedSection from "../components/Sections/SupportedSection";
import Title from "../components/Shared/Title";
import StrategiesSection from "../components/Sections/StrategiesSection";

export default function Home() {
  return (
    <>
      <div className=" h-auto w-full">
        <HeroSection />
        <SupportedSection/>
        <StrategiesSection />
      </div>
    </>
  );
}
