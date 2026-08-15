import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProblemSolution from "@/components/ProblemSolution";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProblemSolution />
        <Projects />
        <Architecture />
        <TechStack />
        <Process />
        <WhyMe />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
