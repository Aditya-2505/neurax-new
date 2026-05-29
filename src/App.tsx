import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Technology from './pages/Technology';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import MedicalDisclaimer from './pages/MedicalDisclaimer';
import CookiePolicy from './pages/CookiePolicy';

type Page = 'Home' | 'Solutions' | 'Technology' | 'About Us' | 'Resources' | 'Contact' | 'Privacy Policy' | 'Terms of Use' | 'Medical Disclaimer' | 'Cookie Policy';

function renderPage(page: Page, setCurrentPage: (page: string) => void) {
  switch (page) {
    case 'Home': return <Home setCurrentPage={setCurrentPage} />;
    case 'Solutions': return <Solutions setCurrentPage={setCurrentPage} />;
    case 'Technology': return <Technology setCurrentPage={setCurrentPage} />;
    case 'About Us': return <AboutUs />;
    case 'Resources': return <Resources setCurrentPage={setCurrentPage} />;
    case 'Contact': return <Contact />;
    case 'Privacy Policy': return <PrivacyPolicy />;
    case 'Terms of Use': return <TermsOfUse />;
    case 'Medical Disclaimer': return <MedicalDisclaimer />;
    case 'Cookie Policy': return <CookiePolicy />;
    default: return <Home setCurrentPage={setCurrentPage} />;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const handleSetPage = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={handleSetPage} />
      <main className="flex-1">
        {renderPage(currentPage, handleSetPage)}
      </main>
      <Footer setCurrentPage={handleSetPage} />
    </div>
  );
}
