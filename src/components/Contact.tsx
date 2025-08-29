import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Contactanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Necesitas productos o servicios mineros? Contáctanos y te brindaremos 
            la mejor solución para tu proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-3 rounded-lg group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300">
                  <Phone className="h-6 w-6 text-white group-hover:text-slate-800 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Teléfono</h4>
                  <p className="text-gray-600">+57 (1) 234-5678</p>
                  <p className="text-gray-600">+57 300 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-3 rounded-lg group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300">
                  <Mail className="h-6 w-6 text-white group-hover:text-slate-800 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <p className="text-gray-600">info@mineralcraftpro.com</p>
                  <p className="text-gray-600">ventas@mineralcraftpro.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-3 rounded-lg group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-white group-hover:text-slate-800 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Ubicación</h4>
                  <p className="text-gray-600">Calle El Palmar 238</p>
                  <p className="text-gray-600">Salamanca, Ate, Lima, Perú</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl text-white">
              <h4 className="font-semibold text-amber-400 mb-4">Horarios de Atención</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Contact Form */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Nuestra Ubicación
              </h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3!2d-76.9!3d-12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzAwLjAiUyA3NsKwNTQnMDAuMCJX!5e0!3m2!1ses!2spe!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación MineralCraft Pro"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Calle El Palmar 238, Salamanca, Ate, Lima, Perú
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Envíanos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-800 px-8 py-4 rounded-lg font-semibold hover:from-amber-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center group"
              >
                Enviar Mensaje
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;