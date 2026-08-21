import Footer from '../../components/Footer';

export const metadata = {
  title: 'Política de Cookies | Hiper Check',
  description: 'Entenda como a Hiper Check utiliza cookies para garantir a segurança e a melhor experiência em nosso site.',
};

export default function PoliticaDeCookies() {
  return (
    <>
      <main className="legal-page-container">
        <header className="legal-header">
          <div className="container">
            <span className="badge-legal">Transparência & LGPD</span>
            <h1>Política de Cookies</h1>
            <p>Última atualização: Agosto de 2026</p>
          </div>
        </header>

        <section className="legal-content container">
          <article className="legal-card">
            <h2>1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita nosso site. 
              Eles servem para reconhecer suas preferências, garantir a segurança da navegação e melhorar a sua experiência geral na plataforma.
            </p>
          </article>

          <article className="legal-card">
            <h2>2. Como utilizamos os Cookies?</h2>
            <p>Utilizamos cookies estritamente necessários para o funcionamento e melhoria da nossa landing page:</p>
            
            <div className="cookie-types-grid">
              <div className="cookie-type-box">
                <i className="fa-solid fa-shield-halved"></i>
                <h3>Cookies Necessários</h3>
                <p>Essenciais para que o site funcione corretamente, permitindo navegação segura e acesso aos formulários de atendimento.</p>
              </div>

              <div className="cookie-type-box">
                <i className="fa-solid fa-chart-line"></i>
                <h3>Cookies de Desempenho</h3>
                <p>Nos ajudam a entender como os visitantes interagem com o site de forma 100% anônima, permitindo otimizar a velocidade e a usabilidade.</p>
              </div>
            </div>
          </article>

          <article className="legal-card">
            <h2>3. Como gerenciar ou desativar os Cookies?</h2>
            <p>
              Você pode alterar as permissões ou bloquear os cookies a qualquer momento diretamente nas configurações do seu navegador:
            </p>
            
            <ul className="browser-list">
              <li><strong>Google Chrome:</strong> Configurações → Privacidade e Segurança → Cookies.</li>
              <li><strong>Safari:</strong> Preferências → Privacidade → Gerenciar Dados de Sites.</li>
              <li><strong>Microsoft Edge / Firefox:</strong> Configurações → Proteção de Privacidade.</li>
            </ul>
          </article>

          <article className="legal-card highlight-card">
            <h2>Dúvidas sobre Privacidade?</h2>
            <p>
              Se tiver qualquer dúvida sobre como tratamos seus dados ou sobre esta política, entre em contato com nosso time de atendimento.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}