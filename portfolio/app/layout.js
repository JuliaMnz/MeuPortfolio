import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Portfólio - Júlia Muniz",
  description: "Portfólio desenvolvido com Next.js e Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-8 px-4">{children}</main>
        <footer className="bg-blue-600 text-white text-center py-4 mt-8">
          <p>© 2025 Júlia Muniz - Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  );
}
