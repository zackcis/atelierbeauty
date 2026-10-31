import { Link } from 'react-router-dom';
import Icon from './Icons.jsx';
import Photo from './Photo.jsx';

export default function ServiceCard({ service }) {
  return <Link className="service-card" to={`/services#${service.slug}`}>
    <div className="service-image"><Photo src={service.photo} fallback={service.fallback} alt={`${service.title} inspiration`} /><span className="service-card-index">/{service.number}</span><div className="service-card-circle"><Icon name="upRight" size={21}/></div></div>
    <div className="service-card-info"><div><h3>{service.title}</h3><span>{service.short}</span></div><span className="service-price">FROM {service.from} MAD</span></div>
  </Link>;
}
