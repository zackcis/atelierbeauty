import { Link } from 'react-router-dom';
import { services, gallery } from '../data/site.js';
import Icon from '../components/Icons.jsx';
import Photo from '../components/Photo.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FAQ from '../components/FAQ.jsx';

export default function Home({ onBook }) {
  return <>
    <section className="hero frame">
      <div className="hero-copy">
        <div className="hero-overline"><span className="dot"/> BEAUTY STUDIO CONCEPT / AL HOCEIMA</div>
        <h1>Beauty<br/>is a <span className="hero-italic">feeling<span className="heading-dot">.</span></span></h1>
        <p className="hero-lead">A little pause from the everyday. A little space to feel like your most beautiful self.</p>
        <div className="hero-cta"><button className="button button-dark button-large" onClick={() => onBook()}>Book your moment <Icon name="upRight" size={19}/></button><Link to="/services" className="text-link">Explore our rituals <Icon name="arrow" size={18}/></Link></div>
        <div className="hero-bottom"><span className="small-star">✳</span><span>GOOD BEAUTY. GOOD ENERGY.<br/>ALWAYS, ON YOUR TERMS.</span><span className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></span></div>
      </div>
      <div className="hero-scene">
        <div className="hero-photo-shell"><Photo className="hero-photo" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85" fallback="/art/portrait.svg" alt="Editorial beauty portrait with soft natural styling" loading="eager"/><span className="hero-photo-caption">THE ART OF FEELING GOOD / VOL. 01</span></div>
        <div className="hero-mini-photo"><Photo src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80" fallback="/art/makeup.svg" alt="Makeup inspiration portrait" loading="eager"/></div>
        <div className="hero-stamp"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id="stampCircle" d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"/></defs><text fontSize="10.2" letterSpacing="1.6"><textPath href="#stampCircle">FEEL GOOD • LOOK GOOD • BE YOU • </textPath></text><path d="M50 32l4 14 14 4-14 4-4 14-4-14-14-4 14-4z"/></svg></div>
      </div>
    </section>

    <div className="ticker" aria-label="Make space for yourself"><div className="ticker-row">BEAUTY IS PERSONAL <span>✳</span> THE RITUAL IS YOURS <span>✳</span> A LITTLE MAGIC EVERY DAY <span>✳</span> BEAUTY IS PERSONAL <span>✳</span> THE RITUAL IS YOURS <span>✳</span></div></div>

    <section className="section-space intro-section"><div className="frame intro-grid"><div className="side-label"><span className="eyebrow">A NOTE FROM US / 01</span><span className="vertical-squiggle">~</span></div><div className="intro-content"><h2>Not about changing.<br/>About <em>feeling you.</em></h2><div className="intro-lower"><p>We're here for the small transformations that make a big difference. A soft glow. A fresh set. An extra five minutes to yourself. Because beauty should feel good, first.</p><Link to="/studio" className="circle-link" aria-label="Discover our studio"><Icon name="upRight" size={27}/></Link></div></div></div></section>

    <section className="services-section section-space" id="rituals"><div className="frame"><div className="section-heading-row"><div><span className="eyebrow">WHAT WE LOVE / 02</span><h2 className="section-title">A ritual for <em>every mood.</em></h2></div><Link to="/services" className="underlined-link">ALL SERVICES <Icon name="upRight" size={17}/></Link></div><div className="services-grid">{services.map(s=><ServiceCard service={s} key={s.slug}/>)}</div><p className="services-note"><span>✳</span> Beautifully considered experiences. Always made for you.</p></div></section>

    <section className="editorial-feature"><div className="feature-photo"><Photo src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85" fallback="/art/studio.svg" alt="Beauty tools and salon details"/></div><div className="feature-copy"><span className="eyebrow">THE LITTLE THINGS / 03</span><div className="feature-star">✳</div><h2>Beautiful<br/>things take<br/><em>their time.</em></h2><p>No rushing. No rules. Just a place where you can switch off, settle in, and leave feeling a little more you.</p><Link to="/studio" className="button button-outline">Get to know us <Icon name="upRight" size={17}/></Link><div className="feature-corner">ATELIER BEAUTÉ © STUDIO CONCEPT</div></div></section>

    <section className="section-space gallery-teaser"><div className="frame"><div className="section-heading-row"><div><span className="eyebrow">IN THE MOOD / 04</span><h2 className="section-title">A little <em>inspiration.</em></h2></div><Link to="/gallery" className="underlined-link">SEE THE MOODBOARD <Icon name="upRight" size={17}/></Link></div><div className="teaser-grid">{gallery.slice(0,3).map((item,i)=><Link className={`teaser-item teaser-${i+1}`} to="/gallery" key={item.id}><Photo src={item.photo} fallback={item.fallback} alt={item.label}/><span className="teaser-overlay"><span>{item.category} / 0{i+1}</span><Icon name="upRight" size={21}/></span></Link>)}</div><p className="gallery-disclaimer">Editorial reference imagery for this concept website. Not actual client results.</p></div></section>

    <section className="quote-band"><div className="frame quote-wrap"><span className="quote-mark">“</span><blockquote>There’s no one way<br/>to be <em>beautiful.</em></blockquote><div className="quote-end">JUST YOUR WAY. <span>✳</span></div></div></section>

    <FAQ/>

    <section className="last-cta"><div className="frame last-cta-inner"><div><span className="eyebrow">YOU DESERVE A MOMENT / 06</span><h2>Shall we make<br/>something <em>beautiful?</em></h2></div><button className="button button-dark button-large" onClick={()=>onBook()}>Request an appointment <Icon name="upRight" size={19}/></button></div></section>
  </>;
}
