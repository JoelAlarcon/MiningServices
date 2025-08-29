import React from 'react';
import { Hammer, Zap, HardHat, Cog } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Hammer,
      title: "Dragas Mineras",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Dragas especializadas para extracción de oro y minerales en ríos y quebradas.",
      price: "Desde $50"
    },
    {
      icon: Zap,
      title: "Máquinas Chancadoras",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Chancadoras de mandíbula y cono para trituración de mineral de diferentes tamaños.",
      price: "Desde $200"
    },
    {
      icon: HardHat,
      title: "Molinos de Bolas",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Molinos de bolas para molienda fina de minerales y concentrados auríferos.",
      price: "Desde $30"
    },
    {
      icon: Cog,
      title: "Concentradores Gravimétricos",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Concentradores centrífugos y mesas gravimétricas para recuperación de oro.",
      price: "Desde $500"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos con una amplia gama de productos especializados para la minería artesanal, 
            todos certificados y de la más alta calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white p-2 rounded-lg shadow-md">
                    <product.icon className="h-5 w-5 text-slate-700" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  <button className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-4 py-2 rounded-lg hover:from-amber-400 hover:to-orange-500 hover:text-slate-800 transition-all duration-300 text-sm font-semibold">
                    Ver Más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-800 px-8 py-4 rounded-lg font-semibold hover:from-amber-500 hover:to-orange-600 transition-all duration-300 text-lg">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;