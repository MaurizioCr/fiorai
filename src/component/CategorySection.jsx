import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CategorySection() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Row className="g-4">
        <Col md={3}>
          <Card
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/categoria/pasquale')}
          >
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5UUAxIJ4dnI2Uf1g8-X5fQpj-ocxYiY1mg&s"
            />
            <Card.Body>
              <Card.Title>Collezione Pasquale</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/categoria/primaverile')}
          >
            <Card.Img
              variant="top"
              src="https://www.fioreriadassie.it/wp-content/uploads/2020/04/mazzo1.jpg"
            />
            <Card.Body>
              <Card.Title>Collezione Primaverile</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/categoria/piante-grasse')}
          >
            <Card.Img
              variant="top"
              src="https://pazienti-platform.s3.eu-central-1.amazonaws.com/zsdev2u9uibx00rww1jbw5abupxh"
            />
            <Card.Body>
              <Card.Title>Piante Grasse</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/categoria/fiori')}
          >
            <Card.Img
              variant="top"
              src="https://blog.interflora.it/wp-content/uploads/2022/04/primule.jpg"
            />
            <Card.Body>
              <Card.Title>Fiori</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
