
import React from 'react';
// Fix: Removed Pinterest from lucide-react import as it is not an exported member of the library.
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contato: React.FC = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">Vamos Conversar?</h2>
          <h1 className="text-5xl font-bold text-[#766c66] uppercase">Contato</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h4 className="text-2xl font-bold text-[#766c66] mb-8 uppercase">Informações de Contato</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#c4a484] flex items-center justify-center text-[#c4a484] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#766c66] mb-1 uppercase text-sm">Nosso Endereço</h5>
                    <p className="text-gray-500 leading-relaxed">
                      Rua Beija-Flor, 565 - Sala 201 <br/>
                      Lagoa Santa, Gov. Valadares - MG <br/>
                      CEP: 35065-126
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#c4a484] flex items-center justify-center text-[#c4a484] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#766c66] mb-1 uppercase text-sm">Telefone</h5>
                    <p className="text-gray-500">33 98854-1874</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#c4a484] flex items-center justify-center text-[#c4a484] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#766c66] mb-1 uppercase text-sm">E-mail</h5>
                    <p className="text-gray-500">contato@studioperret.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-[#c4a484] mb-6 font-bold">Siga o Studio</h4>
              <div className="flex gap-6">
                <a href="#" className="p-3 border border-gray-100 rounded-full hover:bg-[#766c66] hover:text-white transition-all duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="p-3 border border-gray-100 rounded-full hover:bg-[#766c66] hover:text-white transition-all duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="p-3 border border-gray-100 rounded-full hover:bg-[#766c66] hover:text-white transition-all duration-300">
                  <span className="font-bold text-lg">P</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 shadow-xl rounded-sm border border-gray-50">
            <h4 className="text-2xl font-bold text-[#766c66] mb-8 uppercase">Envie uma Mensagem</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full border-b border-gray-200 py-3 focus:border-[#c4a484] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full border-b border-gray-200 py-3 focus:border-[#c4a484] outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Assunto</label>
                <input 
                  type="text" 
                  placeholder="Ex: Orçamento"
                  className="w-full border-b border-gray-200 py-3 focus:border-[#c4a484] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Mensagem</label>
                <textarea 
                  rows={4} 
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full border-b border-gray-200 py-3 focus:border-[#c4a484] outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#766c66] text-white py-4 uppercase tracking-[0.4em] font-bold hover:bg-[#c4a484] transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="container mx-auto px-6 mt-24">
        <div className="w-full h-96 bg-gray-100 rounded-sm overflow-hidden shadow-inner flex items-center justify-center text-gray-400">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-50" />
            <p className="font-medium">Mapa da localização em Governador Valadares</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contato;
