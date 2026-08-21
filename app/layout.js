import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import WhatsappButton from '../components/WhatsappButton';
import StickyActionBar from '../components/StickyActionBar';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata = {
  title: 'Hiper Check | Parceiro Oficial Serasa Experian',
  description: 'Análises de crédito rápidas, seguras e gestão de inadimplência para o seu negócio.',
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
      </body>
    </html>
  );
}