import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import { useTheme } from '../contexts/ThemeContext';
import { digiteaseLogo, digiteaseLogoDark } from '../assets';

const Navbar = ({ isHome }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sectionIds = ['hero', 'services', 'testimonials', 'equipes', 'faq'];
    const observers = [];
    const visibilityMap = {};

    const pickMostVisible = () => {
      let best = 'hero';
      let bestRatio = 0;
      for (const id of sectionIds) {
        if ((visibilityMap[id] ?? 0) > bestRatio) {
          bestRatio = visibilityMap[id];
          best = id;
        }
      }
      setActiveSection(best);
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.intersectionRatio;
          pickMostVisible();
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [isHome]);

  const navLinks = [
    { label: 'Accueil', href: '#hero', id: 'hero', onClick: () => navigate('/') },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Équipe', href: '#equipes', id: 'equipes' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const scrolledBg = isDark ? 'rgba(15, 23, 42, 0.97)' : 'rgba(255, 255, 255, 0.97)';
  const transparentBg = 'transparent';

  // Le fond derrière la navbar est-il sombre ? (pilote le traitement clair/foncé)
  // - scrollée : fond plein blanc (clair) ou navy (sombre) selon le thème
  // - en haut  : le Home a un hero sombre ; les autres pages suivent le thème
  const surfaceIsDark = scrolled ? isDark : (isHome || isDark);
  // Onglets superposés au hero sombre du Home (navbar transparente)
  const overHero = isHome && !scrolled;

  // Onglets : bleu foncé sur fond clair, blanc sur le hero sombre, bleu clair en mode sombre
  const linkColor = overHero ? '#ffffff' : (isDark ? '#93c5fd' : '#1e40af');
  const linkActiveColor = overHero ? '#ffffff' : (isDark ? '#60a5fa' : '#1d4ed8');
  const linkHoverColor = overHero ? '#ffffff' : (isDark ? '#bfdbfe' : '#1d4ed8');
  const underlineColor = overHero ? '#60a5fa' : (isDark ? '#60a5fa' : '#1d4ed8');

  // Icônes (thème, menu) : claires sur fond sombre, foncées sur fond clair
  const iconColor = surfaceIsDark ? 'rgba(255,255,255,0.88)' : (isDark ? '#94a3b8' : '#64748b');
  const iconHoverColor = surfaceIsDark ? '#ffffff' : (isDark ? '#e2e8f0' : '#0f172a');
  const iconHoverBg = surfaceIsDark ? 'rgba(255,255,255,0.14)' : (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)');

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: 1100,
        bgcolor: scrolled ? scrolledBg : transparentBg,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        borderBottom: scrolled
          ? `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0'}`
          : '1px solid transparent',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          width: '100%',
          px: { xs: 2, sm: 3, md: 4 },
          minHeight: { xs: 64, md: 72 },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo — pastille claire sur fond sombre pour rester bien visible */}
        <Box
          onClick={() => navigate('/')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            px: surfaceIsDark ? 1.25 : 0,
            py: surfaceIsDark ? 0.5 : 0,
            borderRadius: '10px',
            bgcolor: surfaceIsDark ? 'rgba(255,255,255,0.94)' : 'transparent',
            boxShadow: surfaceIsDark ? '0 2px 12px rgba(0,0,0,0.2)' : 'none',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease',
          }}
        >
          <Box
            component="img"
            src={isDark ? digiteaseLogoDark : digiteaseLogo}
            alt="DigitEase"
            sx={{ height: { xs: 36, sm: 42, md: 48 }, width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </Box>

        {/* Desktop Navigation */}
        {isHome && (
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0,
              flex: 1,
              justifyContent: 'center',
              mx: 4,
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Button
                  key={link.label}
                  onClick={link.onClick}
                  href={link.href !== '#' ? link.href : undefined}
                  sx={{
                    textTransform: 'none',
                    fontWeight: isActive ? 700 : 600,
                    fontSize: '0.9375rem',
                    color: isActive ? linkActiveColor : linkColor,
                    textShadow: overHero ? '0 1px 8px rgba(0,0,0,0.4)' : 'none',
                    px: 2,
                    py: 1,
                    borderRadius: '6px',
                    letterSpacing: 0,
                    position: 'relative',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      bgcolor: 'transparent',
                      color: linkHoverColor,
                      '&::after': { transform: 'scaleX(1)' },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: 8,
                      right: 8,
                      height: '2px',
                      bgcolor: underlineColor,
                      borderRadius: '1px',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'center',
                      transition: 'transform 0.2s ease',
                    },
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
          </Box>
        )}

        {/* Right side */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0 }}>
          {/* Theme Toggle */}
          <Tooltip title={isDark ? 'Mode clair' : 'Mode sombre'}>
            <IconButton
              onClick={toggleTheme}
              size="small"
              sx={{
                color: iconColor,
                '&:hover': {
                  bgcolor: iconHoverBg,
                  color: iconHoverColor,
                },
              }}
            >
              {isDark ? <LightModeIcon sx={{ fontSize: 20 }} /> : <DarkModeIcon sx={{ fontSize: 20 }} />}
            </IconButton>
          </Tooltip>

          {/* CTA Button */}
          <Button
            variant="contained"
            onClick={() => navigate('/contact')}
            sx={{
              display: { xs: 'none', md: 'flex' },
              bgcolor: '#2563eb',
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 2.5,
              py: 1.125,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#1e40af',
                boxShadow: '0 4px 14px 0 rgba(37,99,235,0.3)',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            Nous Contacter
          </Button>

          {/* Mobile menu button */}
          {isHome && (
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={() => setShowMenu(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: surfaceIsDark ? '#ffffff' : (isDark ? '#cbd5e1' : '#374151'),
                '&:hover': { bgcolor: iconHoverBg },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={showMenu}
        onClose={() => setShowMenu(false)}
        PaperProps={{
          sx: {
            width: { xs: '82%', sm: 300 },
            maxWidth: 340,
            bgcolor: isDark ? '#0f172a' : '#ffffff',
            borderLeft: '1px solid',
            borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
            <Box
              component="img"
              src={isDark ? digiteaseLogoDark : digiteaseLogo}
              alt="DigitEase"
              sx={{ height: 36, width: 'auto', objectFit: 'contain' }}
            />
            <IconButton
              onClick={() => setShowMenu(false)}
              size="small"
              sx={{ color: isDark ? '#64748b' : '#94a3b8' }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Nav links */}
          <List sx={{ flex: 1, py: 0 }} disablePadding>
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      setShowMenu(false);
                      if (link.onClick) link.onClick();
                    }}
                    href={link.href !== '#' ? link.href : undefined}
                    sx={{
                      borderRadius: '6px',
                      py: 1.25,
                      px: 1.5,
                      mb: 0.5,
                      bgcolor: isActive
                        ? (isDark ? 'rgba(37,99,235,0.12)' : 'rgba(37,99,235,0.07)')
                        : 'transparent',
                      '&:hover': {
                        bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                        '& .MuiListItemText-primary': { color: '#2563eb' },
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 700 : 600,
                        fontSize: '0.9375rem',
                        color: isActive
                          ? (isDark ? '#60a5fa' : '#1d4ed8')
                          : (isDark ? '#93c5fd' : '#1e40af'),
                        sx: { transition: 'color 0.15s ease' },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Divider sx={{ my: 3, borderColor: isDark ? 'rgba(255,255,255,0.06)' : '#f1f5f9' }} />

          {/* Theme row */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
              {isDark
                ? <DarkModeIcon sx={{ fontSize: 18, color: '#64748b' }} />
                : <LightModeIcon sx={{ fontSize: 18, color: '#94a3b8' }} />
              }
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: isDark ? '#94a3b8' : '#64748b' }}>
                {isDark ? 'Mode sombre' : 'Mode clair'}
              </Typography>
            </Box>
            <IconButton
              onClick={toggleTheme}
              size="small"
              sx={{
                bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                color: isDark ? '#94a3b8' : '#64748b',
                '&:hover': { bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)' },
              }}
            >
              {isDark ? <LightModeIcon sx={{ fontSize: 18 }} /> : <DarkModeIcon sx={{ fontSize: 18 }} />}
            </IconButton>
          </Box>

          {/* CTA */}
          <Button
            variant="contained"
            fullWidth
            onClick={() => { setShowMenu(false); navigate('/contact'); }}
            sx={{
              bgcolor: '#2563eb',
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              py: 1.5,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#1e40af' },
            }}
          >
            Nous Contacter
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
