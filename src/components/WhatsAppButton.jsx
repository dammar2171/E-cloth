import { IoLogoWhatsapp } from "react-icons/io5";
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9805752792"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <IoLogoWhatsapp size={30} color="#fff" /> WhatsApp
    </a>
  );
};

export default WhatsAppButton;
