import { useEffect, useState } from 'react'
import maillot1 from '../assets/maillot-1.png'
import casquette from '../assets/Casquette.png'
import bracelet from '../assets/Bracelet.png'
import mug from '../assets/mug.png'
import './ShopBanner.css'

const products = [
  [maillot1, 'Maillot ASC Diisoo', 'product--shirt'],
  [casquette, 'Casquette ASC Diisoo', 'product--cap'],
  [bracelet, 'Bracelet ASC Diisoo', 'product--bracelet'],
  [mug, 'Mug ASC Diisoo', 'product--mug'],
]

const getVisibleCount = () => window.innerWidth <= 760 ? 1 : window.innerWidth <= 1100 ? 2 : 3

function ShopBanner() {
  const [shopIndex, setShopIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      const lastIndex = Math.max(0, products.length - visibleCount)
      setShopIndex((index) => index >= lastIndex ? 0 : index + 1)
    }, 2800)
    return () => window.clearInterval(timer)
  }, [visibleCount])

  return <section className="shop-section" id="boutique"><div className="container"><div className="shop-banner"><div className="shop-banner__copy"><p className="eyebrow">La boutique officielle</p><h2>Portez fièrement<br />les couleurs<br />de l’ASC Diisoo !</h2><a className="button button--black" href="/boutique">Visiter la boutique <i className="bi bi-arrow-right" /></a></div><div className="shop-products" aria-label="Produits de la boutique"><div className="shop-products-track" style={{ '--shop-index': shopIndex }}>{products.map(([image, alt, className]) => <div className={`product ${className}`} key={alt}><img src={image} alt={alt} /></div>)}</div></div></div></div></section>
}

export default ShopBanner