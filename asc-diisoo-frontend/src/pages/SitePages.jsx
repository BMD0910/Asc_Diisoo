import { useEffect, useState } from 'react'
import PageShell, { PageCard } from './PageShell'
import './ShopPage.css'
import maillot1 from '../assets/maillot-1.png'
import maillot2 from '../assets/maillot-2.png'
import casquette from '../assets/Casquette.png'
import bracelet from '../assets/Bracelet.png'
import mug from '../assets/mug.png'
import handballImage from '../assets/Diisoo-handball.jpeg'
import footballImage from '../assets/Diisoo-foot.jpeg'
import basketballImage from '../assets/Diisoo-basketball.webp'
import autresImage from '../assets/diisoo-autres.webp'
import { galleryImages, GalleryLightbox } from '../components/GalleryLightbox'
import './GalleryPage.css'

export function ClubPage() {
  return <PageShell title="Le club" intro="Une histoire, des valeurs et une famille qui grandit autour du sport."><div className="inner-grid"><PageCard icon="bi-clock-history" title="Historique du club" text="De 1987 à aujourd’hui, découvrez les étapes qui ont construit l’identité de l’ASC Diisoo." href="/club/histoire" /><PageCard icon="bi-trophy" title="Nos trophées" text="Revivez les compétitions et les victoires qui ont marqué notre parcours." href="/club/trophees" /><PageCard icon="bi-images" title="Galerie du club" text="Les grands moments, les équipes et les visages qui font vivre nos couleurs." href="/galerie" /></div></PageShell>
}

export function HistoryPage() {
  return <PageShell title="Historique du club" intro="Plus de 35 ans d’engagement au service de la jeunesse et du sport."><div className="story-block"><span className="story-year">1987</span><div><h2>Les débuts d’une grande famille</h2><p>Fondée à Diisoo, l’association est née de la volonté de jeunes passionnés de se rassembler autour du sport. Au fil des années, l’ASC Diisoo a grandi en gardant les mêmes valeurs : respect, discipline, solidarité et dépassement.</p></div></div><div className="story-block"><span className="story-year">2025</span><div><h2>Une ambition toujours intacte</h2><p>Le club continue de former, d’accompagner et de rassembler plusieurs générations grâce à ses disciplines et à ses actions locales.</p></div></div></PageShell>
}

export function TrophiesPage() {
  return <PageShell title="Nos trophées" intro="Les résultats racontent une partie de notre histoire, la passion en raconte le reste."><div className="inner-grid"><PageCard icon="bi-award" title="Championnats locaux" text="Les performances collectives qui ont fait rayonner l’ASC Diisoo dans la région." /><PageCard icon="bi-star" title="Tournois" text="Des participations, des finales et des souvenirs partagés avec nos supporters." /><PageCard icon="bi-people" title="Réussites humaines" text="Former des jeunes et créer des liens reste notre plus belle victoire." /></div></PageShell>
}

const teamData = { football: ['Diisoo Football', 'Notre passion, notre fierté.', 'bi-dribbble', footballImage], handball: ['Diisoo Handball', 'Agilité, esprit d’équipe.', 'bi-circle', handballImage], basketball: ['Diisoo Basketball', 'Viser plus haut, toujours.', 'bi-basket', basketballImage], autres: ['Autres activités', 'Culture, éducation, solidarité.', 'bi-people', autresImage] }

export function TeamPage({ type }) {
  const [title, text, icon, image] = teamData[type]
  return <PageShell title={title} intro={text}><div className="team-page"><div className="team-page__visual"><img src={image} alt={title} /><span><i className={`bi ${icon}`} /></span></div><div><p className="eyebrow"><span /> Une discipline ASC Diisoo</p><h2>Une équipe, une énergie, une même passion</h2><p>Retrouvez nos actualités, nos équipes et les informations utiles sur cette discipline. Cette page accueillera prochainement les effectifs, les calendriers et les résultats détaillés.</p><a className="button button--orange" href="/contact">Nous contacter <i className="bi bi-arrow-right" /></a></div></div></PageShell>
}

export function MatchsPage() {
  return <PageShell title="Matchs" intro="Tous les rendez-vous sportifs de l’ASC Diisoo au même endroit."><div className="schedule-list"><div className="schedule-item"><strong>25 MAI</strong><span>ASC Diisoo <b>VS</b> ASC Espoir</span><small>16h30 · Stade Municipal</small></div><div className="schedule-item"><strong>01 JUIN</strong><span>Tournoi International U17</span><small>Dakar, Sénégal</small></div><div className="schedule-item"><strong>10 JUIN</strong><span>Match de gala</span><small>Stade Municipal</small></div></div></PageShell>
}

export function ActualitesPage() {
  return <PageShell title="Actualités" intro="La vie du club, ses équipes et ses événements au fil des jours."><div className="inner-grid"><PageCard icon="bi-megaphone" title="Vie du club" text="Les nouvelles et annonces importantes de l’ASC Diisoo." /><PageCard icon="bi-calendar-event" title="Événements" text="Les rendez-vous à venir pour nos membres, joueurs et supporters." /><PageCard icon="bi-camera" title="Sur le terrain" text="Les moments forts des entraînements et des compétitions." /></div></PageShell>
}

export function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  return <PageShell title="Galerie" intro="Les images de nos équipes, de nos matchs et de notre communauté."><div className="page-gallery">{galleryImages.map((image, index) => <button className="page-gallery__tile" type="button" key={image} onClick={() => setActiveIndex(index)} aria-label={`Ouvrir la photo ${index + 1}`}><img src={image} alt={`Photo de l’ASC Diisoo ${index + 1}`} /><span>Voir la photo</span></button>)}</div>{activeIndex !== null && <GalleryLightbox startIndex={activeIndex} onClose={() => setActiveIndex(null)} />}</PageShell>
}

export function BoutiquePage() {
  const categories = ['Tous', 'Maillots', 'Mode', 'Accessoires', 'Maison']
  const products = [
    { name: 'Maillot domicile ASC Diisoo', category: 'Maillots', price: 8000, oldPrice: 10000, discount: 20, visual: 'shirt-red', image: maillot1 },
    { name: 'Maillot extérieur ASC Diisoo', category: 'Maillots', price: 8000, oldPrice: 12300, discount: 35, visual: 'shirt-white', image: maillot2 },
    { name: 'Polo club rouge', category: 'Mode', price: 5000, oldPrice: 8333, discount: 40, visual: 'polo-red', image: maillot1 },
    { name: 'Casquette Diisoo rouge', category: 'Accessoires', price: 3500, oldPrice: 5000, discount: 30, visual: 'cap-red', image: casquette },
    { name: 'Bracelet ASC Diisoo', category: 'Accessoires', price: 1000, oldPrice: 2000, discount: 50, visual: 'bracelet', image: bracelet },
    { name: 'Mug ASC Diisoo', category: 'Maison', price: 2500, oldPrice: 4000, discount: 38, visual: 'mug', image: mug },
  ]
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(20 * 3600 + 22 * 60 + 40)
  const filteredProducts = products.filter((product) => (activeCategory === 'Tous' || product.category === activeCategory) && product.name.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    const timer = window.setInterval(() => setSecondsLeft((seconds) => seconds > 0 ? seconds - 1 : 20 * 3600 + 22 * 60 + 40), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0')
  const seconds = String(secondsLeft % 60).padStart(2, '0')

  return <PageShell title="Boutique officielle" intro="Portez fièrement les couleurs de l’ASC Diisoo."><div className="shop-store"><div className="shop-toolbar"><strong>Catégories</strong><div className="shop-categories">{categories.map((category) => <button className={activeCategory === category ? 'is-active' : ''} type="button" onClick={() => setActiveCategory(category)} key={category}>{category}</button>)}</div><label className="shop-search"><i className="bi bi-search" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher un produit" aria-label="Rechercher un produit" /></label><button className="shop-cart" type="button"><i className="bi bi-bag" /> Panier <b>{cartCount}</b></button></div><div className="shop-hero"><div><p className="eyebrow"><span /> Collection officielle</p><h2>La passion,<br /><em>notre force</em></h2><p>Maillots, accessoires et souvenirs aux couleurs de l’ASC Diisoo.</p><a className="button button--black" href="#produits">Voir les produits <i className="bi bi-arrow-right" /></a></div><div className="shop-hero__visual"><img className="shop-product-art shop-product-art--shirt" src={maillot1} alt="Maillot ASC Diisoo" /><img className="shop-product-art shop-product-art--mug" src={mug} alt="Mug ASC Diisoo" /></div></div><div className="shop-flash"><strong>Découvrez nos offres</strong><span>Termine dans : <b>{hours} h : {minutes} m : {seconds} s</b></span><mark><i className="bi bi-lightning-charge-fill" /> Vente flash</mark></div><div className="shop-products-grid" id="produits">{filteredProducts.map((product) => <article className="shop-product-card" key={product.name}><div className={`shop-product-image ${product.visual}`}><img src={product.image} alt={product.name} /><span>-{product.discount}%</span><i className="bi bi-bag-heart" /></div><h3>{product.name}</h3><div className="shop-rating">★★★★★ <small>(1 avis)</small></div><p className="shop-stock"><i className="bi bi-check2" /> En stock</p><div className="shop-price"><strong>{product.price.toLocaleString('fr-FR')} FCFA</strong><del>{product.oldPrice.toLocaleString('fr-FR')}</del></div><button className="button button--orange button--full" type="button" onClick={() => setCartCount((count) => count + 1)}>Ajouter au panier <i className="bi bi-bag-plus" /></button></article>)}</div>{filteredProducts.length === 0 && <p className="shop-empty">Aucun produit ne correspond à votre recherche.</p>}<div className="shop-benefits"><span><i className="bi bi-award" /><b>Produits officiels</b></span><span><i className="bi bi-box-seam" /><b>Livraison rapide</b></span><span><i className="bi bi-shield-check" /><b>Paiement sécurisé</b></span><span><i className="bi bi-headset" /><b>Centre d’assistance</b></span></div></div></PageShell>
}

export function ContactPage() {
  return <PageShell title="Contact" intro="Une question, un partenariat ou une envie de rejoindre la famille ? Écrivez-nous."><div className="contact-page"><div><h2>Parlons de votre projet</h2><p><i className="bi bi-geo-alt-fill" /> Diisso, Guédiawaye, Dakar, Sénégal</p><p><i className="bi bi-telephone-fill" /> +221 77 123 45 67</p><p><i className="bi bi-envelope-fill" /> contact@ascdiisoo.sn</p></div><form className="contact-form"><input type="text" placeholder="Votre nom" aria-label="Votre nom" /><input type="email" placeholder="Votre email" aria-label="Votre email" /><textarea placeholder="Votre message" aria-label="Votre message" rows="5" /><button className="button button--orange" type="submit">Envoyer le message <i className="bi bi-send" /></button></form></div></PageShell>
}

export function NotFoundPage() {
  return <PageShell title="Page introuvable" intro="Cette page n’existe pas encore ou a été déplacée."><a className="button button--orange" href="/">Retour à l’accueil <i className="bi bi-arrow-left" /></a></PageShell>
}
