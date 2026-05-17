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
import { useTheme } from '../contexts/ThemeContext';
import { digiteaseLogoDark } from '../assets';

const Footer = () => {
  const { isDark } = useTheme();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Accueil', href: '#' },
        { label: 'Services', href: '#services' },
        { label: 'Équipe', href: '#equipes' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Développement Web & Mobile', href: '/services/1' },
        { label: 'IA & Automatisation', href: '/services/2' },
        { label: 'Cloud Computing', href: '/services/3' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{ bgcolor: '#0f172a', pt: { xs: 7, sm: 9, md: 10 }, pb: 5 }}
    >
      <Container maxWidth="lg">
        {/* Main content */}
        <Grid container spacing={{ xs: 5, md: 6 }} sx={{ mb: 6 }}>

          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={digiteaseLogoDark}
              alt="DigitEase"
              sx={{ height: 42, width: 'auto', objectFit: 'contain', mb: 2.5 }}
            />
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.45)',
                mb: 4,
                lineHeight: 1.8,
                fontSize: '0.875rem',
                maxWidth: '270px',
              }}
            >
              Votre partenaire de confiance pour la transformation digitale.
              Web, IA et Cloud pour propulser votre entreprise.
            </Typography>

            {/* Contact info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
              {[
                { icon: <FaMapMarkerAlt size={12} />, text: 'Casablanca, Maroc' },
                { icon: <FaPhone size={12} />, text: '+212 7 79 95 49 88' },
                { icon: <FaEnvelope size={12} />, text: 'contact@digitease.ma' },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ color: '#2563eb', flexShrink: 0 }}>{item.icon}</Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem' }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Links columns */}
          {footerLinks.map((section, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)',
                  mb: 2.5,
                  fontSize: '0.875rem',
                  letterSpacing: '0.01em',
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {section.links.map((link, i) => (
                  <Typography
                    key={i}
                    component="a"
                    href={link.href}
                    sx={{
                      color: 'rgba(255,255,255,0.38)',
                      fontSize: '0.8125rem',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                      '&:hover': { color: 'rgba(255,255,255,0.8)' },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Social column */}
          <Grid size={{ xs: 12, sm: 4, md: 2 }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: 'rgba(255,255,255,0.8)',
                mb: 2.5,
                fontSize: '0.875rem',
              }}
            >
              Suivez-nous
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {[
                { icon: <BsFacebook size={15} />, label: 'Facebook' },
                { icon: <FaInstagramSquare size={15} />, label: 'Instagram' },
                { icon: <IoLogoYoutube size={15} />, label: 'YouTube' },
                { icon: <FaSquareXTwitter size={15} />, label: 'X / Twitter' },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  aria-label={social.label}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.4)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: '#2563eb',
                      borderColor: '#2563eb',
                      color: '#fff',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            pt: 3.5,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} DigitEase. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
