import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WebIcon from '@mui/icons-material/Web';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import CheckIcon from '@mui/icons-material/Check';
import { useTheme } from '../contexts/ThemeContext';

const ICON_MAP = {
  web: <WebIcon sx={{ fontSize: 24 }} />,
  ai: <SmartToyIcon sx={{ fontSize: 24 }} />,
  cloud: <CloudIcon sx={{ fontSize: 24 }} />,
  default: <CodeIcon sx={{ fontSize: 24 }} />,
};

const ServiceCard = ({ id, title, icon, image, specifites = [] }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const ServiceIcon = ICON_MAP[icon] ?? ICON_MAP.default;
  const highlights = specifites.slice(0, 3);

  const goToService = () => navigate('/services/' + id);

  return (
    <Card
      onClick={goToService}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
        bgcolor: isDark ? '#0f172a' : '#ffffff',
        boxShadow: isDark
          ? '0 1px 3px rgba(0,0,0,0.4)'
          : '0 1px 3px rgba(0,0,0,0.06)',
        cursor: 'pointer',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: isDark
            ? '0 20px 40px -12px rgba(37,99,235,0.3)'
            : '0 20px 40px -12px rgba(37,99,235,0.18)',
          borderColor: '#2563eb',
          '& .card-media-img': {
            transform: 'scale(1.06)',
          },
          '& .card-icon-box': {
            bgcolor: '#2563eb',
            color: '#ffffff',
          },
        },
      }}
    >
      {/* Header — image pleine largeur */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          component="img"
          className="card-media-img"
          src={image}
          alt={title}
          loading="lazy"
          sx={{
            width: '100%',
            height: { xs: 180, sm: 190 },
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s ease',
          }}
        />
        {/* Dégradé bas pour la profondeur / lisibilité de l'icône */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 45%)',
          }}
        />
        {/* Icône flottante sur le bord bas de l'image */}
        <Box
          className="card-icon-box"
          sx={{
            position: 'absolute',
            bottom: -22,
            left: 24,
            width: 52,
            height: 52,
            borderRadius: '12px',
            bgcolor: isDark ? '#0f172a' : '#ffffff',
            border: '1px solid',
            borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2563eb',
            boxShadow: '0 8px 20px -6px rgba(37,99,235,0.35)',
            transition: 'background-color 0.22s ease, color 0.22s ease',
          }}
        >
          {ServiceIcon}
        </Box>
      </Box>

      {/* Body — informations */}
      <CardContent
        sx={{
          px: { xs: 3, sm: 3.5 },
          pt: 4.25,
          pb: 1,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: { xs: '1.05rem', sm: '1.1rem' },
            letterSpacing: '-0.01em',
            color: isDark ? '#f1f5f9' : '#0f172a',
            mb: 2.5,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        {/* 3 key highlights */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
          {highlights.map((item, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: isDark ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  mt: '1px',
                }}
              >
                <CheckIcon sx={{ fontSize: 12, color: '#2563eb' }} />
              </Box>
              <Typography
                sx={{
                  color: isDark ? '#94a3b8' : '#475569',
                  fontSize: '0.8125rem',
                  lineHeight: 1.55,
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>

      {/* Footer — bouton */}
      <CardActions sx={{ px: { xs: 3, sm: 3.5 }, pb: 3, pt: 1.5 }}>
        <Button
          fullWidth
          variant="outlined"
          endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
          onClick={(e) => {
            e.stopPropagation();
            goToService();
          }}
          sx={{
            borderRadius: '8px',
            py: 1,
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'none',
            borderColor: isDark ? 'rgba(255,255,255,0.14)' : '#e2e8f0',
            borderWidth: '1.5px',
            color: '#2563eb',
            '&:hover': {
              borderColor: '#2563eb',
              borderWidth: '1.5px',
              bgcolor: 'rgba(37,99,235,0.06)',
              '& .MuiButton-endIcon': { transform: 'translateX(3px)' },
            },
            '& .MuiButton-endIcon': { transition: 'transform 0.2s ease' },
          }}
        >
          Découvrir
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
