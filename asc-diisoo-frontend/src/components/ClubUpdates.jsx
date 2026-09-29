import SectionHeading from './SectionHeading'

function MatchCard() {
  return <article className="match-card">
    <p className="card-kicker">Championnat Navétanes - Zone 3</p>
    <div className="match-teams"><div><div className="team-emblem">AD</div><strong>ASC DIISOO</strong></div><b>VS</b><div><div className="team-emblem team-emblem--dark">GT</div><strong>ASC Goney Tay</strong></div></div>
    <div className="match-details"><span><i className="bi bi-calendar3" /> 25 Mai 2025</span><span><i className="bi bi-clock" /> 16h30</span><span><i className="bi bi-geo-alt" /> Stade Municipal</span></div>
    <a className="button button--orange button--full" href="#programme">Voir le programme complet <i className="bi bi-arrow-right" /></a>
  </article>
}

function EventsList() {
  const events = [['01', 'JUN', 'Tournoi International U17', 'Catégorie U17', 'Dakar, Sénégal'], ['10', 'JUN', 'Match de Gala', 'Anciens vs Équipe Première', 'Stade Municipal'], ['20', 'JUN', 'Assemblée Générale', 'Membres & Supporters', 'Salle polyvalente']]
  return <div className="events-list">{events.map(([day, month, title, type, place]) => <article className="event" key={title}><div className="event-date"><strong>{day}</strong><span>{month}</span></div><div><strong>{title}</strong><span>{type}</span><small><i className="bi bi-geo-alt-fill" /> {place}</small></div></article>)}<a className="button button--black button--full mobile-only" href="#evenements">Tous les événements <i className="bi bi-arrow-right" /></a></div>
}

function ClubUpdates() {
  return <section className="updates-section" id="matchs"><div className="container updates-grid"><div><SectionHeading title="Prochain match" action="Voir le programme" /><MatchCard /></div><div id="evenements"><SectionHeading title="Événements à venir" action="Voir tous les événements" /><EventsList /></div></div></section>
}

export default ClubUpdates