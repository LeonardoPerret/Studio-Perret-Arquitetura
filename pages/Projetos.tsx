
import React from 'react';
import { MOCK_PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projetos: React.FC = () => {
  return (
    <main className="pt-[88px] pb-24">
      {/* Imagem de Destaque Full Width Monitor */}
      <section className="relative w-full h-[800px] overflow-hidden mb-24">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
          alt="Arquitetura Corporativa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-12 md:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-white text-6xl md:text-9xl font-bold uppercase tracking-tighter drop-shadow-2xl">
              Projetos
            </h1>
            <div className="w-32 h-1 bg-[#c4a484] mt-6 mb-4 shadow-lg"></div>
            <p className="text-white/80 text-lg md:text-xl uppercase tracking-[0.4em] font-light">
              Nossa trajetória em cada detalhe
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Project List */}
        <div className="space-y-32">
          {MOCK_PROJECTS.map((project, idx) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-7 overflow-hidden rounded-sm shadow-2xl">
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-5 flex flex-col items-start">
                  <span className="text-xs uppercase tracking-[0.4em] text-[#c4a484] mb-4 font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#766c66] mb-6 flex items-center gap-4 group-hover:text-[#c4a484] transition-colors uppercase leading-tight">
                    {project.title}
                    <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300 text-[#c4a484]" />
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                    {project.description} No Studio Perret, cada projeto é encarado como um desafio singular de design, onde buscamos as melhores soluções estéticas e funcionais para nossos clientes.
                  </p>
                  <button className="text-[11px] uppercase tracking-[0.4em] font-bold border-b-2 border-[#766c66] pb-2 hover:border-[#c4a484] hover:text-[#c4a484] transition-all">
                    Explorar Projeto
                  </button>
                </div>
              </div>
              {idx < MOCK_PROJECTS.length - 1 && (
                <div className="h-[1px] bg-gray-100 mt-32"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projetos;
