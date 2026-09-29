import headerImage from '../assets/header1.png'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section" id="accueil">
      <div className="hero-background" aria-hidden="true">
        <img src={headerImage} alt="" />
      </div>
      <div className="hero-section__texture" />
      <div className="container hero-section__content">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Depuis 1987, Guédiawaye</p>
          <h1><span className="hero-title-line">Plus qu’un club,</span><br /><em>une famille</em><br />une passion !</h1>
          <p className="hero-lead">ASC Diisoo est une grande famille unie autour du sport, de valeurs fortes et d’un même objectif : se dépasser et faire rayonner nos couleurs.</p>
          <div className="hero-actions">
            <a className="button button--orange" href="#le-club">Découvrir le club <i className="bi bi-arrow-right" /></a>
            <a className="button button--ghost" href="#video"><i className="bi bi-play-circle" /> Voir la vidéo</a>
          </div>
        </div>
        <div className="hero-badge">JUB<br /><strong>PAS-PAS</strong><br />YEETE</div>
      </div>
      <div className="container stats-strip">
        {[['bi-trophy', '1987', 'Année de création'], ['bi-people', '15+', 'Équipes engagées'], ['bi-person', '500+', 'Jeunes formés'], ['bi-heart', '1', 'Grande famille']].map(([icon, value, label]) => (
          <div className="stat" key={label}><i className={`bi ${icon}`} /><div><strong>{value}</strong><span>{label}</span></div></div>
        ))}
      </div>
    </section>
  )
}

export default HeroSection