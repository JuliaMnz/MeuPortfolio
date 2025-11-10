"use client";
import React, { useEffect, useState } from "react";

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/JuliaMnz/repos");
        if (!response.ok) {
          throw new Error("Erro ao buscar os repositórios");
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
        setError("Não foi possível carregar os projetos. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center p-8 transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400 flex items-center gap-2">
        Projetos 💻
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
        Aqui estão alguns dos meus projetos hospedados no GitHub e protótipos desenvolvidos no Figma.
      </p>

      {loading && <p className="text-gray-500 dark:text-gray-400">Carregando projetos...</p>}

      {error && (
        <p className="text-red-500 dark:text-red-400 text-center mb-6">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
                {repo.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {repo.description || "Sem descrição disponível."}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                Ver no GitHub
              </a>
            </div>
          ))}
        </div>
      )}

      {/* ---------------------- SEÇÃO DOS PROTÓTIPOS DO FIGMA ---------------------- */}
      <h3 className="text-2xl font-semibold mt-16 mb-6 text-pink-600 dark:text-pink-400">
        Protótipos no Figma 🎨
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {[
          {
            title: "Mico Diário de Humor",
            link: "https://www.figma.com/proto/aKXD51f2ctbvjkyB6JCyTX?node-id=0-1&t=TiA7bc39pBFU3P92-6",
          },
          {
            title: "Cena",
            link: "https://www.figma.com/proto/tHhWkJRCk2nayNQBEL6reF?node-id=0-1&t=TiA7bc39pBFU3P92-6",
          },
          {
            title: "Ecocap",
            link: "https://www.figma.com/proto/9kuAmqXuejwUPVcZl2oDOU?node-id=0-1&t=TiA7bc39pBFU3P92-6",
          },
          {
            title: "Alerta Urbano",
            link: "https://www.figma.com/proto/wE3d1AFJkmC5ZOYcIA1Bgo?node-id=335-128&t=TiA7bc39pBFU3P92-6",
          },
        ].map((proto, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform"
          >
            <h4 className="text-lg font-semibold mb-3 text-pink-600 dark:text-pink-300">
              {proto.title}
            </h4>
            <a
              href={proto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition"
            >
              Ver no Figma
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
