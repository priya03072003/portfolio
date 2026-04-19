import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { themeTokens } from './themes.js';

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  // Absolutely guarantee CSS variable injection into the physical DOM Root
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
    
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (e) {
      console.warn("Storage restricted - theme won't persist.");
    }

    const activeTokens = themeTokens[theme] || themeTokens['light'];
    
    // Explicitly iterate and push styles forcibly onto the <html> tag.
    // This entirely overrides Tailwind and CSS scope limitations with maximum DOM priority.
    Object.entries(activeTokens).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    // Provide legacy classes just in case child libraries look for them
    document.documentElement.classList.remove('dark');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }

  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] transition-colors duration-500 relative overflow-x-hidden">
      {/* Hide Custom Cursor on smaller devices (usually missing hover mechanics) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      <Navbar setTheme={setTheme} currentTheme={theme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Internships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
