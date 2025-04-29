import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

export default function DoveTrovarci() {
  const schedule = [
    { day: 'Lunedì', hours: '9:00 – 19:00' },
    { day: 'Martedì', hours: '9:00 – 19:00' },
    { day: 'Mercoledì', hours: '9:00 – 19:00' },
    { day: 'Giovedì', hours: '9:00 – 19:00' },
    { day: 'Venerdì', hours: '9:00 – 19:00' },
    { day: 'Sabato', hours: '10:00 – 18:00' },
    { day: 'Domenica', hours: 'Chiuso' },
  ];

  // URL embed da copiare da Google Maps → Condividi → Incorpora mappa
  const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.407049905247!2d14.269198476226183!3d40.95066087135864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b00b2e1ce9a1f%3A0x5250a747fd6d7ede!2sFantasie%20floreali%20Lina%20Antignano!5e0!3m2!1sit!2sit!4v1744895212719!5m2!1sit!2sit"

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Dove Trovarci</h1>

      <Row>
        <Col lg={6} className="mb-4">
          {/* Map responsive */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%', // 16:9
              overflow: 'hidden',
            }}
          >
            <iframe
              src={mapSrc}
              title="Mappa negozio"
              style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Col>

        <Col lg={6}>
          <h4>Orari di apertura</h4>
          <Table borderless className="mt-3">
            <tbody>
              {schedule.map(({ day, hours }) => (
                <tr key={day}>
                  <td style={{ width: '120px' }}><strong>{day}</strong></td>
                  <td>{hours}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4 className="mt-4">Indirizzo</h4>
          <p>Via Giovanni XXIII, 97, Frattaminore NA</p>

          <h4 className="mt-3">Telefono</h4>
          <p>
            <a href="tel:+3398438914">+39 3398438914</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
