import { Container, Row, Col } from 'react-bootstrap';

export default function WhatsAppIcon() {
  const whatsappLink = "https://wa.me/393401234567"; // Sostituisci con il tuo numero

  const iconStyle = {
    width: "4em",
    height: "4em",
  };

  const textStyle = {
    marginRight: "1em", 
  };

  return (
    <Container
      fluid
      className="fixed-bottom d-flex justify-content-end align-items-end p-3"
      style={{ zIndex: 1000 }}
    >
      <Row>
        <Col className="d-flex align-items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark" // Optional: Remove link styling
          >
            <p style={textStyle} className="mb-0">Contattaci!</p>
            <img
              src="https://cdn-icons-png.freepik.com/256/3983/3983877.png?semt=ais_hybrid"
              alt="WhatsApp"
              style={iconStyle}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}