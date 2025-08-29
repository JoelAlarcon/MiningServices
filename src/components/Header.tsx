import React, { useState } from 'react';
import { Menu, X, Pickaxe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-800 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg">
              <Pickaxe className="h-8 w-8 text-slate-800" />
            </div>
            <div>
              <h1 className="text-xl font-bold">MineralCraft Pro</h1>
              <p className="text-xs text-gray-300">Soluciones Mineras Artesanales</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-amber-400 transition-colors duration-300">Inicio</a>
            <a href="#servicios" className="hover:text-amber-400 transition-colors duration-300">Servicios</a>
            <a href="#productos" className="hover:text-amber-400 transition-colors duration-300">Productos</a>
            <a href="#nosotros" className="hover:text-amber-400 transition-colors duration-300">Nosotros</a>
            <a href="#contacto" className="hover:text-amber-400 transition-colors duration-300">Contacto</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Inicio</a>
              <a href="#servicios" className="hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Servicios</a>
              <a href="#productos" className="hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Productos</a>
              <a href="#nosotros" className="hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Nosotros</a>
              <a href="#contacto" className="hover:text-amber-400 transition-colors duration-300" onClick={toggleMenu}>Contacto</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;