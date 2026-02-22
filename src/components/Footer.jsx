import React from 'react';
import { contacts, items1 as villes, partenaires, busnesses } from '.';
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
import { digiteaseLogo, digiteaseLogoDark } from '../assets';

const Footer = () => {
  const { isDark } = useTheme();
  const footerLinks = [
    {
      title: 'Navigation',
      links: ['Accueil', 'Services', 'Équipe', 'Témoignages', 'Contact'],
    },
    {
      title: 'Services',
      links: ['Développement Web', 'Applications Mobiles', 'IA & Automatisation', 'Consulting Digital'],
    },
    {
      title: 'Légal',
      links: ['Mentions légales', 'Politique de confidentialité', 'CGV', 'Cookies'],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: isDark ? '#0f172a' : '#111827',
        pt: { xs: 6, sm: 8, md: 10 },
        pb: 4,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        {/* Newsletter Section */}
        <Box
          sx={{
            mb: { xs: 5, md: 8 },
            p: { xs: 3, sm: 4, md: 6 },
            borderRadius: 4,
            background: isDark 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(8, 145, 178, 0.15) 100%)'
              : 'linear-gradient(135deg, rgba(26, 86, 219, 0.15) 0%, rgba(8, 145, 178, 0.15) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  color: '#ffffff',
                  mb: 1,
                }}
              >
                Restez informé
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Recevez nos dernières actualités et offres exclusives
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <TextField
                  placeholder="Votre email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderRadius: 2,
                      color: '#fff',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.4)' },
                      '&.Mui-focused fieldset': { borderColor: '#1a56db' },
                    },
                    '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.5)' },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaEnvelope color="rgba(255,255,255,0.5)" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    minWidth: 'fit-content',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0891b2 0%, #1a56db 100%)',
                    }
                  }}
                >
                  S'abonner
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Main Footer Content */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={digiteaseLogoDark}
              alt="DigitEase"
              sx={{
                height: 50,
                width: 'auto',
                objectFit: 'contain',
                mb: 2,
              }}
            />
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.8, maxWidth: '300px' }}>
              Votre partenaire de confiance pour la transformation digitale. 
              Nous accompagnons les entreprises vers l'excellence numérique.
            </Typography>
            
            {/* Contact Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FaMapMarkerAlt size={16} color="#1a56db" />
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                  Casablanca, Maroc
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FaPhone size={16} color="#1a56db" />
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                  +212 7 79 95 49 88
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FaEnvelope size={16} color="#1a56db" />
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                  contact@digitease.ma
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: '#ffffff',
                  mb: 3,
                  fontSize: '1rem',
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {section.links.map((link, linkIndex) => (
                  <Typography
                    key={linkIndex}
                    component="a"
                    href="#"
                    sx={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#1a56db',
                      }
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
                color: '#ffffff',
                mb: 3,
                fontSize: '1rem',
              }}
            >
              Suivez-nous
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { icon: <BsFacebook size={18} />, label: 'facebook' },
                { icon: <FaInstagramSquare size={18} />, label: 'instagram' },
                { icon: <IoLogoYoutube size={18} />, label: 'youtube' },
                { icon: <FaSquareXTwitter size={18} />, label: 'twitter' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  aria-label={social.label}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                    '&:hover': {
                      bgcolor: '#1a56db',
                      color: '#fff',
                    }
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
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} DigitEase. Tous droits réservés.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Mentions légales', 'Confidentialité', 'Cookies'].map((link, index) => (
              <Typography
                key={index}
                component="a"
                href="#"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  '&:hover': { color: '#1a56db' },
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
