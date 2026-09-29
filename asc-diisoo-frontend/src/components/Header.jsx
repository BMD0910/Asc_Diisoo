import BrandMark from './BrandMark'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import './Header.css'
import './HeaderFixed.css'

const clubLinks = [
  ['Historique du club', '/club/histoire'],
  ['Trophées', '/club/trophees'],
  ['Galerie', '/galerie'],
]

const teamLinks = [
  ['Diisoo Football', '/equipes/football'],
  ['Diisoo Handball', '/equipes/handball'],
  ['Diisoo Basketball', '/equipes/basketball'],
  ['Autres activités', '/equipes/autres'],
]

const mainLinks = [
  ['Accueil', '/'],
  ['Matchs', '/matchs'],
  ['Actualités', '/actualites'],
  ['Galerie', '/galerie'],
  ['Boutique', '/boutique'],
  ['Contact', '/contact'],
]

function DesktopDropdown({ label, links }) {
  return (
    <div className="nav-dropdown">
      <button className="nav-dropdown__toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {label} <i className="bi bi-chevron-down" />
      </button>
      <ul className="dropdown-menu">
        {links.map(([item, href]) => <li key={item}><Link className="dropdown-item" to={href}>{item}<i className="bi bi-arrow-up-right" /></Link></li>)}
      </ul>
    </div>
  )
}

function Header() {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'
  const [isHidden, setIsHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let previousScrollY = window.scrollY
    const hideAfterPixels = 96

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - previousScrollY

      if (currentScrollY <= 8) {
        setIsScrolled(false)
        setIsHidden(false)
      } else {
        setIsScrolled(true)
        if (currentScrollY > hideAfterPixels && scrollDelta > 4) {
          setIsHidden(true)
        } else if (scrollDelta < -4) {
          setIsHidden(false)
        }
      }

      previousScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`site-header${isHomePage ? '' : ' site-header--inner'}${isScrolled ? ' site-header--scrolled' : ''}${isHidden ? ' site-header--hidden' : ''}`}>
      <div className="container site-header__inner">
        <Link className="brand-link" to="/"><BrandMark /></Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} to="/">Accueil</NavLink>
          <DesktopDropdown label="Le club" links={clubLinks} />
          <DesktopDropdown label="Équipes" links={teamLinks} />
          {mainLinks.slice(1).map(([item, href]) => <NavLink className={({ isActive }) => isActive ? 'is-active' : ''} to={href} key={item}>{item}</NavLink>)}
        </nav>
        <div className="header-socials" aria-label="Réseaux sociaux">
          <a href="#facebook" aria-label="Facebook"><i className="bi bi-facebook" /></a>
          <a href="#instagram" aria-label="Instagram"><i className="bi bi-instagram" /></a>
          <a href="#youtube" aria-label="YouTube"><i className="bi bi-youtube" /></a>
          <a href="#boutique" aria-label="Boutique"><i className="bi bi-bag" /></a>
        </div>
        <button className="mobile-menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-label="Ouvrir le menu">
          <i className="bi bi-list" />
        </button>
      </div>
      </header>
      <div className="offcanvas offcanvas-end mobile-nav" tabIndex="-1" id="mobileNav" aria-labelledby="mobileNavLabel">
        <div className="offcanvas-header">
          <div id="mobileNavLabel"><BrandMark compact /></div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Fermer" />
        </div>
        <div className="offcanvas-body">
          <MobileNavLink to="/">Accueil<i className="bi bi-arrow-up-right" /></MobileNavLink>
          <MobileDropdown id="mobileClub" label="Le club" links={clubLinks} />
          <MobileDropdown id="mobileTeams" label="Équipes" links={teamLinks} />
          {mainLinks.slice(1).map(([item, href]) => <MobileNavLink to={href} key={item}>{item}<i className="bi bi-arrow-up-right" /></MobileNavLink>)}
        </div>
      </div>
    </>
  )
}

function MobileDropdown({ id, label, links }) {
  return (
    <div className="mobile-nav__group">
      <button className="mobile-nav__toggle collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
        {label}<i className="bi bi-chevron-down" />
      </button>
      <div className="collapse mobile-nav__submenu" id={id}>
        {links.map(([item, href]) => <MobileNavLink to={href} key={item}>{item}<i className="bi bi-arrow-up-right" /></MobileNavLink>)}
      </div>
    </div>
  )
}

function MobileNavLink({ to, children }) {
  const navigate = useNavigate()

  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
    Offcanvas.getInstance(document.getElementById('mobileNav'))?.hide()
  }

  return <Link to={to} onClick={handleClick}>{children}</Link>
}

export default Header