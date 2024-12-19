import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Entre em Contato</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Tem um projeto em mente? Vamos trabalhar juntos para dar vida às suas ideias.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center space-y-4">
            <a href="mailto:kawaalacoque@gmail.com" className="flex flex-col items-center space-y-2">
              <Mail className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">E-mail</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">kawaalacoque@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <a href="tel:+5511939514122" className="flex flex-col items-center space-y-2">
              <Phone className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Telefone</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">(11) 93951-4122</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <a href="https://www.google.com/maps?q=S%C3%A3o+Paulo,+SP" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2">
              <MapPin className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Localização</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">São Paulo, SP</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
