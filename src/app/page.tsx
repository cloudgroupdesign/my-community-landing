import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Below-fold sections — lazy loaded after LCP
const Story        = dynamic(() => import("@/components/Story"),        { ssr: true });
const PainPoints   = dynamic(() => import("@/components/PainPoints"),   { ssr: true });
const Features     = dynamic(() => import("@/components/Features"),     { ssr: true });
const Integrations = dynamic(() => import("@/components/Integrations"), { ssr: true });
const Advantages   = dynamic(() => import("@/components/Advantages"),   { ssr: true });
const ForWho       = dynamic(() => import("@/components/ForWho"),       { ssr: true });
const FinalCTA     = dynamic(() => import("@/components/FinalCTA"),     { ssr: true });
const Footer       = dynamic(() => import("@/components/Footer"),       { ssr: true });

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
