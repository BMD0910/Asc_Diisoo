import logo from '../assets/logo-diisoo.png'

function BrandMark({ compact = false }) {
  return (
    <div className={`brand-mark${compact ? ' brand-mark--compact' : ''}`} aria-label="ASC Diisoo">
      <img className="brand-logo" src={logo} alt="Logo ASC Diisoo" />
      <div className="brand-copy">
        <strong>ASC DIISOO</strong>
        <span>JUB PAS-PAS YEETE</span>
      </div>
    </div>
  )
}

export default BrandMark