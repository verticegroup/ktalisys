import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gillSans = localFont({
  src: "./fonts/gill-sans-nova-extracond-bold.ttf",
  variable: "--font-gill-sans",
});

const gilroy = localFont({
  src: "./fonts/gilroy-semibold.otf",
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Ktalisys — Aceleramos el talento musical",
  description:
    "Guiamos artistas con visión estratégica, marketing y producción musical para convertir talento en aceptación real y oportunidades sostenibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${gillSans.variable} ${gilroy.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-black font-gill-sans text-white">
        {children}
      </body>
    </html>
  );
}
