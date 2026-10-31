export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');

export function dateIsValid(date) {
  if (!date) return false;
  const selected = new Date(`${date}T12:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return !Number.isNaN(selected.getTime()) && selected >= today;
}

export function buildBookingMessage({ name, phone, service, date, time, notes }) {
  return [
    'Hello Atelier Beauté, I would like to ask about an appointment.',
    '',
    `Name: ${name.trim()}`,
    `Phone: ${phone.trim()}`,
    `Service: ${service}`,
    `Preferred date: ${date}`,
    `Preferred time: ${time}`,
    ...(notes?.trim() ? [`Notes: ${notes.trim()}`] : []),
    '',
    'This is an appointment request, not a confirmed booking. Please let me know your availability.'
  ].join('\n');
}

export async function sendInquiry(message) {
  if (WHATSAPP_NUMBER) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    return 'opened';
  }
  // Never send to an invented number. Copy the message until a real number is configured.
  await navigator.clipboard.writeText(message);
  return 'copied';
}
