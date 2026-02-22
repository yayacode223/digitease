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
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '../contexts/ThemeContext';
import { digiteaseLogo, digiteaseLogoDark } from '../assets';

const Navbar = ({ isHome }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#', onClick: () => navigate('/') },
    { label: 'À propos', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Équipe', href: '#equipes' },
    { label: 'Témoignages', href: '#testimonials' },
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0}
      sx={{ 
        zIndex: 1100, 
        bgcolor: scrolled 
          ? (isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.98)') 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled 
          ? (isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)') 
          : 'none',
      }}
    >
      <Toolbar 
        sx={{ 
          maxWidth: '1280px', 
          mx: 'auto', 
          width: '100%', 
          px: { xs: 2, sm: 3, md: 4 },
          minHeight: { xs: 64, md: 80 },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Box 
          onClick={() => navigate('/')}
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <Box 
            component="img"
            src={isDark ? digiteaseLogoDark : digiteaseLogo}
            alt="DigitEase"
            sx={{ 
              height: { xs: 36, sm: 44, md: 48 },
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Desktop Navigation - Centered */}
        {isHome && (
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0.5,
              flex: 1,
              justifyContent: 'center',
              ml: 4,
              mr: 4,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.label}
                onClick={link.onClick ? link.onClick : undefined}
                href={link.href !== '#' ? link.href : undefined}
                sx={{ 
                  textTransform: 'none', 
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  color: isDark 
                    ? (scrolled ? '#e2e8f0' : '#f1f5f9') 
                    : (scrolled ? '#374151' : '#1f2937'),
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    bgcolor: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(26, 86, 219, 0.08)',
                    color: isDark ? '#60a5fa' : '#1a56db',
                  }
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Right side actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 }, flexShrink: 0 }}>
          {/* Theme Toggle Button */}
          <Tooltip title={isDark ? 'Mode clair' : 'Mode sombre'}>
            <IconButton
              onClick={toggleTheme}
              sx={{ 
                color: isDark ? '#fbbf24' : '#6b7280',
                bgcolor: isDark ? 'rgba(251, 191, 36, 0.1)' : 'rgba(107, 114, 128, 0.1)',
                '&:hover': {
                  bgcolor: isDark ? 'rgba(251, 191, 36, 0.2)' : 'rgba(107, 114, 128, 0.2)',
                }
              }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

          {/* CTA Button */}
          <Button
            variant="contained"
            onClick={() => navigate('/contact')}
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              background: 'linear-gradient(135deg, #1a56db 0%, #1e40af 100%)',
              borderRadius: 2, 
              boxShadow: '0 4px 14px 0 rgba(26, 86, 219, 0.39)',
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              py: 1.25,
              '&:hover': {
                background: 'linear-gradient(135deg, #1e40af 0%, #1a56db 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px 0 rgba(26, 86, 219, 0.5)',
              }
            }}
          >
            Nous Contacter
          </Button>

          {/* Mobile Menu Button */}
          {isHome && (
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={() => setShowMenu(true)}
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                color: isDark ? '#e2e8f0' : '#1f2937' 
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
            width: { xs: '85%', sm: 320 },
            maxWidth: 360,
            borderRadius: '16px 0 0 16px',
            bgcolor: isDark ? '#1e293b' : '#ffffff',
          }
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box 
              component="img"
              src={isDark ? digiteaseLogoDark : digiteaseLogo}
              alt="DigitEase"
              sx={{ 
                height: 40,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <IconButton 
              onClick={() => setShowMenu(false)} 
              aria-label="close menu"
              sx={{ color: isDark ? '#94a3b8' : '#6b7280' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          {/* Navigation Links */}
          <List sx={{ flex: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => {
                    setShowMenu(false);
                    if (link.onClick) link.onClick();
                  }}
                  href={link.href !== '#' ? link.href : undefined}
                  sx={{ 
                    borderRadius: 2,
                    py: 1.5,
                    '&:hover': { 
                      bgcolor: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(26, 86, 219, 0.08)' 
                    }
                  }}
                >
                  <ListItemText 
                    primary={link.label} 
                    primaryTypographyProps={{ 
                      fontWeight: 500,
                      color: isDark ? '#e2e8f0' : '#374151',
                      fontSize: '1rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Theme Toggle in Mobile */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              p: 2,
              mb: 2,
              borderRadius: 2,
              bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {isDark ? <DarkModeIcon sx={{ color: '#60a5fa' }} /> : <LightModeIcon sx={{ color: '#f59e0b' }} />}
              <Box sx={{ color: isDark ? '#e2e8f0' : '#374151', fontWeight: 500 }}>
                {isDark ? 'Mode sombre' : 'Mode clair'}
              </Box>
            </Box>
            <IconButton
              onClick={toggleTheme}
              size="small"
              sx={{ 
                bgcolor: isDark ? 'rgba(251, 191, 36, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                color: isDark ? '#fbbf24' : '#3b82f6',
                '&:hover': {
                  bgcolor: isDark ? 'rgba(251, 191, 36, 0.3)' : 'rgba(59, 130, 246, 0.3)',
                }
              }}
            >
              {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              setShowMenu(false);
              navigate('/contact');
            }}
            sx={{ 
              background: 'linear-gradient(135deg, #1a56db 0%, #1e40af 100%)',
              borderRadius: 2, 
              textTransform: 'none',
              fontWeight: 600,
              py: 1.5,
              boxShadow: '0 4px 14px 0 rgba(26, 86, 219, 0.39)',
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
