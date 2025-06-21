import Hero from "@/components/Hero";
import AboutProject from "@/components/AboutProject";
import MarketProblem from "@/components/MarketProblem";
import Solution from "@/components/Solution";
import BusinessModel from "@/components/BusinessModel";
import Investment from "@/components/Investment";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutProject />
      <MarketProblem />
      <Solution />
      <BusinessModel />
      <Investment />
      <Team />
      <ContactForm />
    </div>
  );
};

export default Index;
