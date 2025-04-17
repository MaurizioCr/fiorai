import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CategorySection() {
  const navigate = useNavigate();

  // Stile condiviso per immagini
  const imageStyle = {
    height: '10em',
    objectFit: 'cover',
  };

  return (
    <Container className="py-5">
    <h2 className='text-center mb-3'>Le nostre collezioni</h2>
      <Row className="g-4">
        <Col md={3}>
          <Card style={{ cursor: 'pointer', height: '100%' }} onClick={() => navigate('/categoria/pasquale')} className="h-100">
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5UUAxIJ4dnI2Uf1g8-X5fQpj-ocxYiY1mg&s" style={imageStyle} />
            <Card.Body className="text-center">
              <Card.Title className="mb-0">Collezione Pasquale</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ cursor: 'pointer', height: '100%' }} onClick={() => navigate('/categoria/primaverile')} className="h-100">
            <Card.Img variant="top" src="https://www.fioreriadassie.it/wp-content/uploads/2020/04/mazzo1.jpg" style={imageStyle} />
            <Card.Body className="text-center">
              <Card.Title className="mb-0">Collezione Primaverile</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ cursor: 'pointer', height: '100%' }} onClick={() => navigate('/categoria/piante-grasse')} className="h-100">
            <Card.Img variant="top" src="https://pazienti-platform.s3.eu-central-1.amazonaws.com/zsdev2u9uibx00rww1jbw5abupxh" style={imageStyle} />
            <Card.Body className="text-center">
              <Card.Title className="mb-0">Piante Grasse</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            style={{ cursor: 'pointer', height: '100%' }} className="h-100"
            onClick={() => navigate('/categoria/fiori')}
          >
            <Card.Img
              variant="top"
              src="https://blog.interflora.it/wp-content/uploads/2022/04/primule.jpg" style={imageStyle} 
            />
            <Card.Body className='text-center'>
              <Card.Title>Fiori</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
