import React from 'react';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { FaInstagramSquare, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '../contexts/ThemeContext';
import { digiteaseLogoDark } from '../assets';

const Footer = () => {
  const { isDark } = useTheme();

  const footerLinks = [
    {
      title: 'Navigation',
      links: ['Accueil', 'Services', 'Équipe', 'Témoignages', 'Contact'],
    },
    {
      title: 'Services',
      links: ['Développement Web', 'Applications Mobiles', 'IA & Automatisation', 'Cloud Computing'],
    },
    {
      title: 'Légal',
      links: ['Mentions légales', 'Confidentialité', 'CGV', 'Cookies'],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0f172a',
        pt: { xs: 8, sm: 10, md: 12 },
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        {/* Newsletter Section */}
        <Box
          sx={{
            mb: { xs: 8, md: 10 },
            p: { xs: 3.5, sm: 5, md: 6 },
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(8,145,178,0.12) 100%)',
            border: '1px solid rgba(37,99,235,0.2)',
          }}
        >
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  mb: 1,
                }}
              >
                Restez informé
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: { xs: '0.875rem', sm: '0.9375rem' } }}>
                Recevez nos dernières actualités et offres exclusives
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', gap: 1.5, flexDirection: { xs: 'column', sm: 'row' } }}>
                <TextField
                  placeholder="Votre adresse email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(255,255,255,0.06)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
                      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.25)' },
                      '&.Mui-focused fieldset': { borderColor: '#2563eb' },
                    },
                    '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.35)' },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaEnvelope color="rgba(255,255,255,0.3)" size={14} />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#2563eb',
                    borderRadius: '8px',
                    px: 3.5,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap',
                    minWidth: 'fit-content',
                    boxShadow: 'none',
                    '&:hover': {
                      bgcolor: '#1e40af',
                      boxShadow: '0 4px 14px rgba(37,99,235,0.35)',
                    },
                  }}
                >
                  S'abonner
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Main Footer Content */}
        <Grid container spacing={{ xs: 5, md: 6 }} sx={{ mb: 8 }}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={digiteaseLogoDark}
              alt="DigitEase"
              sx={{ height: 44, width: 'auto', objectFit: 'contain', mb: 2.5 }}
            />
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.5)',
                mb: 4,
                lineHeight: 1.8,
                fontSize: '0.9rem',
                maxWidth: '280px',
              }}
            >
              Votre partenaire de confiance pour la transformation digitale.
              Nous accompagnons les entreprises vers l'excellence numérique.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { icon: <FaMapMarkerAlt size={13} />, text: 'Casablanca, Maroc' },
                { icon: <FaPhone size={13} />, text: '+212 7 79 95 49 88' },
                { icon: <FaEnvelope size={13} />, text: 'contact@digitease.ma' },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.75 }}>
                  <Box sx={{ color: '#2563eb', flexShrink: 0 }}>{item.icon}</Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.85)',
                  mb: 3,
                  fontSize: '0.9rem',
                  letterSpacing: '0.01em',
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
                {section.links.map((link, linkIndex) => (
                  <Typography
                    key={linkIndex}
                    component="a"
                    href="#"
                    sx={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                      '&:hover': { color: 'rgba(255,255,255,0.85)' },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Social Column */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: 'rgba(255,255,255,0.85)',
                mb: 3,
                fontSize: '0.9rem',
              }}
            >
              Suivez-nous
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {[
                { icon: <BsFacebook size={16} />, label: 'facebook' },
                { icon: <FaInstagramSquare size={16} />, label: 'instagram' },
                { icon: <IoLogoYoutube size={16} />, label: 'youtube' },
                { icon: <FaSquareXTwitter size={16} />, label: 'twitter' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  aria-label={social.label}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.45)',
                    '&:hover': {
                      bgcolor: '#2563eb',
                      borderColor: '#2563eb',
                      color: '#fff',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 4,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem' }}>
            © {new Date().getFullYear()} DigitEase. Tous droits réservés.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Mentions légales', 'Confidentialité', 'Cookies'].map((link, index) => (
              <Typography
                key={index}
                component="a"
                href="#"
                sx={{
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '0.8125rem',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                  '&:hover': { color: 'rgba(255,255,255,0.7)' },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
