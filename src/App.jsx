

import { useEffect,useState } from 'react'
import {  useLenis } from 'lenis/react';
import Home from './components/Home'
import InstagramGallery from './components/InstagramGallery'
import Navbar from './components/Navbar'
import OfferingsSection from './components/OfferingSection'
import Reservation from './components/Reservation'
import ReviewsSection from './components/ReviewSection'
import StorySection from './components/StorySection'
import VisitUs from './components/VisitUs'
import Footer from './components/footer';



function AnchorScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -70, duration: 1.2 });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lenis]);

  return null;
}


const App = () => {

    const [cart] = useState([]);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  const handleOpenReserve = () => {
    setIsReserveModalOpen(true);
  };

  const handleCloseReserve = () => {
    setIsReserveModalOpen(false);
  };


  return (
    <div>
      <AnchorScrollHandler/>
      
      <Navbar onOpenReserve={handleOpenReserve}/>

      <main>
<Home onOpenReserve={handleOpenReserve}/>
          <StorySection/>
      <OfferingsSection onOpenReserve={handleOpenReserve}/>
      <InstagramGallery/>
      <ReviewsSection/>
      <VisitUs/>
      </main>
    
      <Reservation 
          isOpen={isReserveModalOpen}
          onClose={handleCloseReserve}
          cart={cart}/>

          <Footer/>

          
    </div>
  )
}

export default App
