import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Providers from "@/components/_providers/Providers";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "O Caminho da Faixa Preta",
  description: "Portfólio interativo de Jiu-Jitsu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
