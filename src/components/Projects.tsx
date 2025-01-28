import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Plataforma E-commerce",
      description: "Uma plataforma de compras online completa com gerenciamento de estoque em tempo real.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js"],
      github: "https://github.com/Alacoka/e-commerce",
      live: "https://e-commerce-tech-store.vercel.app/"
    },
    {
      title: "App de Gerenciamento de Tarefas",
      description: "Uma ferramenta colaborativa de gerenciamento de tarefas com atualizações em tempo real. (trabalhando em melhorias)",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Firebase", "Tailwind"],
      github: "https://github.com/Alacoka/task_manager",
      live: "https://task-manager-two-chi-29.vercel.app/"
    },
    {
      title: "Site Portfólio",
      description: "Um site portfólio moderno para apresentação de projetos e habilidades.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/Alacoka",
      live: ""
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
          <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-300">Estamos trabalhando em novos projetos inovadores, em breve...</p>
        </div>
      </div>
    </section>
  );
}
