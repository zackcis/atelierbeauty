import { Link } from 'react-router-dom';
import Icon from '../components/Icons.jsx';

export default function NotFound(){return <section className="not-found frame"><span className="eyebrow">NOT QUITE THE RIGHT SHADE</span><h1>404<span>✳</span></h1><p>That page seems to have wandered off. Let's find your way back.</p><Link to="/" className="button button-dark">Back to beauty <Icon name="arrow" size={18}/></Link></section>}
