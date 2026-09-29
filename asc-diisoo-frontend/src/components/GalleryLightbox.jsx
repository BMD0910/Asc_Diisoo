import { useEffect, useState } from 'react'
import './GalleryLightbox.css'

import image1 from '../assets/galerie/diisoo-1.jpg'
import image2 from '../assets/galerie/diisoo-2.jpg'
import image3 from '../assets/galerie/diisoo-3.jpg'
import image4 from '../assets/galerie/diisoo-4.jpg'
import image5 from '../assets/galerie/diisoo-5.webp'
import image6 from '../assets/galerie/diisoo-6.webp'
import image7 from '../assets/galerie/diisoo-7.webp'
import image8 from '../assets/galerie/diisoo-8.webp'
import image9 from '../assets/galerie/diisoo-9.webp'
import image10 from '../assets/galerie/diisoo-10.webp'
import image11 from '../assets/galerie/diisoo-11.webp'
import image12 from '../assets/galerie/diisoo-12.webp'
import image13 from '../assets/galerie/diisoo-13.webp'
import image14 from '../assets/galerie/diisoo-14.webp'
import image15 from '../assets/galerie/diisoo-15.webp'
import image16 from '../assets/galerie/diisoo-16.webp'
import image17 from '../assets/galerie/diisoo-17.webp'

export const galleryImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17]

export function GalleryLightbox({ images = galleryImages, startIndex = 0, onClose }) {
  const [activeIndex, setActiveIndex] = useState(startIndex)
  const hasImages = images.length > 0

  useEffect(() => {
    if (!hasImages) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + images.length) % images.length)
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % images.length)
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [hasImages, images.length, onClose])

  if (!hasImages) return null

  return <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Galerie photo" onClick={onClose}><div className="gallery-lightbox__content" onClick={(event) => event.stopPropagation()}><button className="gallery-lightbox__close" type="button" onClick={onClose} aria-label="Fermer"><i className="bi bi-x-lg" /></button><button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={() => setActiveIndex((index) => (index - 1 + images.length) % images.length)} aria-label="Image précédente"><i className="bi bi-chevron-left" /></button><img className="gallery-lightbox__image" src={images[activeIndex]} alt={`Photo ${activeIndex + 1} sur ${images.length}`} /><button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={() => setActiveIndex((index) => (index + 1) % images.length)} aria-label="Image suivante"><i className="bi bi-chevron-right" /></button><p className="gallery-lightbox__counter">{activeIndex + 1} / {images.length}</p></div></div>
}
