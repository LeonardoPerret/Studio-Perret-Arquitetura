
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

// Scroll to top component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative flex flex-col">
        <Menu />
        
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <footer className="py-16 border-t border-gray-100 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="text-center md:text-left">
                <a 
                  href="#" 
                  onClick={handleBackToTop}
                  className="inline-block group transition-all duration-300"
                  title="Voltar ao topo"
                >
                  {/* Logo com 100px de largura conforme solicitado */}
                  <img 
                    src="https://raw.githubusercontent.com/lucide-react/lucide/main/icons/layout.svg" 
                    alt="Logo Studio Perret Arquitetura" 
                    className="w-[100px] h-auto object-contain transition-opacity duration-300 opacity-90 group-hover:opacity-100"
                  />
                  <p className="mt-2 text-[9px] text-gray-300 uppercase tracking-[0.4em] font-bold group-hover:text-[#c4a484] transition-colors">
                    Studio Perret
                  </p>
                </a>
              </div>
              
              <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                <a href="#/" className="hover:text-[#c4a484] transition-colors">Home</a>
                <a href="#/sobre" className="hover:text-[#c4a484] transition-colors">Sobre</a>
                <a href="#/portfolio" className="hover:text-[#c4a484] transition-colors">Portfólio</a>
                <a href="#/contato" className="hover:text-[#c4a484] transition-colors">Contato</a>
              </div>

              <div className="text-center md:text-right">
                <p className="text-xs text-gray-500 mb-1 font-medium">© {new Date().getFullYear()} Studio Perret. Todos os direitos reservados.</p>
                <p className="text-[10px] text-gray-300 uppercase tracking-widest">Excelência em Arquitetura</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
