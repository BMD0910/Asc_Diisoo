import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ClubUpdates from './components/ClubUpdates'
import Disciplines from './components/Disciplines'
import History from './components/History'
import Gallery from './components/Gallery'
import ShopBanner from './components/ShopBanner'
import Partners from './components/Partners'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import {
  ActualitesPage,
  BoutiquePage,
  ClubPage,
  ContactPage,
  GalleryPage,
  HistoryPage,
  MatchsPage,
  NotFoundPage,
  TeamPage,
  TrophiesPage,
} from './pages/SitePages'
import './App.css'

function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<div className="app-shell"><Header /><main><HeroSection /><ClubUpdates /><Disciplines /><History /><Gallery /><ShopBanner /><Partners /></main><Footer /></div>} />
    <Route path="/club" element={<ClubPage />} />
    <Route path="/club/histoire" element={<HistoryPage />} />
    <Route path="/club/trophees" element={<TrophiesPage />} />
    <Route path="/equipes/:type" element={<TeamRoute />} />
    <Route path="/matchs" element={<MatchsPage />} />
    <Route path="/actualites" element={<ActualitesPage />} />
    <Route path="/galerie" element={<GalleryPage />} />
    <Route path="/boutique" element={<BoutiquePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></BrowserRouter>
}

function TeamRoute() {
  const { type } = useParams()
  return <TeamPage type={type} />
}

export default App
