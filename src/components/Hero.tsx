import React from 'react';
import { ArrowRight, Shield, Award, Users, Pickaxe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Líderes en Minería Artesanal
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Productos y Servicios
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Mineros Especializados
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ofrecemos soluciones integrales para la minería artesanal con más de 15 años de experiencia. 
                Equipos, herramientas y servicios técnicos de la más alta calidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-800 px-8 py-4 rounded-lg font-semibold hover:from-amber-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center group">
                <a href="#productos">Ver Productos</a>
                
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-800 transition-all duration-300">
                <a href="#contacto">Contactar Ahora</a>
                
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-amber-400 mr-2" />
                </div>
                <div className="text-2xl font-bold text-amber-400">15+</div>
                <div className="text-sm text-gray-300">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-amber-400 mr-2" />
                </div>
                <div className="text-2xl font-bold text-amber-400">100+</div>
                <div className="text-sm text-gray-300">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-amber-400 mr-2" />
                </div>
                <div className="text-2xl font-bold text-amber-400">60+</div>
                <div className="text-sm text-gray-300">Clientes Satisfechos</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maquinaria Minera Especializada"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-800 p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-lg">
                  <Pickaxe className="h-6 w-6 text-slate-800" />
                </div>
                <div>
                  <div className="font-bold text-lg">Calidad Garantizada</div>
                  <div className="text-sm text-gray-600">Experiencia que Genera Confianza</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;