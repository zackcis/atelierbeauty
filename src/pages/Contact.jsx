import { useState } from 'react';
import Icon from '../components/Icons.jsx';
import { sendInquiry } from '../utils/booking.js';
import Photo from '../components/Photo.jsx';

export default function Contact({onBook}) {
  const [form,setForm] = useState({name:'',phone:'',message:''});
  const [status,setStatus] = useState('');
  const [busy,setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault(); setBusy(true); setStatus('');
    try {
      const m=`Hello Atelier Beauté, I have a question.\n\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nMessage: ${form.message.trim()}\n\nPlease reply when possible.`;
      const r=await sendInquiry(m);
      setStatus(r==='copied'?'Message copied to clipboard. Add the studio number in .env to enable WhatsApp sending.':'WhatsApp opened with your message.');
    } catch {setStatus('Unable to copy. Please configure the studio WhatsApp number to send directly.');}
    finally {setBusy(false);}
  }
  return <>
    <section className="page-heading frame"><span className="eyebrow">LOVE LETTERS WELCOME / CONTACT US</span><div className="page-heading-bottom"><h1>Say hello,<br/><em>beautiful.</em></h1><p>Have something in mind? A question, an occasion, or just a little curiosity? We're listening.</p></div></section>
    <section className="contact-section frame"><div className="contact-image"><Photo src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85" fallback="/art/makeup.svg" alt="Beauty editorial inspiration"/><div className="contact-image-label">A LITTLE HELLO GOES A LONG WAY. ✳</div></div><div className="contact-panel"><span className="eyebrow">TALK TO US / 01</span><h2>Leave us<br/>a <em>little note.</em></h2><p>Send a message with what's on your mind. For appointment requests, use our booking form.</p><form onSubmit={submit} className="contact-form"><label>Your name<input value={form.name} required onChange={e=>setForm({...form,name:e.target.value})} placeholder="What shall we call you?"/></label><label>Your WhatsApp number<input value={form.phone} type="tel" required onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone number"/></label><label>Your message<textarea rows="4" value={form.message} required onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us a little more..."/></label><button className="button button-dark" type="submit" disabled={busy}>{busy?'Preparing…':'Send an inquiry'} <Icon name="upRight" size={16}/></button>{status&&<p className="form-alert success" role="status">{status}</p>}</form><button className="contact-book-link" onClick={()=>onBook()}>Prefer an appointment request? <Icon name="upRight" size={16}/></button></div></section>
    <section className="contact-visit section-space"><div className="frame"><span className="eyebrow">WHERE TO FIND US / 02</span><div className="contact-visit-row"><h2>See you <em>soon.</em></h2><div><span className="contact-visit-icon"><Icon name="pin" size={29}/></span><h3>Al Hoceima, Morocco</h3><p>Studio concept; no street address or opening hours have been provided. Visiting details will be added after owner approval.</p><button className="button button-outline" onClick={()=>onBook()}>Request a time <Icon name="upRight" size={17}/></button></div></div></div></section>
  </>;
}
