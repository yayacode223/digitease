import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiPython, SiAmazonwebservices, SiDocker } from 'react-icons/si';
// import { hero_img } from '../assets'; // visuel latéral désactivé pour le moment — le background.png sert d'image principale
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useTheme } from '../contexts/ThemeContext';

const techStack = [
  { icon: <SiReact size={13} />, label: 'React' },
  { icon: <SiNodedotjs size={13} />, label: 'Node.js' },
  { icon: <SiPython size={13} />, label: 'Python' },
  { icon: <SiAmazonwebservices size={13} />, label: 'AWS' },
  { icon: <SiDocker size={13} />, label: 'Docker' },
];

const Hero = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '92vh' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 12, sm: 13, md: 14 },
        pb: { xs: 8, sm: 9, md: 10 },
        overflow: 'hidden',
        bgcolor: isDark ? '#0b1120' : '#0f172a',
      }}
    >
      {/* Image de fond — pleine largeur, visible */}
      <Box
        component="img"
        src="/heros/background.webp"
        alt="DigitEase — accompagnement et transformation digitale"
        loading="eager"
        fetchpriority="high"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: { xs: '72% center', md: 'center' },
          zIndex: 0,
        }}
      />

      {/* Voile de lisibilité — sombre à gauche (texte), transparent à droite (photo visible) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: {
            xs: 'linear-gradient(180deg, rgba(7,11,22,0.55) 0%, rgba(7,11,22,0.78) 55%, rgba(7,11,22,0.9) 100%)',
            md: 'linear-gradient(90deg, rgba(7,11,22,0.94) 0%, rgba(7,11,22,0.78) 32%, rgba(7,11,22,0.4) 62%, rgba(7,11,22,0.1) 85%, rgba(7,11,22,0) 100%)',
          },
        }}
      />

      {/* Lueur d'accent subtile */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: 460,
          height: 460,
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)',
          filter: 'blur(70px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">

          {/* Texte — flotte au-dessus du background */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">

              {/* Terminal badge */}
              <motion.div variants={itemVariants}>
                {/* <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 3.5,
                    px: 1.5,
                    py: 0.625,
                    borderRadius: '6px',
                    bgcolor: 'rgba(37,99,235,0.18)',
                    border: '1px solid rgba(96,165,250,0.4)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <TerminalIcon sx={{ fontSize: 14, color: '#60a5fa' }} />
                  <Typography sx={{
                    fontFamily: '"Fira Code", "Courier New", monospace',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: '#93c5fd',
                    letterSpacing: '0.02em',
                  }}>
                    digitease.init() → Solutions Digitales
                  </Typography>
                </Box> */}
              </motion.div>

              {/* Headline */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '3.875rem' },
                    lineHeight: 1.08,
                    letterSpacing: '-0.035em',
                    color: '#ffffff',
                    textShadow: '0 2px 24px rgba(0,0,0,0.35)',
                    mb: 2.5,
                  }}
                >
                  Digitalisons{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #60a5fa 20%, #22d3ee 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    vos business
                  </Box>
                </Typography>
              </motion.div>

              {/* Subtitle */}
              {/* <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.075rem' },
                    lineHeight: 1.8,
                    color: 'rgba(241,245,249,0.88)',
                    textShadow: '0 1px 12px rgba(0,0,0,0.4)',
                    mb: 4.5,
                    maxWidth: '520px',
                  }}
                >
                  Nous transformons vos idées en solutions digitales performantes.
                  Web, IA et Cloud — expertise complète pour propulser votre entreprise.
                </Typography>
              </motion.div> */}

              {/* CTA buttons */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<FaArrowRight size={12} />}
                    onClick={() => navigate('/contact')}
                    sx={{
                      bgcolor: '#2563eb',
                      borderRadius: '8px',
                      px: 3,
                      py: 1.5,
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: '0 4px 20px 0 rgba(37,99,235,0.5)',
                      '&:hover': {
                        bgcolor: '#1d4ed8',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 28px -4px rgba(37,99,235,0.6)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Demander un devis
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    href="#services"
                    sx={{
                      borderRadius: '8px',
                      px: 3,
                      py: 1.5,
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderColor: 'rgba(255,255,255,0.4)',
                      borderWidth: '1.5px',
                      color: '#ffffff',
                      backdropFilter: 'blur(8px)',
                      bgcolor: 'rgba(255,255,255,0.06)',
                      '&:hover': {
                        borderColor: '#ffffff',
                        borderWidth: '1.5px',
                        bgcolor: 'rgba(255,255,255,0.14)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Nos services
                  </Button>
                </Box>
              </motion.div>

              {/* Tech stack pills */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography sx={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                  }}>
                    Technologies maîtrisées
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                  {techStack.map((tech, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.75,
                        px: 1.25,
                        py: 0.5,
                        borderRadius: '5px',
                        bgcolor: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.16)',
                        backdropFilter: 'blur(8px)',
                        color: 'rgba(255,255,255,0.85)',
                        transition: 'all 0.15s ease',
                        cursor: 'default',
                        '&:hover': {
                          borderColor: '#60a5fa',
                          color: '#bfdbfe',
                          bgcolor: 'rgba(37,99,235,0.22)',
                        },
                      }}
                    >
                      {tech.icon}
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, lineHeight: 1 }}>
                        {tech.label}
                      </Typography>
                    </Box>
                  ))}
                  </Box>
                </Box>
              </motion.div>

            </motion.div>
          </Grid>

          {/* Visuel latéral désactivé pour le moment — le background.png tient lieu d'image principale.
          <Grid size={{ xs: 12, md: 6 }}>
            ...ancien <img src={hero_img} /> + badge flottant...
          </Grid>
          */}

        </Grid>
      </Container>

      {/* Badge flottant "Disponible" — flotte au-dessus du background (desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: { md: 40, lg: 56 },
            right: { md: 40, lg: 72 },
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 1.5,
            zIndex: 3,
            bgcolor: 'rgba(15,23,42,0.7)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            borderRadius: '10px',
            p: '12px 16px',
            boxShadow: '0 16px 32px -8px rgba(0,0,0,0.5)',
            minWidth: 200,
          }}
        >
          <Box sx={{ position: 'relative', flexShrink: 0 }}>
            <Box sx={{
              width: 10, height: 10,
              borderRadius: '50%',
              bgcolor: '#22c55e',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: -3,
                borderRadius: '50%',
                bgcolor: 'rgba(34,197,94,0.25)',
                animation: 'ping 1.8s cubic-bezier(0,0,0.2,1) infinite',
              },
              '@keyframes ping': {
                '0%': { transform: 'scale(1)', opacity: 0.8 },
                '100%': { transform: 'scale(2.2)', opacity: 0 },
              },
            }} />
          </Box>
          <Box>
            <Typography sx={{
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#f1f5f9',
              lineHeight: 1.25,
            }}>
              Disponible
            </Typography>
            <Typography sx={{
              fontSize: '0.72rem',
              color: 'rgba(241,245,249,0.6)',
              mt: 0.25,
            }}>
              Réponse sous 24h
            </Typography>
          </Box>
        </Box>
      </motion.div>

    </Box>
  );
};

export default Hero;
