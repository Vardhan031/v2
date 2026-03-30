import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Pricing from "../components/Pricing";
import Trainers from "../components/Trainers";
import CTA from "../components/Cta";

const Home = () => {
    return (
        <main className="bg-black text-white">

            {/* Hero */}
            <Hero />

            {/* Features */}
            <WhyChooseUs />

            {/* Pricing */}
            <Pricing />

            {/* Trainers */}
            <Trainers />

            {/* Final CTA */}
            <CTA />

        </main>
    );
};

export default Home;