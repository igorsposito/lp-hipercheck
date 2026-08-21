export default function WhatsappButton() {
  const whatsappNumber = '5577998381190';
  const defaultMessage = 'Olá! Vim pelo site da Hiper Check e gostaria de mais informações.';

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float" 
      aria-label="Falar no WhatsApp"
    >
      <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
    </a>
  );
}