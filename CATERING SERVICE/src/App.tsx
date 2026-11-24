import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import MenuPreview from '@/components/MenuPreview';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import EventPlanner from '@/components/EventPlanner';

export default function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const openPlanner = () => setPlannerOpen(true);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onPlanClick={openPlanner} />
      <main>
        <Hero onPlanClick={openPlanner} />
        <About />
        <Services />
        <MenuPreview />
        <Gallery />
      </main>
      <Footer onPlanClick={openPlanner} />
      <EventPlanner open={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </div>
  );
}
