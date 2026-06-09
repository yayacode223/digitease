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

  const socialLinks = [
    { icon: <BsFacebook size={15} />, label: 'Facebook' },
    { icon: <FaInstagramSquare size={15} />, label: 'Instagram' },
    { icon: <IoLogoYoutube size={15} />, label: 'YouTube' },
    { icon: <FaSquareXTwitter size={15} />, label: 'X / Twitter' },
  ];

  const headingSx = {
    fontWeight: 600,
    color: 'rgba(255,255,255,0.85)',
    mb: 2,
    fontSize: '0.72rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  };
  const linkSx = {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.8125rem',
    textDecoration: 'none',
    transition: 'color 0.15s ease',
    '&:hover': { color: '#ffffff' },
  };
  const socialBtnSx = {
    bgcolor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'rgba(255,255,255,0.5)',
    transition: 'all 0.2s ease',
    '&:hover': { bgcolor: '#2563eb', borderColor: '#2563eb', color: '#fff' },
  };

  return (
    <Box
      component="footer"
      sx={{ bgcolor: '#0f172a', pt: { xs: 6, sm: 7, md: 8 }, pb: 4 }}
    >
      <Container maxWidth="lg">
        {/* Main content — compact 3 colonnes */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 4.5 }}>

          {/* Marque + contact */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={digiteaseLogoDark}
              alt="DigitEase"
              sx={{ height: 40, width: 'auto', objectFit: 'contain', mb: 2 }}
            />
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.5)',
                mb: 2.75,
                lineHeight: 1.7,
                fontSize: '0.875rem',
                maxWidth: 320,
              }}
            >
              Votre partenaire pour la transformation digitale — Web, IA et Cloud.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {[
                { icon: <FaMapMarkerAlt size={12} />, text: 'Casablanca, Maroc' },
                { icon: <FaPhone size={12} />, text: '+212 7 79 95 49 88' },
                { icon: <FaEnvelope size={12} />, text: 'digitease.info@gmail.com' },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ color: '#2563eb', flexShrink: 0 }}>{item.icon}</Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8125rem' }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Navigation */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography sx={headingSx}>{footerLinks[0].title}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {footerLinks[0].links.map((link, i) => (
                <Typography key={i} component="a" href={link.href} sx={linkSx}>
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Services + réseaux */}
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography sx={headingSx}>{footerLinks[1].title}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, mb: 3 }}>
              {footerLinks[1].links.map((link, i) => (
                <Typography key={i} component="a" href={link.href} sx={linkSx}>
                  {link.label}
                </Typography>
              ))}
            </Box>
            <Typography sx={headingSx}>Suivez-nous</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {socialLinks.map((social, i) => (
                <IconButton key={i} aria-label={social.label} size="small" sx={socialBtnSx}>
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
