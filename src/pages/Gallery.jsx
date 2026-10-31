import { useState } from 'react';
import { gallery } from '../data/site.js';
import Icon from '../components/Icons.jsx';
import Photo from '../components/Photo.jsx';

const categories = ['All','Makeup','Hair','Nails','Skin'];

export default function Gallery({ onBook }) {
  const [category, setCategory] = useState('All');
  const [reveal, setReveal] = useState(50);
  const items = category === 'All' ? gallery : gallery.filter(item => item.category === category);
  return <>
    <section className="page-heading frame"><span className="eyebrow">INSPIRATION, NOT IMITATION / THE MOODBOARD</span><div className="page-heading-bottom"><h1>Made to<br/><em>be seen.</em></h1><p>A collection of beautiful ideas, little details, and all the feelings in between.</p></div><span className="page-heading-number">THE LOOKBOOK / 01</span></section>
    <section className="frame gallery-page-section"><div className="gallery-controls"><span className="eyebrow">EXPLORE BY MOOD</span><div className="filter-buttons" role="group" aria-label="Filter inspiration by category">{categories.map(c=><button key={c} aria-pressed={category===c} className={category===c?'filter active':'filter'} onClick={()=>setCategory(c)}>{c}<span>{c==='All'?gallery.length:gallery.filter(g=>g.category===c).length}</span></button>)}</div></div><div className="gallery-grid">{items.map((item,i)=><figure className={`gallery-tile ${i%5===0?'gallery-tall':''}`} key={item.id}><div className="gallery-image"><Photo src={item.photo} fallback={item.fallback} alt={`${item.category} moodboard: ${item.label}`}/><span className="gallery-index">{String(item.id).padStart(2,'0')} / {item.category.toUpperCase()}</span></div><figcaption><strong>{item.label}</strong><span>{item.caption}</span></figcaption></figure>)}</div><p className="gallery-disclaimer">Imagery is for visual direction only; this is a fictional portfolio concept, not actual client work.</p></section>
    <section className="compare-section section-space"><div className="frame compare-layout"><div className="compare-copy"><span className="eyebrow">THE DETAILS / VISUAL PREVIEW</span><h2 className="section-title">The difference<br/>is in the <em>details.</em></h2><p className="muted">Drag to explore a creative before/after color-grading preview. This is a visual effect on the same illustration, not a real treatment result.</p><div className="compare-marker"><span className="small-star">✳</span><span>AN EDITORIAL STUDY IN LIGHT & COLOR</span></div><button onClick={()=>onBook()} className="button button-dark">Create your moment <Icon name="upRight" size={16}/></button></div><div className="compare-frame"><div className="compare-base"><img src="/art/portrait.svg" alt="Illustrated portrait in warm lighting"/></div><div className="compare-top" style={{clipPath:`inset(0 ${100-reveal}% 0 0)`}}><img src="/art/portrait.svg" alt="Same illustrated portrait with a muted color filter"/></div><div className="compare-line" style={{left:`${reveal}%`}}><span>↔</span></div><span className="compare-badge before">BEFORE</span><span className="compare-badge after">AFTER</span><label className="sr-only" htmlFor="compare-range">Move before and after preview</label><input id="compare-range" type="range" min="1" max="99" value={reveal} onChange={e=>setReveal(Number(e.target.value))}/></div></div></section>
  </>;
}
