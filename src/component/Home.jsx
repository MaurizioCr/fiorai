import CarouselComponent from './CarouselComponent';
import CategorySection from './CategorySection';
import WhatsAppIcon from './WhatsappIcon';

export default function Home() {
  return (
<>
<h1 className='text-center pt-5'>Fantasie Floreali.</h1>
      <CarouselComponent />
      <CategorySection />
      <WhatsAppIcon />
</>
  );
}