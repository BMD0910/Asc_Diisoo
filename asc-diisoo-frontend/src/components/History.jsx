import SectionHeading from './SectionHeading'
import history1986 from '../assets/diisoo_1986.jpeg'
import history2013 from '../assets/diisoo_2013.jpeg'

function History() {
  return <section className="history-section" id="le-club"><div className="container history-grid"><div><SectionHeading title="Notre histoire" /><p className="history-subtitle">Plus de 35 ans d’engagement</p><p>Fondée en 1987, ASC Diisoo est née de la volonté de la jeunesse de Diisoo de se rassembler autour du sport. Depuis, le club n’a cessé de grandir et de contribuer à l’épanouissement des jeunes à travers le sport et des valeurs fortes : respect, discipline, solidarité et dépassement.</p><a className="button button--outline-orange" href="#histoire">Découvrir notre histoire <i className="bi bi-arrow-right" /></a></div><div className="history-images"><figure className="history-photo history-photo--archive"><img src={history1986} alt="Équipe historique de l’ASC Diisoo en 1986" /><figcaption>1986</figcaption></figure><figure className="history-photo history-photo--legacy"><img src={history2013} alt="Équipe de l’ASC Diisoo en 2013" /><figcaption>2013</figcaption></figure></div></div></section>
}

export default History