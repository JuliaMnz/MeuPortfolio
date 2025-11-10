"use client";

export default function SobreProjeto() {
  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
        Sobre Este Projeto 🚀
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center max-w-3xl mx-auto">
        Este portfólio foi desenvolvido como parte de um projeto acadêmico com o objetivo de
        demonstrar habilidades em desenvolvimento web utilizando o framework <strong>Next.js</strong>,
        integrando animações, estilos modernos e uma API pública.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          🧰 Tecnologias Utilizadas
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Next.js</strong> — Framework React com renderização otimizada e estrutura em rotas.
          </li>
          <li>
            <strong>React.js</strong> — Biblioteca principal para criação da interface do portfólio.
          </li>
          <li>
            <strong>TailwindCSS</strong> — Framework CSS utilitário para estilização rápida e responsiva.
          </li>
          <li>
            <strong>Framer Motion</strong> — Usado para animações sutis e transições suaves.
          </li>
          <li>
            <strong>API do GitHub</strong> — Integração para exibir repositórios e projetos desenvolvidos.
          </li>
        </ul>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          🎯 Objetivo do Projeto
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Criar um portfólio profissional com design moderno, modo claro/escuro e integração com API,
          destacando as principais competências técnicas em desenvolvimento web.
        </p>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          📦 Estrutura do Projeto
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Home:</strong> Apresentação inicial.</li>
          <li><strong>Sobre:</strong> Informações sobre o desenvolvimento do projeto.</li>
          <li><strong>Acadêmico:</strong> Formação e estudos.</li>
          <li><strong>Profissional:</strong> Experiências anteriores.</li>
          <li><strong>Projetos:</strong> Listagem dinâmica via API do GitHub.</li>
        </ul>
      </div>

      <p className="mt-10 text-center text-gray-600 dark:text-gray-400 text-sm">
        Desenvolvido com ❤️ por Júlia Muniz
      </p>
    </section>
  );
}
