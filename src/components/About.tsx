import React from 'react';
import { Target, Eye, Heart, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Proporcionar productos y servicios de calidad para potenciar la minería artesanal sostenible."
    },
    {
      icon: Eye,
      title: "Visión", 
      description: "Ser la empresa líder en soluciones mineras artesanales en la región."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Compromiso, calidad, sostenibilidad y desarrollo comunitario responsable."
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Mejora continua en todos nuestros procesos y servicios para nuestros clientes."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Somos una empresa especializada en brindar productos y servicios integrales 
                para la minería artesanal. Con más de 15 años de experiencia, hemos desarrollado 
                soluciones innovadoras que respetan el medio ambiente y potencian el desarrollo 
                sostenible de las comunidades mineras.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Nuestro equipo de expertos trabaja día a día para ofrecer equipos de alta calidad, 
                servicios técnicos especializados y acompañamiento integral en cada proyecto.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-600/50 transition-all duration-300 group"
                >
                  <value.icon className="h-8 w-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold mb-2 text-amber-400">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Maquinaria minera en operación"
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dragas mineras artesanales"
                className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Molinos y equipos de procesamiento"
                className="rounded-lg shadow-lg h-48 w-full object-cover -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Concentradores y equipos especializados"
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
            </div>
            
            {/* Overlay badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-800 px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                15+ Años de Experiencia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;