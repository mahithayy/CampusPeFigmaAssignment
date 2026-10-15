
import Header from './components/Header.jsx';
import HeroSection from './sections/HeroSection.jsx';
import OpportunitySection from './sections/OpportunitySection.jsx';
import ResumeSection from './sections/ResumeSection.jsx';
import CollegeSection from './sections/CollegeSection.jsx';
import EmployerSection from './sections/EmployerSection.jsx';
import AppShowcaseSection from './sections/AppShowcaseSection.jsx';
import SupportSection from './sections/SupportSection.jsx';
import FinalCTASection from './sections/FinalCTASection.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OpportunitySection />
        <ResumeSection />
        <CollegeSection />
        <EmployerSection />
        <AppShowcaseSection />
        <SupportSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
