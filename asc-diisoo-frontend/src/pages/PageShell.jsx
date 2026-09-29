import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './PageShell.css'

function PageShell({ title, intro, children }) {
  return <div className="app-shell"><Header /><main className="inner-page"><section className="inner-page__hero"><div className="container"><p className="eyebrow"><span /> ASC Diisoo</p><h1>{title}</h1><p>{intro}</p></div></section><div className="container inner-page__content">{children}</div></main><Footer /></div>
}

function PageCard({ icon, title, text, href = '#' }) {
  return <article className="inner-card"><i className={`bi ${icon}`} /><h2>{title}</h2><p>{text}</p><Link className="button button--orange button--small" to={href}>Découvrir <i className="bi bi-arrow-right" /></Link></article>
}

export { PageCard }
export default PageShell
