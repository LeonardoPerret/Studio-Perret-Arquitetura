
import React from 'react';

const Sobre: React.FC = () => {
  return (
    <main className="pt-[0px] pb-24">
      {/* Imagem de Destaque - Full Width Monitor */}
      <section className="relative w-full h-[800px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1920" 
          alt="Projeto em Destaque" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-8xl font-bold drop-shadow-2xl uppercase tracking-tighter">
              Nossa Essência
            </h1>
            <div className="w-24 h-1 bg-[#c4a484] mx-auto mt-6 shadow-lg"></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Texto Introdutório */}
        <section className="mt-20 mb-32 text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Fundado na paixão pela transformação de espaços, o Studio Perret Arquitetura une o rigor técnico à sensibilidade artística para criar projetos atemporais e significativos que elevam a experiência humana.
          </p>
        </section>

        {/* Both Architects */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" 
              alt="Juliana Perret e Armando Junior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.4em] text-[#c4a484] mb-6 font-bold">A Direção Criativa</h3>
            <h4 className="text-4xl font-bold text-[#766c66] mb-8 uppercase">Juliana Perret & <br/>Armando Junior</h4>
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>Com mais de uma década de experiência combinada, Juliana e Armando lideram o Studio Perret com uma visão integrada da arquitetura. Acreditamos que cada projeto é uma narrativa única entre o homem e seu habitat.</p>
              <p>Nossa abordagem busca o equilíbrio entre o minimalismo contemporâneo e o calor dos materiais naturais, resultando em ambientes que não apenas abrigam, mas inspiram profundamente quem os habita.</p>
            </div>
          </div>
        </section>

        {/* Juliana Profile */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1 text-right">
            <h3 className="text-sm uppercase tracking-[0.4em] text-[#c4a484] mb-6 font-bold">Arquitetura de Interiores</h3>
            <h4 className="text-4xl font-bold text-[#766c66] mb-8 uppercase">Juliana Perret</h4>
            <p className="text-gray-500 leading-relaxed italic text-lg">
              "Para mim, a arquitetura acontece no detalhe. O toque de uma textura, a temperatura de uma cor e a dança da luz são os elementos que transformam uma casa em um lar repleto de memórias e sensações."
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Juliana Perret" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Armando Profile */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Armando Junior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.4em] text-[#c4a484] mb-6 font-bold">Estrutura e Execução</h3>
            <h4 className="text-4xl font-bold text-[#766c66] mb-8 uppercase">Armando Junior</h4>
            <p className="text-gray-500 leading-relaxed">
              Especialista em grandes estruturas e viabilidade técnica, Armando traz a precisão matemática para a poesia do Studio. Seu olhar rigoroso garante que a execução de cada obra mantenha a integridade do conceito original até o último detalhe construtivo.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Sobre;
