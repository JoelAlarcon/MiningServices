import React from 'react';
import { Wrench, Truck, Users, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Mantenimiento de Dragas",
      description: "Servicio técnico especializado para dragas mineras y equipos de extracción. Mantenimiento preventivo y correctivo.",
      features: ["Reparación de dragas", "Mantenimiento de bombas", "Calibración de equipos"]
    },
    {
      icon: Truck,
      title: "Instalación de Chancadoras",
      description: "Instalación y puesta en marcha de máquinas chancadoras y equipos de trituración para minería artesanal.",
      features: ["Instalación profesional", "Configuración óptima", "Capacitación operativa"]
    },
    {
      icon: Users,
      title: "Asesoría en Concentración",
      description: "Consultoría especializada en procesos de concentración gravimétrica y recuperación de oro.",
      features: ["Diseño de circuitos", "Optimización de recuperación", "Análisis metalúrgico"]
    },
    {
      icon: Settings,
      title: "Automatización de Procesos",
      description: "Implementación de sistemas automatizados para molinos, clasificadores y equipos de procesamiento.",
      features: ["Control automático", "Monitoreo remoto", "Optimización de procesos"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios integrales para la minería artesanal, desde consultoría técnica hasta 
            mantenimiento especializado de equipos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-4 rounded-lg inline-block group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white group-hover:text-slate-800 transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;