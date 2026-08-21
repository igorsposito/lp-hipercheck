'use client';

import { useState } from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    area: '',
    canal: '',
    curriculo: null,
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Candidatura enviada com sucesso! Nosso time de RH analisará seu perfil.');
  };

  return (
    <main className="careers-page">
      {/* BANNER PRINCIPAL (HERO DE CARREIRAS COM IMAGEM DE FUNDO) */}
      <section className="careers-hero">
        <Image 
          src="/assets/img/trabalhe-conosco-banner.jpg" 
          alt="Equipe Hiper Check" 
          fill
          priority
          className="careers-hero-bg"
        />
        <div className="careers-hero-overlay"></div>
        <div className="careers-hero-content">
          <span className="badge-careers">CARREIRAS HIPER CHECK</span>
          <h1>Construa sua carreira com quem é referência em Inteligência de Crédito</h1>
          <p>
            Buscamos profissionais motivados por desafios, inovação e alta performance. Faça parte de uma equipe que impulsiona empresas em todo o Brasil.
          </p>
          <a href="#formulario-candidatura" className="btn-careers-hero">
            Ver Formulário de Candidatura
          </a>
        </div>
      </section>

      {/* NOSSOS PILARES / CULTURA */}
      <section className="careers-culture">
        <div className="careers-container">
          <div className="section-header">
            <h2>Por que trabalhar na Hiper Check?</h2>
            <p>Nossa cultura valoriza o talento individual e fomenta o crescimento contínuo.</p>
          </div>

          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-icon"><i className="fa-solid fa-rocket"></i></div>
              <h3>Crescimento Acelerado</h3>
              <p>Oportunidades reais de plano de carreira e autonomia para implementar ideias.</p>
            </div>

            <div className="culture-card">
              <div className="culture-icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <h3>Desenvolvimento Contínuo</h3>
              <p>Treinamentos constantes sobre o mercado financeiro, análise de risco e soluções Serasa Experian.</p>
            </div>

            <div className="culture-card">
              <div className="culture-icon"><i className="fa-solid fa-heart-pulse"></i></div>
              <h3>Ambiente Integrado</h3>
              <p>Equipe unida, comunicação transparente e foco na qualidade de vida dos nossos colaboradores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="careers-areas">
        <div className="careers-container">
          <div className="section-header">
            <h2>Áreas de Oportunidade</h2>
            <p>Recebemos candidaturas constantes para os seguintes times:</p>
          </div>

          <div className="areas-list">
            <div className="area-badge"><i className="fa-solid fa-headset"></i> Comercial & Vendas B2B</div>
            <div className="area-badge"><i className="fa-solid fa-user-shield"></i> Suporte & Sucesso do Cliente</div>
            <div className="area-badge"><i className="fa-solid fa-chart-pie"></i> Análise de Crédito & Risco</div>
            <div className="area-badge"><i className="fa-solid fa-bullhorn"></i> Marketing & Comunicação</div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DO FORMULÁRIO */}
      <section id="formulario-candidatura" className="careers-form-section">
        <div className="careers-container">
          <div className="careers-form-card">
            <div className="form-card-header">
              <h2>Envie seu Currículo</h2>
              <p>Preencha os dados abaixo e anexe seu currículo atualizado. Ficaremos felizes em conhecer seu perfil!</p>
            </div>

            <form onSubmit={handleSubmit} className="careers-form">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo *</label>
                <input type="text" id="nome" name="nome" required value={formData.nome} onChange={handleChange} placeholder="Seu nome completo" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="whatsapp">Telefone / WhatsApp *</label>
                  <input type="tel" id="whatsapp" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} placeholder="(77) 99999-9999" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail de Contato *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="seuemail@exemplo.com.br" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="area">Área de Interesse *</label>
                  <select id="area" name="area" required value={formData.area} onChange={handleChange}>
                    <option value="">Selecione a área...</option>
                    <option value="Comercial / Vendas">Comercial / Vendas B2B</option>
                    <option value="Atendimento / Customer Success">Atendimento / CS</option>
                    <option value="Análise de Crédito">Análise de Crédito</option>
                    <option value="Administrativo / Financeiro">Administrativo / Financeiro</option>
                    <option value="Outras Áreas">Outras Áreas</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="canal">Como conheceu a Hiper Check? *</label>
                  <select id="canal" name="canal" required value={formData.canal} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Indicação">Indicação de colaborador</option>
                    <option value="Google">Google / Pesquisa</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="curriculo">Anexar Currículo (PDF ou Word) *</label>
                <input type="file" id="curriculo" name="curriculo" accept=".pdf,.doc,.docx" required onChange={handleChange} className="file-input" />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Resumo Profissional / Apresentação (Opcional)</label>
                <textarea id="mensagem" name="mensagem" rows="3" value={formData.mensagem} onChange={handleChange} placeholder="Fale brevemente sobre suas principais experiências ou motivação..."></textarea>
              </div>

              <button type="submit" className="btn-submit-careers">
                Enviar Candidatura para o RH
              </button>

              <p className="lgpd-careers">
                🔒 Todas as informações fornecidas serão mantidas em absoluto sigilo para processos seletivos conforme a LGPD.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}