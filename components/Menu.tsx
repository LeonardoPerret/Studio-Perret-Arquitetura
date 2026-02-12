
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Contato', path: '/contato' }
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.hash === '#/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
      {/* Logo on the top left - aligned with menu height */}
      <div className="pointer-events-auto">
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="block transition-transform hover:scale-105 duration-300"
        >
          {/* Using a placeholder for the logo - the user provided image would typically be base64 or a hosted URL */}
          <div className="flex items-center">
            <img 
              src="assets/img/logo-studio-perret.png" 
              alt="Studio Perret Arquitetura" 
              className="h-[120px] w-auto object-contain" 
            />
            {/* <div className="hidden sm:block">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#766c66]">Studio Perret</span>
            </div> */}
          </div>
        </a>
      </div>

      {/* Menu Icon Trigger on the right */}
      <div 
        className="group relative cursor-pointer pointer-events-auto"
        onMouseEnter={() => setIsOpen(true)}
      >
        <div className={`p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`}>
          <MenuIcon size={28} className="text-[#766c66] group-hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Slide-out Menu from the Right */}
      <div 
        className={`fixed top-0 right-0 h-screen w-full md:w-96 bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out transform shadow-2xl pointer-events-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-[#766c66] hover:rotate-90 transition-transform duration-300"
        >
          <X size={32} />
        </button>

        <div className="h-full flex flex-col justify-center px-12 space-y-8 items-end text-right">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-light tracking-widest text-[#766c66] hover:text-[#c4a484] transition-all duration-500 hover:-translate-x-4 block transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
          
          <div className={`pt-12 border-t border-gray-100 w-full transform transition-all duration-700 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Siga o Studio</p>
            <div className="flex gap-4 justify-end">
               <div className="w-8 h-8 flex items-center justify-center border border-gray-100 rounded-full hover:bg-[#c4a484] hover:text-white transition-colors cursor-pointer text-xs font-bold">IG</div>
               <div className="w-8 h-8 flex items-center justify-center border border-gray-100 rounded-full hover:bg-[#c4a484] hover:text-white transition-colors cursor-pointer text-xs font-bold">FB</div>
               <div className="w-8 h-8 flex items-center justify-center border border-gray-100 rounded-full hover:bg-[#c4a484] hover:text-white transition-colors cursor-pointer text-xs font-bold">PN</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/5 z-[-1] pointer-events-auto" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Menu;
