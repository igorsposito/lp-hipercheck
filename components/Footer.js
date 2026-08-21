import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-container">
        
        {/* LOGO E REDES */}
        <div className="footer-brand">
          <div className="brand-logos">
            <Image 
              src="/assets/img/logo-branca.png" 
              alt="Hiper Check Do Brasil - Parceiro Autorizado Serasa Experian" 
              width={210} 
              height={55} 
              className="footer-logo"
            />
          </div>

          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* LINKS ÚTEIS */}
        <div className="footer-links">
          <h4>LINKS ÚTEIS</h4>
          <ul>
            <li><a href="https://servicos.receita.fazenda.gov.br" target="_blank" rel="noopener noreferrer">Situação Cadastral CPF</a></li>
            <li><a href="https://solucoes.receita.fazenda.gov.br" target="_blank" rel="noopener noreferrer">Situação Cadastral CNPJ</a></li>
            <li><a href="http://www.sintegra.gov.br/" target="_blank" rel="noopener noreferrer">Sintegra</a></li>
            <li><a href="https://www.serasaexperian.com.br/lgpd" target="_blank" rel="noopener noreferrer">LGPD Serasa Experian</a></li>
          </ul>
        </div>

        {/* OUTROS CONTEÚDOS */}
        <div className="footer-links">
          <h4>OUTROS CONTEÚDOS</h4>
          <ul>
            <li><Link href="/trabalhe-conosco">Trabalhe Conosco</Link></li>
            <li><a href="https://google.com" target="_blank" rel="noopener noreferrer">Nos Avalie no Google</a></li>
            <li><Link href="/#sobre">Onde Estamos</Link></li>
            <li><a href="https://wa.me/5577998381190" target="_blank" rel="noopener noreferrer">Indique e Ganhe</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom-line"></div>

      <div className="footer-bottom-container">
        <div className="footer-legal">
          <p>Copyright © 2026 · HIPER CHECK DO BRASIL INFORMACOES CADASTRAIS LTDA | CNPJ: 14.438.607/0001-62</p>
          <p className="footer-address">Av. Frei Benjamim, nº 2427, 2º andar, salas 213, 214 e 215 - B. Brasil - Vitória da Conquista/BA - CEP: 44505-107</p>
        </div>

        <div className="footer-credits">
          <span>Powered by</span>
          <a href="https://agavelab.com.br" target="_blank" rel="noopener" title="Ágave Lab">
            <Image src="/assets/img/logo-agave.png" alt="Ágave Lab" width={100} height={24} className="agave-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}