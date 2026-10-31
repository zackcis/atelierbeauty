import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icons.jsx';

export default function Header({ onBook }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const links = [ ['Services', '/services'], ['Our work', '/gallery'], ['The studio', '/studio'], ['Contact', '/contact'] ];
  return (
    <>
      <div className="announcement"><span>YOUR KIND OF BEAUTY, YOUR KIND OF DAY.</span><span className="announcement-center">✳</span><span>MADE WITH LOVE IN AL HOCEIMA, MOROCCO</span></div>
      <header className="site-header">
        <div className="nav-inner frame">
          <Link to="/" aria-label="Atelier Beauté home" className="brand"><span className="brand-mark">a<span>•</span>b</span><span className="brand-name">ATELIER<br/>BEAUTÉ</span></Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label,path]) => <NavLink key={path} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to={path}>{label}</NavLink>)}
          </nav>
          <div className="nav-actions"><button className="button button-dark top-book" onClick={() => onBook()}>Book a moment <Icon name="upRight" size={16}/></button><button className="mobile-toggle icon-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v=>!v)}><Icon name={menuOpen?'close':'menu'} size={25}/></button></div>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label,path])=><Link to={path} key={path}>{label} <Icon name="upRight"/></Link>)}<button onClick={() => { setMenuOpen(false); onBook(); }}>Request an appointment <Icon name="upRight"/></button></nav>}
      </header>
    </>
  );
}
