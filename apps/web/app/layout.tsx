import type { Metadata } from "next";
import "./globals.css"
export const metadata: Metadata = {
  title: "ZapSched - Facilite sua vida, organize sua agenda",
  description:
    "Automatize sua agenda no WhatsApp sem esforço. O zapSched organiza, notifica e gerencia tudo para você. Tenha mais tempo para o que importa!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
