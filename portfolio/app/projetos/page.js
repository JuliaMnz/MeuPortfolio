"use client";

import { useEffect, useState } from "react";

export default function Projetos() {
  const [repos, setRepos] = useState([]);

  // 🔗 Requisição à API do GitHub
  useEffect(() => {
    fetch("https://api.github.com/users/juliamunizz/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Erro ao buscar repositórios:", error));
  }, []);

  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
        Projetos 💻
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
        Aqui estão alguns dos meus projetos hospedados no GitHub e protótipos desenvolvidos no Figma.
      </p>

      {/* 🔹 Repositórios do GitHub */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {repo.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {repo.description || "Repositório sem descrição."}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white dark:bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver no GitHub
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center col-span-full">
            Carregando projetos...
          </p>
        )}
      </div>

      {/* 🔹 Seção de Protótipos no Figma */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Protótipos no Figma 🎨
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {[
            {
              titulo: "Protótipo 1",
              url: "https://www.figma.com/proto/aKXD51f2ctbvjkyB6JCyTX?node-id=0-1&t=TiA7bc39pBFU3P92-6",
            },
            {
              titulo: "Protótipo 2",
              url: "https://www.figma.com/proto/tHhWkJRCk2nayNQBEL6reF?node-id=0-1&t=TiA7bc39pBFU3P92-6",
            },
            {
              titulo: "Protótipo 3",
              url: "https://www.figma.com/proto/9kuAmqXuejwUPVcZl2oDOU?node-id=0-1&t=TiA7bc39pBFU3P92-6",
            },
            {
              titulo: "Protótipo 4",
              url: "https://www.figma.com/proto/wE3d1AFJkmC5ZOYcIA1Bgo?node-id=335-128&t=TiA7bc39pBFU3P92-6",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {item.titulo}
              </h3>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                Ver no Figma
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
