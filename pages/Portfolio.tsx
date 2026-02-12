
import React, { useState } from 'react';
import { MOCK_PROJECTS } from '../constants';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % MOCK_PROJECTS.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + MOCK_PROJECTS.length) % MOCK_PROJECTS.length);
    }
  };

  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">Galeria de Realizações</h2>
          <h1 className="text-5xl font-bold text-[#766c66] uppercase">Nossos Projetos</h1>
        </header>

        {/* Grid Vitrine */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {MOCK_PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className="relative aspect-square overflow-hidden group cursor-pointer"
              onClick={() => setSelectedIdx(idx)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-xs uppercase tracking-widest text-[#c4a484] mb-2 font-bold">{project.category}</span>
                <h4 className="text-white text-xl font-semibold uppercase">{project.title}</h4>
                <div className="mt-4 w-8 h-[1px] bg-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <button 
            onClick={() => setSelectedIdx(null)}
            className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform z-[110]"
          >
            <X size={36} />
          </button>

          <button 
            onClick={handlePrev}
            className="absolute left-6 text-white/50 hover:text-white transition-colors z-[110]"
          >
            <ChevronLeft size={48} />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-6 text-white/50 hover:text-white transition-colors z-[110]"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={MOCK_PROJECTS[selectedIdx].image} 
              alt={MOCK_PROJECTS[selectedIdx].title} 
              className="max-h-[85vh] max-w-full object-contain shadow-2xl animate-fade-in"
            />
            
            <div className="absolute bottom-10 left-10 right-10 md:left-24 md:right-24 text-white text-center md:text-left bg-black/40 backdrop-blur-sm p-8 border-l-2 border-[#c4a484]">
              <h4 className="text-3xl font-bold mb-2 uppercase">{MOCK_PROJECTS[selectedIdx].title}</h4>
              <p className="text-sm text-gray-300 font-light max-w-2xl">{MOCK_PROJECTS[selectedIdx].description}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </main>
  );
};

export default Portfolio;
