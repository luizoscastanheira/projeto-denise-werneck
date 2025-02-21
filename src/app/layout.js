import "./globals.css";



export const metadata = {
  title: "Espaço Denise Werneck",
  description: "Estética Corporal em Três Rios - RJ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
