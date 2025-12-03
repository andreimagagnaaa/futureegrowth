export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-background pt-32 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Background Text Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/[0.01] pointer-events-none select-none tracking-widest whitespace-nowrap">
        FUTUREE
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 text-xs tracking-widest uppercase text-gray-600 md:flex-row">
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors relative group">
              Futuree Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="hover:text-primary transition-colors relative group">
              Futuree Pages
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="hover:text-primary transition-colors relative group">
              Futuree Agents
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="hover:text-primary transition-colors relative group">
              Futuree Platform
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
          <div>
            Copyright © 2025 Futuree Growth.
          </div>
        </div>
      </div>
    </footer>
  );
};
