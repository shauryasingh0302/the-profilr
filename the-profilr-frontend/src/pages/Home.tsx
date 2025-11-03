import { About } from "../components/About";
import { Cta } from "../components/Cta";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Navbar } from "../components/Navbar";
import { Pricing } from "../components/Pricing";
import { ScrollToTop } from "../components/ScrollToTop";
import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import "../App.css";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Services />
      <Testimonials />
      <About />
      <Team />
      <Pricing />
      <FAQ />
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}
