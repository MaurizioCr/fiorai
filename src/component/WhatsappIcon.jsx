export default function WhatsAppIcon() {
    const whatsappLink = "https://wa.me/393401234567"; // Sostituisci con il tuo numero
  
    const style = {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "60px",
      height: "60px",
      zIndex: 1000
    };
  
    return (
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <p> contattaci</p>!<img src="https://cdn-icons-png.freepik.com/256/3983/3983877.png?semt=ais_hybrid" alt="WhatsApp" style={style} />
      </a>
    );
  }
  