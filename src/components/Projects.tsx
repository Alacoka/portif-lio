import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import img1 from '../img/e_commerce.jpg';
import img2 from '../img/task.jpg';
import img3 from '../img/profile.jpg';
import img4 from '../img/stockly.jpg';

export function Projects() {
  const projects = [
    {
      title: "Plataforma E-commerce",
      description: "Uma plataforma de compras online completa com gerenciamento de estoque em tempo real.",
      image: img1,
      tech: ["React", "Node.js"],
      github: "https://github.com/Alacoka/e-commerce",
      live: "https://e-commerce-tech-store.vercel.app/"
    },
    {
      title: "App de Gerenciamento de Tarefas",
      description: "Uma ferramenta colaborativa de gerenciamento de tarefas com atualizações em tempo real. (trabalhando em melhorias)",
      image: img2,
      tech: ["React", "Firebase", "Tailwind"],
      github: "https://github.com/Alacoka/task_manager_new",
      live: "https://task-manager-alacoka.vercel.app/"
    },
    {
      title: "Site Portfólio",
      description: "Um site portfólio moderno para apresentação de projetos e habilidades.",
      image: img3,
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/Alacoka/farmacia",
      live: "https://portifolio-alacoque.vercel.app/"
    },
    {
      title: "Stockly",
      description: "Software gerenciador de estoque voltado para o ramo farmacêutico, controlando entradas e saídas de medicamentos, além de gerar relatórios.",
      image: img4,
      tech: ["React", "Tailwind CSS", "Vite", "Firebase"],
      github: "https://github.com/Alacoka",
      live: "https://stockly-iota-seven.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Projetos em Destaque</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Código
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-300">Sempre trabalhando em novos projetos inovadores, em breve...</p>
        </div>
      </div>
    </section>
  );
}
