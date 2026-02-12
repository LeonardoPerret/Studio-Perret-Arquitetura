
import React from 'react';
import HeroSlideshow from '../components/HeroSlideshow';
import { MOCK_BLOG, PROJECTS_CATEGORIES } from '../constants';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSlideshow />

      {/* Services/Project Types Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">Nossa Expertise</h2>
            <h3 className="text-4xl font-semibold text-[#766c66]">Transformando Espaços</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="border border-gray-100 p-10 h-full transition-all duration-300 hover:shadow-xl hover:border-transparent hover:-translate-y-2 text-center">
                  <div className="mb-6 mx-auto w-12 h-12 flex items-center justify-center border border-[#c4a484] rounded-full text-[#c4a484] group-hover:bg-[#c4a484] group-hover:text-white transition-colors">
                    <span className="text-lg font-bold italic">{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-medium tracking-wide text-[#766c66] uppercase">{cat}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">Diário do Studio</h2>
              <h3 className="text-4xl font-semibold text-[#766c66]">Blog & Inspirações</h3>
            </div>
            <button className="mt-6 md:mt-0 text-xs uppercase tracking-widest border-b border-[#c4a484] pb-1 hover:text-[#c4a484] transition-colors">
              Ver todas as postagens
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_BLOG.map((post) => (
              <article key={post.id} className="group">
                <div className="overflow-hidden mb-6 aspect-[4/5]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#766c66] group-hover:text-[#c4a484] transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <button className="mt-4 text-[10px] uppercase tracking-widest font-bold text-gray-400 group-hover:text-[#766c66] transition-colors">
                  Leia mais +
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
