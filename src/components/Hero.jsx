import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { hero_img } from '../assets';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useTheme } from '../contexts/ThemeContext';
import { alpha } from '@mui/material/styles';

const Hero = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const stats = [
    { value: '50+', label: 'Projets réalisés' },
    { value: '100%', label: 'Clients satisfaits' },
    { value: '24/7', label: 'Support disponible' },
  ];

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 10, sm: 12, md: 14 },
        pb: { xs: 8, sm: 10, md: 12 },
        background: isDark
          ? 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 55%)',
        transition: 'background 0.5s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <Box sx={{
        position: 'absolute', top: '8%', right: '8%',
        width: 400, height: 400,
        background: isDark
          ? 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(70px)', zIndex: 0,
      }} />
      <Box sx={{
        position: 'absolute', bottom: '5%', left: '3%',
        width: 350, height: 350,
        background: isDark
          ? 'radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', zIndex: 0,
      }} />

      {/* Subtle dot grid */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: isDark
          ? 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)'
          : 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        zIndex: 0,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">

          {/* Left column — text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">

              {/* Badge */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 4,
                    px: 1.75,
                    py: 0.75,
                    borderRadius: '6px',
                    bgcolor: isDark
                      ? 'rgba(37,99,235,0.15)'
                      : 'rgba(37,99,235,0.08)',
                    border: '1px solid',
                    borderColor: isDark
                      ? 'rgba(37,99,235,0.3)'
                      : 'rgba(37,99,235,0.18)',
                  }}
                >
                  <RocketLaunchIcon sx={{ fontSize: 15, color: '#2563eb' }} />
                  <Typography sx={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#2563eb',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}>
                    Solutions Digitales Innovantes
                  </Typography>
                </Box>
              </motion.div>

              {/* Headline */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '2.6rem', sm: '3.2rem', md: '3.6rem', lg: '4rem' },
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                    color: isDark ? '#f1f5f9' : '#0f172a',
                    mb: 2.5,
                  }}
                >
                  Digitalisons{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    votre business
                  </Box>
                </Typography>
              </motion.div>

              {/* Subtitle */}
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    lineHeight: 1.75,
                    color: isDark ? alpha('#f1f5f9', 0.65) : '#475569',
                    mb: 5,
                    maxWidth: '520px',
                  }}
                >
                  Nous transformons vos idées en solutions digitales performantes.
                  Expertise technique, design moderne et stratégie innovante pour propulser votre entreprise.
                </Typography>
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 7 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<FaArrowRight size={13} />}
                    href="/contact"
                    sx={{
                      bgcolor: '#2563eb',
                      borderRadius: '8px',
                      px: 3.5,
                      py: 1.625,
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: '0 4px 14px 0 rgba(37,99,235,0.3)',
                      '&:hover': {
                        bgcolor: '#1e40af',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px -4px rgba(37,99,235,0.45)',
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
                      px: 3.5,
                      py: 1.625,
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderColor: isDark ? 'rgba(255,255,255,0.15)' : '#e2e8f0',
                      borderWidth: '1.5px',
                      color: isDark ? '#e2e8f0' : '#0f172a',
                      '&:hover': {
                        borderColor: '#2563eb',
                        borderWidth: '1.5px',
                        bgcolor: 'rgba(37,99,235,0.05)',
                        color: '#2563eb',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Découvrir nos services
                  </Button>
                </Box>
              </motion.div>

              {/* Stats row */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 4 },
                    pt: 4,
                    borderTop: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#e2e8f0',
                    flexWrap: 'wrap',
                  }}
                >
                  {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: { xs: '1.75rem', sm: '2rem' },
                            lineHeight: 1.1,
                            letterSpacing: '-0.03em',
                            background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          sx={{
                            color: isDark ? '#64748b' : '#94a3b8',
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            mt: 0.25,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                      {index < stats.length - 1 && (
                        <Box sx={{
                          width: 1, height: 36,
                          bgcolor: isDark ? 'rgba(255,255,255,0.08)' : '#e2e8f0',
                        }} />
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              </motion.div>

            </motion.div>
          </Grid>

          {/* Right column — image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={imageVariants} initial="hidden" animate="visible">
              <Box sx={{ position: 'relative' }}>

                {/* Main image */}
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: isDark
                      ? '0 25px 50px -12px rgba(0,0,0,0.5)'
                      : '0 25px 50px -12px rgba(0,0,0,0.15)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(8,145,178,0.06) 100%)',
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <img
                    src={hero_img}
                    alt="DigitEase - Transformation digitale"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    loading="lazy"
                  />
                </Box>

                {/* Floating badge — expertise */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: -20, md: 32 },
                    left: { xs: '50%', md: -28 },
                    transform: { xs: 'translateX(-50%)', md: 'none' },
                    bgcolor: isDark ? '#1e293b' : '#ffffff',
                    borderRadius: '12px',
                    p: '14px 20px',
                    boxShadow: isDark
                      ? '0 20px 40px -12px rgba(0,0,0,0.5)'
                      : '0 20px 40px -12px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#e2e8f0',
                    minWidth: 220,
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <FaCheckCircle size={18} color="#ffffff" />
                  </Box>
                  <Box>
                    <Typography sx={{
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: isDark ? '#f1f5f9' : '#0f172a',
                      lineHeight: 1.2,
                    }}>
                      Expertise certifiée
                    </Typography>
                    <Typography sx={{
                      fontSize: '0.78rem',
                      color: isDark ? '#64748b' : '#94a3b8',
                      mt: 0.25,
                    }}>
                      Web · IA · Cloud
                    </Typography>
                  </Box>
                </Box>

              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
