function SectionHeading({ title, action }) {
  return <div className="section-heading"><h2>{title}</h2>{action && <a href="#plus">{action} <i className="bi bi-arrow-right" /></a>}</div>
}

export default SectionHeading