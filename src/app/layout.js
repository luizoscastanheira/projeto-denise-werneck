import "./globals.css";
import Topo from "@/componentes/topo";



export const metadata = {
  title: "Espaço Denise Werneck",
  description: "Estética Corporal em Três Rios - RJ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
