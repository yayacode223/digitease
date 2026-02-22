import React, { useEffect, Suspense } from 'react'
import { Navbar, Hero, Services, Equipes, FAQ, Temoignages } from '../components'
import { Footer } from '../components'
import SEOHead from '../components/SEOHead'
import { LoadingSpinner } from '../components/ui/FeedbackComponents'
import Box from '@mui/material/Box'

const Home = () => {
  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <Box 
      component="div" 
      sx={{ 
        bgcolor: 'var(--bg-primary)', 
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
      }}
    >
      <SEOHead 
        title="DigitEase - Digitalisons votre business | Solutions numériques sur mesure"
        description="DigitEase est une startup innovante spécialisée dans la digitalisation des entreprises. Création de sites web, SEO, transformation digitale et solutions sur mesure."
      />
      <Navbar isHome={true} />
      <Box component="main" role="main" aria-label="Contenu principal">
        <Suspense fallback={<LoadingSpinner message="Chargement..." />}>
          <Hero />
          <Services />
          <Equipes />
          <Temoignages />
          <FAQ />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
