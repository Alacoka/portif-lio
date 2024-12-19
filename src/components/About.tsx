import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sobre Mim</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Apaixonado por criar aplicações web bonitas e funcionais que resolvem problemas do atual cenário do mercado de trabalho
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-colors duration-200">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Code className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Desenvolvimento Frontend</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Criação de interfaces responsivas e interativas usando frameworks e ferramentas modernas.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-colors duration-200">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Globe className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Desenvolvimento Backend</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Construção de aplicações escaláveis e APIs RESTful.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-colors duration-200">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
              <Palette className="text-indigo-600 dark:text-indigo-400" size={24} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Design UI/UX</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Design de experiências de usuário intuitivas e visualmente atraentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}