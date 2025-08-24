import { Features, CTA, Header, Hero, Footer } from "../components";
import { features } from "../Data";

export const Home = () => {
  return (
    <div className="font-display">
        <Header/>
        <Hero />
      <Features features={features} />
      <CTA />
      <Footer />
      
    </div>
  );
};

        