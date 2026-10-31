import { Link } from 'react-router-dom';
import Icon from './Icons.jsx';

export default function Footer({ onBook }) {
  return <footer className="footer">
    <div className="frame">
      <div className="footer-top">
        <div><span className="eyebrow eyebrow-light">UNTIL WE MEET AGAIN</span><h2>Keep a little<br/><em>glow</em> for yourself.</h2></div>
        <button onClick={() => onBook()} className="footer-round" aria-label="Request appointment"><Icon name="upRight" size={34}/></button>
      </div>
      <div className="footer-grid">
        <div><div className="footer-logo">atelier <em>beauté.</em></div><p>A beauty studio concept built around the little things that make you feel like you.</p></div>
        <div><span className="footer-label">EXPLORE</span><Link to="/services">The rituals</Link><Link to="/gallery">Our moodboard</Link><Link to="/studio">The studio</Link><Link to="/contact">Say hello</Link></div>
        <div><span className="footer-label">THE STUDIO</span><span>Al Hoceima, Morocco</span><span>Visits by appointment</span><button className="footer-plain" onClick={() => onBook()}>Enquire on WhatsApp <Icon name="upRight" size={14}/></button></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} ATELIER BEAUTÉ · CONCEPT WEBSITE</span><span>DEMO CONTENT & IMAGERY · NOT AN ACTIVE SALON BOOKING SERVICE</span><Link to="/">BACK TO TOP ↑</Link></div>
    </div>
  </footer>;
}
