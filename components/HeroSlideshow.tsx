
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1600566753190-17f0bbc2a6c3?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1920'
];

const HeroSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[900px] overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Architecture Project ${idx + 1}`}
            className="w-full h-full object-cover transform scale-105 animate-[slow-zoom_20s_linear_infinite]"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg uppercase">
          Studio Perret Arquitetura
        </h1>
        <div className="w-16 h-[2px] bg-white mb-6"></div>
        <p className="text-lg md:text-xl font-light tracking-[0.3em] uppercase drop-shadow-md">
          Elegância & Funcionalidade
        </p>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSlideshow;
