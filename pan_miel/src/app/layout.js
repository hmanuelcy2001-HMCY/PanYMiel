import ClientWrapper from "./ClientWrapper";


export const metadata = {
  title: "Pan-y-Miel",
  keywords: "cafe, Tienda de café",
  description: "Bienvenidos a Pan y Miel! una tienda donde ofrecemos café de calidad para ti y todos los que te rodean :D",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
