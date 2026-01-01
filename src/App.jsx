import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Details from './components/Details'
import CTA from './components/CTA'
import Footer from './components/Footer'
import RegistrationModal from './components/RegistrationModal'
import ThankYou from './components/ThankYou'
import './App.css'

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="app">
      <Navbar />
      <Hero onRegisterClick={openModal} />
      <Features />
      <Details />
      <CTA onRegisterClick={openModal} />
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
