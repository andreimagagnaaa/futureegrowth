import { useState, useEffect } from 'react';
import { Button } from './Button';
import { ContactModal } from './ContactModal';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] overflow-hidden transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-xl font-sans font-bold tracking-tighter text-white flex items-center">
            FUTUREE<span className="text-primary">.</span><span className="font-light text-gray-300 tracking-[0.2em] text-sm ml-1.5 mt-0.5">GROWTH</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#methodology" className="hover:text-white transition-colors">Metodologia</a>
          <a href="#solutions" className="hover:text-white transition-colors">Soluções</a>
          <a href="#results" className="hover:text-white transition-colors">Resultados</a>
          <a href="#about" className="hover:text-white transition-colors">Sobre</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            size="sm" 
            variant="outline" 
            className="border-primary/50 hover:bg-primary hover:text-black hover:border-primary"
            onClick={() => setIsModalOpen(true)}
          >
            Agendar Diagnóstico
          </Button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};
