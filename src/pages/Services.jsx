import { useEffect } from 'react';
import { services, money } from '../data/site.js';
import Photo from '../components/Photo.jsx';
import Icon from '../components/Icons.jsx';

export default function Services({ onBook }) {
  useEffect(() => { if (window.location.hash) { setTimeout(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView({behavior:'smooth'}), 80); } }, []);
  return <>
    <section className="page-heading frame"><span className="eyebrow">CURATED WITH CARE / OUR SERVICES</span><div className="page-heading-bottom"><h1>The beauty<br/><em>menu.</em></h1><p>Some days call for a little glow. Others call for the whole moment. Find your thing.</p></div><span className="page-heading-number">01 — 04</span></section>
    <div className="frame service-navigator">{services.map(s=><a href={`#${s.slug}`} key={s.slug}>{s.number} / {s.title}<Icon name="arrow" size={15}/></a>)}</div>
    <div className="service-detail-list">{services.map((s,i) => <section className={`service-detail ${i%2===1?'reversed':''}`} id={s.slug} key={s.slug}><div className="frame service-detail-grid"><div className="service-detail-photo"><Photo src={s.photo} fallback={s.fallback} alt={`${s.title} editorial example`}/><div className="photo-sticker">BEAUTY<br/>IS A<br/><em>FEELING.</em></div></div><div className="service-detail-copy"><span className="eyebrow">THE RITUAL / {s.number}</span><h2>{s.title}<span className="headline-flower">✳</span></h2><p>{s.description}</p><div className="treatment-list">{s.treatments.map(t=><div className="treatment" key={t.name}><div><strong>{t.name}</strong><span>{t.time}</span></div><div className="treatment-right"><strong>{money(t.price)}</strong><button aria-label={`Request ${t.name}`} title={`Request ${t.name}`} onClick={()=>onBook(`${s.title} — ${t.name}`)}><Icon name="upRight" size={19}/></button></div></div>)}</div><div className="detail-footer"><span>{s.note}</span><button className="button button-dark" onClick={()=>onBook(s.treatments[0] ? `${s.title} — ${s.treatments[0].name}` : '')}>Enquire now <Icon name="upRight" size={16}/></button></div></div></div></section>)}</div>
    <div className="frame small-print-section"><span>GOOD TO KNOW</span><p>These are illustrative services and prices for a concept portfolio website, not a current salon price list. Appointments are subject to direct confirmation.</p></div>
  </>;
}
