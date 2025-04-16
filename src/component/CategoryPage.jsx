import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function CategoryPage() {
  const { nome } = useParams();

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-capitalize">Categoria: {nome.replace('-', ' ')}</h2>
      <Row>        
          <Col md={3} >
            <Card className="mb-4">
              <Card.Img variant="top" src= "https://blog.interflora.it/wp-content/uploads/2022/04/primule.jpg"/>
              <Card.Body>
                <Card.Title>Piante grasse</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} >
            <Card className="mb-4">
              <Card.Img variant="top" src="https://www.tuttogreen.it/wp-content/uploads/2021/03/decorazioni-pasqua-fiori.jpg"/>
              <Card.Body>
                <Card.Title>Collezione primavera</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} >
            <Card className="mb-4">
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Collezione Pasqua</Card.Title>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  );
}
