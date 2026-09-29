import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import { galleryImages, GalleryLightbox } from './GalleryLightbox'
import './Gallery.css'

const getVisibleCount = () => {
  if (window.innerWidth <= 760) return 1
  if (window.innerWidth <= 1100) return 2
  return 4
}

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isPaused) return undefined

    const timer = window.setInterval(() => {
      const lastIndex = Math.max(0, galleryImages.length - visibleCount)
      setCarouselIndex((index) => index >= lastIndex ? 0 : index + 1)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [isPaused, visibleCount])

  return <section className="gallery-section" id="galerie"><div className="container"><SectionHeading title="Galerie" action="Voir toute la galerie" /><div className="gallery-carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}><div className="gallery-grid" style={{ '--gallery-index': carouselIndex }}>{galleryImages.map((image, index) => <button className={`gallery-tile gallery-tile--${index + 1}`} type="button" key={image} onClick={() => setActiveIndex(index)} aria-label={`Ouvrir la photo ${index + 1}`}><img src={image} alt={`Moment de l’ASC Diisoo ${index + 1}`} /><span>Voir la photo</span></button>)}</div></div></div>{activeIndex !== null && <GalleryLightbox startIndex={activeIndex} onClose={() => setActiveIndex(null)} />}</section>
}

export default Gallery