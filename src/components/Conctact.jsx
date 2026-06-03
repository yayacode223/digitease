import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../contexts/ThemeContext';

const contactOptions = [
  {
    icon: <WhatsAppIcon sx={{ fontSize: 24 }} />,
    title: 'WhatsApp',
    detail: '+212 7 79 95 49 88',
    href: 'https://wa.me/+212779954988',
    external: true,
    color: '#25D366',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 24 }} />,
    title: 'Téléphone',
    detail: '+212 7 79 95 49 88',
    href: 'tel:+212779954988',
    external: false,
    color: '#f59e0b',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 24 }} />,
    title: 'Email',
    detail: 'digitease.info@gmail.com',
    href: 'mailto:digitease.info@gmail.com',
    external: false,
    color: '#2563eb',
  },
];

export default function Contact() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <>
      <Navbar />

      {/* Split layout — full viewport */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          pt: { xs: '64px', md: 0 },
        }}
      >
        {/* ── Left panel : image + headline ── */}
        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            minHeight: { xs: '45vw', md: '100vh' },
            backgroundImage: 'url(/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          {/* Overlay gradient */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(160deg, rgba(15,23,42,0.55) 0%, rgba(30,64,175,0.70) 60%, rgba(8,145,178,0.55) 100%)',
            }}
          />

          {/* Text anchored to bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: 'clamp(24px, 5vw, 56px)',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '0.75rem', md: '0.8rem' },
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                mb: 1.5,
              }}
            >
              DigitEase — Maroc
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.15,
                color: '#ffffff',
                mb: 2,
              }}
            >
              Parlons de<br />votre projet
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                maxWidth: 340,
              }}
            >
              Réponse garantie sous 24h. Nous vous accompagnons de l'idée à la mise en ligne.
            </Typography>
          </motion.div>
        </Box>

        {/* ── Right panel : contact options ── */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: isDark ? '#0f172a' : '#ffffff',
            transition: 'background-color 0.3s ease',
            px: { xs: 3, sm: 5, md: 8 },
            py: { xs: 6, md: 0 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{ width: '100%', maxWidth: 440 }}
          >
            {/* Right header */}
            <Typography
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                color: isDark ? '#f1f5f9' : '#0f172a',
                mb: 0.75,
              }}
            >
              Contactez-nous
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9375rem',
                color: isDark ? '#64748b' : '#64748b',
                mb: 4,
              }}
            >
              Choisissez le canal qui vous convient
            </Typography>

            {/* Contact rows */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
              {contactOptions.map((option, index) => (
                <Box
                  key={index}
                  component="a"
                  href={option.href}
                  target={option.external ? '_blank' : undefined}
                  rel={option.external ? 'noopener noreferrer' : undefined}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5,
                    p: 2.5,
                    borderRadius: '14px',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
                    bgcolor: isDark ? '#1e293b' : '#f8fafc',
                    textDecoration: 'none',
                    transition: 'all 0.22s ease',
                    '&:hover': {
                      borderColor: option.color,
                      bgcolor: isDark ? `${option.color}12` : `${option.color}08`,
                      transform: 'translateX(5px)',
                      '& .opt-arrow': { opacity: 1, transform: 'translateX(0)' },
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      bgcolor: `${option.color}18`,
                      color: option.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {option.icon}
                  </Box>

                  {/* Text */}
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.9375rem',
                        color: isDark ? '#f1f5f9' : '#0f172a',
                        lineHeight: 1.3,
                      }}
                    >
                      {option.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.8125rem',
                        color: isDark ? '#64748b' : '#94a3b8',
                        mt: 0.25,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {option.detail}
                    </Typography>
                  </Box>

                  {/* Arrow */}
                  <ArrowForwardIcon
                    className="opt-arrow"
                    sx={{
                      fontSize: 17,
                      color: option.color,
                      opacity: 0,
                      transform: 'translateX(-4px)',
                      transition: 'opacity 0.2s ease, transform 0.2s ease',
                      flexShrink: 0,
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* Divider */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 4,
                color: isDark ? '#334155' : '#e2e8f0',
              }}
            >
              <Box sx={{ flex: 1, height: '1px', bgcolor: 'currentColor' }} />
              <Typography sx={{ fontSize: '0.75rem', color: isDark ? '#475569' : '#94a3b8', fontWeight: 500 }}>
                ou
              </Typography>
              <Box sx={{ flex: 1, height: '1px', bgcolor: 'currentColor' }} />
            </Box>

            {/* Form CTA */}
            <Button
              fullWidth
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/mail')}
              sx={{
                background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                borderRadius: '12px',
                py: 1.75,
                fontWeight: 600,
                fontSize: '0.9375rem',
                textTransform: 'none',
                boxShadow: '0 4px 16px rgba(26,86,219,0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1e40af 0%, #0e7490 100%)',
                  boxShadow: '0 6px 22px rgba(26,86,219,0.45)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.22s ease',
              }}
            >
              Envoyer un message détaillé
            </Button>
          </motion.div>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
