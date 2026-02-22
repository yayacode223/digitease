import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { hero_img } from '../assets';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useTheme } from '../contexts/ThemeContext';
import { alpha } from '@mui/material/styles';

const Hero = () => {
  const { isDark } = useTheme();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, sm: 10, md: 12 },
        pb: { xs: 6, sm: 8, md: 10 },
        background: isDark
          ? 'radial-gradient(circle at 20% 50%, #1e293b 0%, #0f172a 100%)'
          : 'radial-gradient(circle at 20% 50%, #f0f9ff 0%, #ffffff 100%)',
        transition: 'background 0.5s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Éléments décoratifs modernes */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: isDark
            ? 'radial-gradient(circle, rgba(26,86,219,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(26,86,219,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: isDark
            ? 'radial-gradient(circle, rgba(8,145,178,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      {/* Grille subtile en arrière-plan */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a56db' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Chip
                  icon={<RocketLaunchIcon sx={{ fontSize: 18 }} />}
                  label="Solutions Digitales Innovantes"
                  sx={{
                    mb: 4,
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    py: 2.5,
                    px: 1.5,
                    borderRadius: '100px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                    '& .MuiChip-icon': {
                      color: 'primary.main',
                    },
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: isDark ? '#ffffff' : '#111827',
                    mb: 2,
                  }}
                >
                  Digitalisons{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    votre business
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.125rem', md: '1.25rem' },
                    lineHeight: 1.7,
                    color: isDark ? alpha('#ffffff', 0.7) : alpha('#111827', 0.7),
                    mb: 4,
                    maxWidth: '540px',
                  }}
                >
                  Nous transformons vos idées en solutions digitales performantes. 
                  Expertise technique, design moderne et stratégie innovante pour propulser votre entreprise.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 6 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<FaArrowRight size={14} />}
                    href="/contact"
                    sx={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
                      borderRadius: '100px',
                      px: 4,
                      py: 1.75,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 20px 30px -8px rgba(37, 99, 235, 0.4)',
                      }
                    }}
                  >
                    Demander un devis
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<FaPlay size={12} />}
                    href="#services"
                    sx={{
                      borderRadius: '100px',
                      px: 4,
                      py: 1.75,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderColor: isDark ? alpha('#ffffff', 0.2) : alpha('#000000', 0.1),
                      color: isDark ? '#ffffff' : '#111827',
                      borderWidth: 1.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.04),
                        borderWidth: 1.5,
                      }
                    }}
                  >
                    Découvrir nos services
                  </Button>
                </Box>
              </motion.div>

              {/* Indicateurs de confiance */}
              <motion.div variants={itemVariants}>
                {/* <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    pt: 4,
                    borderTop: '1px solid',
                    borderColor: isDark ? alpha('#ffffff', 0.1) : alpha('#000000', 0.1),
                  }}
                >
                  {[
                    { value: '50+', label: 'Projets réalisés' },
                    { value: '100%', label: 'Clients satisfaits' },
                    { value: '24/7', label: 'Support disponible' },
                  ].map((stat, index) => (
                    <React.Fragment key={index}>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: '2rem',
                            lineHeight: 1.2,
                            background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          sx={{
                            color: isDark ? alpha('#ffffff', 0.6) : alpha('#111827', 0.6),
                            fontSize: '0.875rem',
                            fontWeight: 500,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                      {index < 2 && (
                        <Box
                          sx={{
                            width: 1,
                            height: 30,
                            bgcolor: isDark ? alpha('#ffffff', 0.1) : alpha('#000000', 0.1),
                            borderRadius: 'full',
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </Box> */}
              </motion.div>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(6,182,212,0.1) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    bottom: -20,
                    left: -20,
                    background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                    borderRadius: 4,
                    opacity: 0.1,
                    zIndex: -1,
                  }
                }}
              >
                <img
                  src={hero_img}
                  alt="DigitEase - Transformation digitale"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 16,
                    transform: 'scale(1)',
                    transition: 'transform 0.6s ease',
                  }}
                  loading="lazy"
                />
              </Box>

              {/* Badge flottant */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 40,
                  left: { xs: '50%', md: -20 },
                  transform: { xs: 'translateX(-50%)', md: 'none' },
                  bgcolor: isDark ? '#1e293b' : '#ffffff',
                  borderRadius: 3,
                  p: 2,
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: isDark ? alpha('#ffffff', 0.1) : alpha('#000000', 0.05),
                  zIndex: 2,
                }}
              >
                {/* <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <RocketLaunchIcon sx={{ color: '#ffffff', fontSize: 20 }} />
                </Box> */}
                {/* <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
                    Expertise Confirmée
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: alpha('#000000', 0.6) }}>
                    Innovation continue
                  </Typography>
                </Box> */}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;