import CarouselComponent from './CarouselComponent';
import CategorySection from './CategorySection';
import WhatsAppIcon from './WhatsappIcon';

export default function Home() {
  return (
    <div
      style={{
        background: '#EEAECA',
        background: 'radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)',
        minHeight: '100vh', // Opzionale: per far coprire l'intera viewport
      }}
    >
      <CarouselComponent />
      <CategorySection />
      <WhatsAppIcon />
    </div>
  );
}