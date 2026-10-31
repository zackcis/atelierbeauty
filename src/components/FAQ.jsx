import { useState } from 'react';
import Icon from './Icons.jsx';
import { faqs } from '../data/site.js';

export default function FAQ() {
  const [opened, setOpened] = useState(0);
  return <section className="faq-section section-space"><div className="frame faq-layout">
    <div><span className="eyebrow">GOOD TO KNOW / 05</span><h2 className="section-title">Little <em>questions.</em><br/>Easy answers.</h2><p className="muted narrow-copy">Something on your mind? Here are a few useful things to know.</p></div>
    <div className="faq-list">{faqs.map(({question,answer},i)=><div className="faq-item" key={question}><button className="faq-question" aria-expanded={opened===i} onClick={()=>setOpened(opened===i?-1:i)}><span>{String(i+1).padStart(2,'0')}</span><strong>{question}</strong><Icon name={opened===i?'minus':'plus'} size={19}/></button>{opened===i && <p className="faq-answer">{answer}</p>}</div>)}</div>
  </div></section>;
}
