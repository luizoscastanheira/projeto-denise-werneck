import "./globals.css";
import Topo from "@/componentes/topo";
import Rodape from "@/componentes/rodape";



export const metadata = {
  title: "Espaço Denise Werneck",
  description: "Estética Corporal em Três Rios - RJ.",
  keywords: "estética, beleza, corporal, Três Rios, RJ",
  author: "Denise Werneck",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
