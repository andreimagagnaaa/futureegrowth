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
import Business from './pages/Business';
import { InternalLayout } from './layouts/InternalLayout';
import { ProjectDetails } from './pages/ProjectDetails';
import { AllTasks } from './pages/AllTasks';
import { Clients } from './pages/Clients';
import { ClientDetails } from './pages/ClientDetails';
import { Login } from './pages/Login';
import { School } from './pages/School';
import { SchoolDiverge } from './pages/SchoolDiverge';
import { SchoolDemandB2B } from './pages/SchoolDemandB2B';
import { SchoolOne } from './pages/SchoolOne';
import { SchoolAutenticidade } from './pages/SchoolAutenticidade';
import { SchoolAI } from './pages/SchoolAI';
import { SchoolCommodity } from './pages/SchoolCommodity';
import { SchoolOneMillion } from './pages/SchoolOneMillion';
import { SchoolLever } from './pages/SchoolLever';
import { SchoolPLG } from './pages/SchoolPLG';
import { SchoolVibe } from './pages/SchoolVibe';
import { SchoolMicroSaaS } from './pages/SchoolMicroSaaS';
import { SchoolYouTubeLong } from './pages/SchoolYouTubeLong';
import { ProposalSellMentors } from './pages/ProposalSellMentors';
import { ProposalDCLC } from './pages/ProposalDCLC';
import { RequireAuth } from './components/RequireAuth';
import { Analytics } from "@vercel/analytics/react"

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
          <Route path="/school-mkt-2026" element={<School />} />
          <Route path="/school-mkt-diverge" element={<SchoolDiverge />} />
          <Route path="/school-mkt-demand-b2b" element={<SchoolDemandB2B />} />
          <Route path="/school-mkt-one" element={<SchoolOne />} />
          <Route path="/school-mkt-autenticidade" element={<SchoolAutenticidade />} />
          <Route path="/school-mkt-ai-generativa" element={<SchoolAI />} />
          <Route path="/school-mkt-commodity" element={<SchoolCommodity />} />
          <Route path="/school-mkt-1-1m" element={<SchoolOneMillion />} />
          <Route path="/school-mkt-alavanca" element={<SchoolLever />} />
        <Route path="/school-mkt-PLG" element={<SchoolPLG />} />
        <Route path="/school-mkt-Vibe" element={<SchoolVibe />} />
        <Route path="/school-mkt-MicroSaaS" element={<SchoolMicroSaaS />} />
        <Route path="/school-mkt-yt-longo" element={<SchoolYouTubeLong />} />
        <Route path="/proposta-SellMentors" element={<ProposalSellMentors />} />
        <Route path="/proposta-dclc" element={<ProposalDCLC />} />
        <Route path="/login" element={<Login />} />          {/* Internal System Routes */}
          <Route path="/business" element={
            <RequireAuth>
              <InternalLayout />
            </RequireAuth>
          }>
            <Route index element={<Business />} />
            <Route path="tasks" element={<AllTasks />} />
            <Route path="clients" element={<Clients />} />
            <Route path="clients/:id" element={<ClientDetails />} />
            <Route path=":slug" element={<ProjectDetails />} />
          </Route>
        </Routes>
        <Analytics />
      </main>
    </Router>
  );
}

export default App;
