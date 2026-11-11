
import { Roboto } from "next/font/google";

import "./globals.css";
import "./responsive.css";

import Navbar from "../components/Navbar";
import WhatsappButton from "../components/WhatsappButton";
import StickyActionBar from "../components/StickyActionBar";
import CookieBanner from "../components/CookieBanner";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

// URL pública utilizada nos metadados.
// Na Vercel, usa o domínio do deployment.
// Fora da Vercel, utiliza o domínio oficial.
const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://hipercheck.com.br";

const siteTitle =
  "Hiper Check | Soluções Serasa Experian para Empresas";

const siteDescription =
  "Consultas de CPF e CNPJ, análise de crédito, negativação e monitoramento empresarial. Conheça as soluções da Hiper Check, Parceiro Autorizado Serasa Experian.";

const ogImage =
  "https://hipercheck.com.br/og-image.png";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Hiper Check",
  },

  description: siteDescription,

  applicationName: "Hiper Check",

  keywords: [
    "Hiper Check",
    "Hiper Check do Brasil",
    "Serasa Experian",
    "Parceiro Autorizado Serasa Experian",
    "consulta CPF",
    "consulta CNPJ",
    "análise de crédito",
    "negativação",
    "monitoramento empresarial",
    "proteção ao crédito",
    "soluções de crédito para empresas",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Hiper Check",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Hiper Check - Soluções de crédito e inteligência empresarial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },

  category: "business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>

      <body>
        <Navbar />

        {children}

        <StickyActionBar />
        <WhatsappButton />
        <CookieBanner />

      </body>
    </html>
  );
}
