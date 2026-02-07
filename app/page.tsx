import StickyHeader from '@/components/StickyHeader';
import Hero from '@/components/Hero';
import ProductsGrid from '@/components/ProductsGrid';
import InfoSection from '@/components/InfoSection';
import ReservationPolicy from '@/components/ReservationPolicy';
import PaymentMethods from '@/components/PaymentMethods';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

// ISR: Regenera página cada 24h manteniendo performance de SSG
export const revalidate = 86400; // 24 horas

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main className="min-h-screen">
        <Hero />
        <ProductsGrid />
        <InfoSection />
        <ReservationPolicy />
        <PaymentMethods />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
