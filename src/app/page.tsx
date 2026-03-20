import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Advantages from "@/components/Advantages";
import ForWho from "@/components/ForWho";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <Story />
      <PainPoints />
      <Features />
      <Integrations />
      <Advantages />
      <ForWho />
      <FinalCTA />
      <Footer />
    </main>
  );
}
