'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cnpj: '',
    whatsapp: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '5577998381190';
    const text = `*Novo Contato via Site - Hiper Check*%0A%0A*Nome:* ${formData.nome}%0A*E-mail:* ${formData.email}%0A*CNPJ:* ${formData.cnpj}%0A*WhatsApp:* ${formData.whatsapp}%0A*Mensagem:* ${formData.mensagem || 'Nenhuma mensagem preenchida.'}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="seja-cliente" className="contact-section">
      <div className="contact-container">
        
        {/* LADO ESQUERDO */}
        <div className="contact-info">
          <span className="badge">Seja Nosso Cliente</span>
          <h2>Acelere os resultados da sua empresa com inteligência de crédito</h2>
          <p>
            Preencha o formulário ao lado ou entre em contato direto para receber uma consultoria personalizada de nossas soluções Serasa Experian.
          </p>
          
          <div className="contact-direct">
            <div className="direct-item">
              <strong>Atendimento Comercial:</strong>
              <span>(77) 99838-1190</span>
            </div>
            <div className="direct-item">
              <strong>Horário de Funcionamento:</strong>
              <span>Segunda a Sexta, das 08h às 18h</span>
            </div>
          </div>
        </div>

        {/* LADO DIREITO (FORMULÁRIO EXACTO) */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Fale com um Especialista</h3>
            
            <div className="form-group">
              <label htmlFor="nome">Nome Completo *</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                required 
                value={formData.nome} 
                onChange={handleChange} 
                placeholder="Seu nome" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail Corporativo *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="joao@suaempresa.com.br" 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cnpj">CNPJ*</label>
                <input 
                  type="text" 
                  id="cnpj" 
                  name="cnpj" 
                  required 
                  value={formData.cnpj} 
                  onChange={handleChange} 
                  placeholder="00.000.000/0001-00" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp Comercial *</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp" 
                  required 
                  value={formData.whatsapp} 
                  onChange={handleChange} 
                  placeholder="(77) 99999-9999" 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Como podemos ajudar? (opcional)</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows="3" 
                value={formData.mensagem} 
                onChange={handleChange} 
                placeholder="Descreva brevemente sua necessidade..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Solicitar Atendimento
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-gray)', marginTop: '0.85rem' }}>
              🔒 Seus dados estão protegidos em conformidade com a LGPD.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}