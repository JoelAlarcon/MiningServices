import React from 'react';
import { Pickaxe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg">
                <Pickaxe className="h-6 w-6 text-slate-800" />
              </div>
              <div>
                <h3 className="text-lg font-bold">MineralCraft Pro</h3>
                <p className="text-xs text-gray-400">Soluciones Mineras</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Líder en productos y servicios para minería artesanal sostenible. 
              Comprometidos con la calidad y el desarrollo responsable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors duration-300">Servicios</a></li>
              <li><a href="#productos" className="text-gray-400 hover:text-white transition-colors duration-300">Productos</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-white transition-colors duration-300">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Mantenimiento de Equipos</li>
              <li className="text-gray-400 text-sm">Transporte Especializado</li>
              <li className="text-gray-400 text-sm">Consultoría Técnica</li>
              <li className="text-gray-400 text-sm">Instalación Profesional</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">+51 (1) 234-5678</li>
              <li className="text-gray-400 text-sm">info@mineralcraftpro.com</li>
              <li className="text-gray-400 text-sm">Calle El Palmar 238<br />Salamanca, Ate, Lima, Perú</li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 MineralCraft Pro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;