import { useEffect, useState } from 'react';
import Icon from './Icons.jsx';
import { services } from '../data/site.js';
import { dateIsValid, buildBookingMessage, sendInquiry } from '../utils/booking.js';

const initial = { name: '', phone: '', service: '', date: '', time: 'Flexible', notes: '' };
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

export default function BookingModal({ open, initialService, onClose }) {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!open) return;
    setForm({ ...initial, service: initialService || '' });
    setError(''); setNotice('');
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [open, initialService, onClose]);

  if (!open) return null;

  async function submit(event) {
    event.preventDefault();
    setError(''); setNotice('');
    if (!form.name.trim() || !form.phone.trim() || !form.service || !dateIsValid(form.date)) {
      setError('Add your name, phone, service and a valid future date.');
      return;
    }
    setSending(true);
    try {
      const message = buildBookingMessage(form);
      const status = await sendInquiry(message);
      setNotice(status === 'copied'
        ? 'Inquiry copied. Add your studio WhatsApp number in .env to enable direct sending.'
        : 'WhatsApp opened with your message. Your appointment is not confirmed until the studio replies.');
    } catch {
      setError('Could not access the clipboard. Please check clipboard permissions or configure the studio WhatsApp number.');
    } finally { setSending(false); }
  }

  const change = event => setForm(prev => ({ ...prev, [event.target.name]: event.target.value }));

  return (
    <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="booking-title" className="booking-dialog">
        <div className="booking-visual" aria-hidden="true">
          <div className="booking-visual-logo">a<span>.</span>b</div>
          <div className="booking-visual-bottom"><span>AN INVITATION TO FEEL BEAUTIFUL</span><strong>Make room<br /><em>for you.</em></strong></div>
        </div>
        <div className="booking-body">
          <button type="button" className="icon-button modal-close" aria-label="Close booking form" onClick={onClose}><Icon name="close" size={21}/></button>
          <span className="eyebrow">A LITTLE SOMETHING FOR YOU / 01</span>
          <h2 id="booking-title" className="booking-heading">Your moment <em>starts here.</em></h2>
          <p className="muted body-copy">Choose a time that suits you. We'll confirm the availability directly.</p>
          <form className="booking-form" onSubmit={submit}>
            <div className="form-pair">
              <label>Your name <input name="name" value={form.name} onChange={change} placeholder="Full name" autoComplete="name" required /></label>
              <label>Phone / WhatsApp <input name="phone" value={form.phone} onChange={change} placeholder="Your number" type="tel" autoComplete="tel" required /></label>
            </div>
            <label>Choose a ritual
              <select name="service" value={form.service} onChange={change} required>
                <option value="">Select a service</option>
                {services.map(s => <optgroup label={s.title} key={s.slug}>{s.treatments.map(t => <option key={t.name} value={`${s.title} — ${t.name}`}>{t.name} · {t.price} MAD</option>)}</optgroup>)}
              </select>
            </label>
            <div className="form-pair">
              <label>Preferred date <input name="date" value={form.date} onChange={change} type="date" min={today()} required /></label>
              <label>Preferred time <select name="time" value={form.time} onChange={change}><option>Flexible</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
            </div>
            <label>Anything we should know? <textarea name="notes" value={form.notes} onChange={change} rows="2" placeholder="Occasion, second service, questions..." /></label>
            {error && <p className="form-alert error" role="alert">{error}</p>}
            {notice && <p className="form-alert success" role="status">{notice}</p>}
            <button type="submit" disabled={sending} className="button button-dark booking-submit">{sending ? 'Preparing your message…' : 'Request via WhatsApp'} <Icon name="upRight" size={18}/></button>
            <p className="form-footnote">This sends an inquiry only — no payment or confirmed appointment.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
