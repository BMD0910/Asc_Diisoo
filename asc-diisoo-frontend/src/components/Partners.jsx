function Partners() {
  return <section className="partners-section"><div className="container"><div className="section-heading"><h2>Nos partenaires</h2><a href="#partenaire">Devenir partenaire <i className="bi bi-arrow-right" /></a></div><div className="partners-grid">{['orange', 'AIR SENEGAL', 'KIRÈNE', 'SENEGINDIA', 'bfm', 'Devenez partenaire'].map((name) => <div className="partner-logo" key={name}>{name}</div>)}</div></div></section>
}

export default Partners