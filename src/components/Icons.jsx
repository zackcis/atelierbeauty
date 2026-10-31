import React from 'react';

export default function Icon({ name, size = 18, strokeWidth = 1.7, className = '' }) {
  const paths = {
    arrow: <><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></>,
    upRight: <><path d="M5 19 19 5M7 5h12v12"/></>,
    arrowLeft: <><path d="M20 12H4m7-7-7 7 7 7"/></>,
    menu: <><path d="M3 7h18M3 12h18M3 17h18"/></>,
    close: <><path d="M5 5l14 14M19 5 5 19"/></>,
    plus: <><path d="M12 4v16M4 12h16"/></>,
    minus: <path d="M4 12h16"/>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    check: <path d="m4 12 5 5L20 6"/>,
    star: <path d="m12 2 2.4 7.5L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.5L12 2Z"/>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    heart: <path d="M20.8 8.8c0 5.4-8.8 10.9-8.8 10.9S3.2 14.2 3.2 8.8a4.9 4.9 0 0 1 8.8-2.9 4.9 4.9 0 0 1 8.8 2.9Z"/>,
  };
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.arrow}</svg>;
}
