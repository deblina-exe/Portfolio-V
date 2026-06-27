import AnimatedBackground from "./components/AnimatedBackground";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Qualifications from "./sections/Qualifications";
import Subjects from "./sections/Subjects";
import TeachingModes from "./sections/TeachingModes";
import Approach from "./sections/Approach";
import WhyChoose from "./sections/WhyChoose";
import Results from "./sections/Results";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

/** Root layout: decorative background + sticky nav + content sections. */
function App() {
    return (
        <div className="relative min-h-screen">
            <AnimatedBackground />
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Qualifications />
                <Subjects />
                <TeachingModes />
                <Approach />
                <WhyChoose />
                <Results />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
