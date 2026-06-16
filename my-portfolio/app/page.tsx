import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-slate-900">
      <section className=" text-white bg-background-dark">
        <div className="max-w-7xl mx-auto px-8">
          <Navbar />
          <Hero />
        </div>
      </section>
      <section className="bg-background">
        <Projects />
      </section>
      <section className="bg-slate-100">
        <Skills />
      </section>
      <section className="bg-background">
        <Contact />
      </section>
      <footer className="bg-background-dark text-white">
        <Footer />
      </footer>
    </main>
  );
}