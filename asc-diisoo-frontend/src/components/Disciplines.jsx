import SectionHeading from './SectionHeading'
import handball from '../assets/Diisoo-handball.jpeg'
import football from '../assets/Diisoo-foot.jpeg'
import basketball from '../assets/Diisoo-basketball.webp'
import autres from '../assets/diisoo-autres.webp'
import './Disciplines.css'

const disciplines = [['football', 'bi-dribbble', 'Football', 'Notre passion, notre fierté.', football], ['handball', 'bi-circle', 'Handball', 'Agilité, esprit d’équipe.', handball], ['basketball', 'bi-basket', 'Basketball', 'Viser plus haut, toujours.', basketball], ['autres', 'bi-people', 'Autres activités', 'Culture, éducation, solidarité.', autres]]

function Disciplines() {
  return <section className="disciplines-section" id="equipes"><div className="container"><SectionHeading title="Nos disciplines" /><div className="discipline-grid">{disciplines.map(([className, icon, title, text, image]) => <article className={`discipline-card discipline-card--${className}`} key={title}><div className="discipline-art"><img src={image} alt={title} /><span className="discipline-icon"><i className={`bi ${icon}`} /></span></div><div className="discipline-info"><h3>{title}</h3><p>{text}</p><a className="button button--orange button--small" href={`#${className}`}>Découvrir</a></div></article>)}</div><a className="button button--black disciplines-more" href="#equipes">Voir toutes nos équipes <i className="bi bi-arrow-right" /></a></div></section>
}

export default Disciplines