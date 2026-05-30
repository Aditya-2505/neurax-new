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
  const [displayPage, setDisplayPage] = useState<Page>('Home');
  const [transitionState, setTransitionState] = useState<'idle' | 'exiting' | 'entering'>('idle');

  const handleSetPage = (page: string) => {
    const targetPage = page as Page;
    if (targetPage === displayPage) return;

    // Immediately highlight the navbar link
    setCurrentPage(targetPage);
    
    // Start exit transition (fading and sliding left)
    setTransitionState('exiting');
    
    setTimeout(() => {
      // Swap content and scroll to top instantly while invisible
      setDisplayPage(targetPage);
      window.scrollTo({ top: 0 });
      
      // Position the new page transparently to the right
      setTransitionState('entering');
      
      // Trigger entrance slide-in from the right
      setTimeout(() => {
        setTransitionState('idle');
      }, 20);
    }, 250);
  };

  // Build the transition class mapping
  let transitionClass = '';
  if (transitionState === 'idle') {
    transitionClass = 'opacity-100 translate-x-0 transition-all duration-300 ease-out';
  } else if (transitionState === 'exiting') {
    transitionClass = 'opacity-0 -translate-x-12 transition-all duration-250 ease-in';
  } else if (transitionState === 'entering') {
    transitionClass = 'opacity-0 translate-x-12 transition-none';
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={handleSetPage} />
      <main className="flex-1 overflow-hidden">
        <div className={transitionClass}>
          {renderPage(displayPage, handleSetPage)}
        </div>
      </main>
      <Footer setCurrentPage={handleSetPage} />
    </div>
  );
}
