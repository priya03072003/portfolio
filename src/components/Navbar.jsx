import { Menu, X, Palette, LayoutGrid } from 'lucide-react';
import { useState, useEffect } from 'react';
import { themeTokens } from '../themes.js';

const Navbar = ({ setTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#experience' },
    { name: 'Experience', href: '#internships' },
    { name: 'Contact', href: '#contact' },
  ];

  const themes = [
    { id: 'light', name: 'Light' },
    { id: 'dark', name: 'Dark' },
    { id: 'dracula', name: 'Dracula' },
    { id: 'cyberpunk', name: 'Cyberpunk' },
    { id: 'nord', name: 'Nord' },
    { id: 'ocean', name: 'Ocean' },
    { id: 'forest', name: 'Forest' },
    { id: 'sunset', name: 'Sunset' },
    { id: 'lavender', name: 'Lavender' },
  ];

  // Close theme modal with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setThemeMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <nav className="fixed w-full z-[100] bg-[var(--surface-color)]/90 backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="font-extrabold text-xl tracking-tight text-[var(--color-primary)]">
              PRIYADHARSHINI.G
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-bold tracking-wide uppercase hover:-translate-y-0.5 transform inline-block cursor-none"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => setThemeMenuOpen(true)}
              className="px-4 py-2 rounded-2xl border-2 border-[var(--border-color)] hover:border-[var(--color-primary)] bg-[var(--surface-color)] transition-all text-[var(--text-primary)] flex items-center justify-center gap-2 shadow-sm cursor-none hover:shadow-[0_0_15px_var(--color-primary)] group"
            >
              <Palette className="w-4 h-4 text-[var(--color-primary)] group-hover:animate-pulse" />
              <span className="text-xs font-bold uppercase hidden lg:block tracking-widest">Theme Engine</span>
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => { setThemeMenuOpen(true); setIsOpen(false); }}
              className="p-2 rounded-xl border border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/10 cursor-none"
            >
              <Palette className="w-5 h-5" />
            </button>

            <button onClick={() => { setIsOpen(!isOpen); setThemeMenuOpen(false); }} className="p-2 rounded-xl border border-[var(--text-secondary)]/30 text-[var(--text-primary)] cursor-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Expanded */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--surface-color)] border-b border-[var(--border-color)] w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-bold text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-color)] rounded-xl uppercase tracking-wide border border-transparent hover:border-[var(--color-primary)] transition-all cursor-none"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen Theme Modal Showcase */}
      {themeMenuOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-16 md:pt-24 pb-safe px-3 md:px-4 bg-black/60 backdrop-blur-2xl transition-all duration-500 overflow-y-auto w-screen h-screen">
          <div
            className="absolute inset-0 cursor-none"
            onClick={() => setThemeMenuOpen(false)}
          ></div>

          <div className="relative w-full max-w-3xl bg-[var(--surface-color)] border border-[var(--border-color)] rounded-3xl md:rounded-[2rem] shadow-2xl p-4 sm:p-6 md:p-8 z-10 animate-[fadeIn_0.4s_cubic-bezier(0.16,1,0.3,1)] mt-auto mb-auto">
            <div className="flex justify-between items-center mb-4 md:mb-6 border-b border-[var(--border-color)] pb-3 md:pb-4">
              <div>
                <h2 className="text-lg md:text-2xl font-extrabold text-[var(--text-primary)] flex items-center gap-2 md:gap-3 tracking-tighter">
                  <Palette className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-primary)]" />
                  Creative Environments
                </h2>
                <p className="text-[var(--text-secondary)] mt-1 text-xs md:text-sm font-medium tracking-wide">Select a dynamic aesthetic to instantly recalculate global variables.</p>
              </div>
              <button
                onClick={() => setThemeMenuOpen(false)}
                className="p-2 bg-[var(--bg-color)] hover:bg-[var(--color-primary)] hover:text-white rounded-full border border-[var(--border-color)] transition-all cursor-none group shadow-sm"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-h-[65vh] overflow-y-auto pr-2 hide-scroll-bar py-2">
              {themes.map((t) => {
                const tokens = themeTokens[t.id];
                const bgColor = tokens['--bg-color'];
                const surfaceColor = tokens['--surface-color'];
                const primaryColor = tokens['--color-primary'];
                const secondaryColor = tokens['--color-secondary'];
                const textColor = tokens['--text-primary'];

                const isActive = currentTheme === t.id;

                return (
                  <button
                    key={t.id}
                    onClick={() => { setTheme(t.id); setThemeMenuOpen(false); }}
                    className={`relative overflow-hidden p-4 rounded-2xl transition-all duration-300 outline-none cursor-none group flex flex-col justify-between h-32 border-2`}
                    style={{
                      backgroundColor: bgColor,
                      borderColor: isActive ? primaryColor : tokens['--border-color'],
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: isActive ? `0 10px 20px -5px ${primaryColor}40` : '0 2px 4px -1px rgba(0,0,0,0.1)'
                    }}
                  >
                    {/* Abstract background blobs for premium feel */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-[0.15] blur-xl transition-transform duration-700 group-hover:scale-150" style={{ backgroundColor: primaryColor }}></div>
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-[0.15] blur-xl transition-transform duration-700 group-hover:scale-150" style={{ backgroundColor: secondaryColor }}></div>

                    {/* Active Indicator Ring */}
                    {isActive && (
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse z-20"></div>
                    )}

                    <div className="relative z-10 w-full">
                      {/* Color Palette Mini-Display */}
                      <div className="inline-flex gap-1.5 p-1.5 rounded-xl bg-black/10 backdrop-blur-md shadow-inner border border-white/5">
                        <div className="w-3.5 h-3.5 rounded-full shadow-sm relative overflow-hidden" style={{ backgroundColor: surfaceColor }}></div>
                        <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: primaryColor }}></div>
                        <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: secondaryColor }}></div>
                      </div>
                    </div>

                    <div className="relative z-10 text-left mt-auto">
                      <h3 className="text-base md:text-lg font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1" style={{ color: textColor }}>
                        {t.name}
                      </h3>
                      <p className="text-[10px] font-bold opacity-60 mt-0.5 uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-1" style={{ color: textColor }}>
                        {isActive ? 'Active' : 'Activate'}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
