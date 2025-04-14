import { Carousel } from 'react-bootstrap';

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item className=''>
        <img
          className="d-block w-100"
          src="https://www.fioreriadassie.it/wp-content/uploads/2020/04/mazzo1.jpg"
          alt="Prodotto 1"
          style={{
            height: "30em", 
            objectFit: "contain", 
            }}
          />
        <Carousel.Caption>
          <h3>Composizione Floreale Elegante</h3>
          <p>Ideale per matrimoni, eventi e regali speciali.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.interflora.it/wp-content/uploads/2022/04/primule.jpg"
          alt="Prodotto 2"
          style={{
            height: "30em", 
            objectFit: "contain", 
            }}
        />
        <Carousel.Caption>
          <h3>Collezione Primaverile</h3>
          <p>Fiori freschi e colori vivaci per la nuova stagione.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://pazienti-platform.s3.eu-central-1.amazonaws.com/zsdev2u9uibx00rww1jbw5abupxh"
          alt="Prodotto 3"
          style={{
            height: "30em", 
            objectFit: "contain", 
            }}
        />
        <Carousel.Caption>
          <h3>Piante Grasse</h3>
          <p>Belle, resistenti e perfette per decorare ogni ambiente.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
