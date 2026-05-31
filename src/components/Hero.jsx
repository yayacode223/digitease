import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiPython, SiAmazonwebservices, SiDocker } from 'react-icons/si';
import { hero_img } from '../assets';
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: 'auto', md: '92vh' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 11, sm: 12, md: 14 },
        pb: { xs: 7, sm: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: isDark ? '#0b1120' : '#ffffff',
      }}
    >
      {/* Grid-line background — tech/Vercel style */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: isDark
            ? `linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px),
               linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)`
            : `linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 60%, transparent 100%)',
          zIndex: 0,
        }}
      />

      {/* Glow blobs */}
      <Box sx={{
        position: 'absolute', top: '-5%', right: '10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 65%)',
        filter: 'blur(60px)', zIndex: 0,
      }} />
      <Box sx={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 65%)',
        filter: 'blur(80px)', zIndex: 0,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">

          {/* Left — text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">

              {/* Terminal badge */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 3.5,
                    px: 1.5,
                    py: 0.625,
                    borderRadius: '6px',
                    bgcolor: isDark ? 'rgba(37,99,235,0.12)' : 'rgba(37,99,235,0.07)',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(37,99,235,0.28)' : 'rgba(37,99,235,0.15)',
                  }}
                >
                  <TerminalIcon sx={{ fontSize: 14, color: '#2563eb' }} />
                  <Typography sx={{
                    fontFamily: '"Fira Code", "Courier New", monospace',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: '#2563eb',
                    letterSpacing: '0.02em',
                  }}>
                    digitease.init() → Solutions Digitales
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
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '3.875rem' },
                    lineHeight: 1.08,
                    letterSpacing: '-0.035em',
                    color: isDark ? '#f1f5f9' : '#0f172a',
                    mb: 2.5,
                  }}
                >
                  Digitalisons{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #2563eb 20%, #0891b2 100%)',
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
                    fontSize: { xs: '1rem', md: '1.075rem' },
                    lineHeight: 1.8,
                    color: isDark ? '#64748b' : '#64748b',
                    mb: 4.5,
                    maxWidth: '500px',
                  }}
                >
                  Nous transformons vos idées en solutions digitales performantes.
                  Web, IA et Cloud — expertise complète pour propulser votre entreprise.
                </Typography>
              </motion.div>

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
                      boxShadow: '0 4px 14px 0 rgba(37,99,235,0.28)',
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
                      px: 3,
                      py: 1.5,
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderColor: isDark ? 'rgba(255,255,255,0.12)' : '#e2e8f0',
                      borderWidth: '1.5px',
                      color: isDark ? '#cbd5e1' : '#374151',
                      '&:hover': {
                        borderColor: '#2563eb',
                        borderWidth: '1.5px',
                        bgcolor: 'rgba(37,99,235,0.05)',
                        color: '#2563eb',
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
                    color: isDark ? '#475569' : '#94a3b8',
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
                        bgcolor: isDark ? 'rgba(255,255,255,0.04)' : '#f1f5f9',
                        border: '1px solid',
                        borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
                        color: isDark ? '#94a3b8' : '#64748b',
                        transition: 'all 0.15s ease',
                        cursor: 'default',
                        '&:hover': {
                          borderColor: '#2563eb',
                          color: '#2563eb',
                          bgcolor: isDark ? 'rgba(37,99,235,0.1)' : 'rgba(37,99,235,0.06)',
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

          {/* Right — image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={imageVariants} initial="hidden" animate="visible">
              <Box sx={{ position: 'relative' }}>

                {/* Main image */}
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    boxShadow: isDark
                      ? '0 0 0 1px rgba(255,255,255,0.06), 0 24px 48px -12px rgba(0,0,0,0.6)'
                      : '0 0 0 1px #e2e8f0, 0 24px 48px -12px rgba(0,0,0,0.12)',
                  }}
                >
                  <img
                    src={hero_img}
                    alt="DigitEase - Transformation digitale"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    loading="lazy"
                  />
                </Box>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: { xs: -18, md: 28 },
                      left: { xs: '50%', md: -24 },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      bgcolor: isDark ? '#0f172a' : '#ffffff',
                      borderRadius: '10px',
                      p: '12px 16px',
                      boxShadow: isDark
                        ? '0 0 0 1px rgba(255,255,255,0.07), 0 16px 32px -8px rgba(0,0,0,0.5)'
                        : '0 0 0 1px #e2e8f0, 0 16px 32px -8px rgba(0,0,0,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      minWidth: 200,
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: '7px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <FaCheckCircle size={15} color="#ffffff" />
                    </Box>
                    <Box>
                      <Typography sx={{
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        color: isDark ? '#f1f5f9' : '#0f172a',
                        lineHeight: 1.25,
                      }}>
                        Expertise certifiée
                      </Typography>
                      <Typography sx={{
                        fontSize: '0.72rem',
                        color: isDark ? '#475569' : '#94a3b8',
                        mt: 0.25,
                      }}>
                        Web · IA · Cloud
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>

              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
