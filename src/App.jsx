import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';
import Studio from './pages/Studio.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const [booking, setBooking] = useState({ open:false, service:'' });
  const onBook = useCallback((service='') => setBooking({ open:true, service }), []);
  const onClose = useCallback(() => setBooking(prev => ({ ...prev, open:false })), []);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Wait a frame so the new route has rendered before scrolling to the anchor.
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}));
    } else window.scrollTo({top:0,behavior:'auto'});
  }, [pathname, hash]);

  return <>
    <Header onBook={onBook}/>
    <main><Routes>
      <Route path="/" element={<Home onBook={onBook}/>}/>
      <Route path="/services" element={<Services onBook={onBook}/>}/>
      <Route path="/gallery" element={<Gallery onBook={onBook}/>}/>
      <Route path="/studio" element={<Studio onBook={onBook}/>}/>
      <Route path="/contact" element={<Contact onBook={onBook}/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes></main>
    <Footer onBook={onBook}/>
    <BookingModal open={booking.open} initialService={booking.service} onClose={onClose}/>
  </>;
}
