import Hero from "../components/home/Hero";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Technology from "../components/home/Technology";
import TrackRecord from "../components/home/TrackRecord";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Technology />
      <ServicesOverview />
      <TrackRecord />
      <CTASection />
    </>
  );
}
