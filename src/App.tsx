import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TheShift } from './sections/TheShift';
import { HiddenProblem } from './sections/HiddenProblem';
import { Comparison } from './sections/Comparison';
import { Philosophy } from './sections/Philosophy';
import { Ecosystem } from './sections/Ecosystem';
import { Protocol } from './sections/Protocol';
import { Implementation } from './sections/Implementation';
import { Solutions } from './sections/Solutions';
import { Industries } from './sections/Industries';
import { Qualification } from './sections/Qualification';
import { Founder } from './sections/Founder';
import { SocialProof } from './sections/SocialProof';
import { TheAudit } from './sections/TheAudit';
import { TechStack } from './sections/TechStack';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import { MarketingPlan } from './pages/MarketingPlan';

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <TheShift />
    <HiddenProblem />
    <Comparison />
    <SocialProof />
    <Philosophy />
    <Ecosystem />
    <Protocol />
    <Implementation />
    <Industries />
    <Solutions />
    <Qualification />
    <Founder />
    <TheAudit />
    <TechStack />
    <FAQ />
    <CTA />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden">
        <div className="noise-overlay" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/marketing-plan" element={<MarketingPlan />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
