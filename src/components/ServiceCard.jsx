import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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

const getIconMap = () => ({
  web: <WebIcon sx={{ fontSize: 22 }} />,
  ai: <SmartToyIcon sx={{ fontSize: 22 }} />,
  cloud: <CloudIcon sx={{ fontSize: 22 }} />,
  default: <CodeIcon sx={{ fontSize: 22 }} />,
});

const ServiceCard = ({ id, title, description, specifites, icon }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const iconMap = getIconMap();
  const ServiceIcon = iconMap[icon] || iconMap.default;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
        bgcolor: isDark ? '#0f172a' : '#ffffff',
        boxShadow: isDark
          ? '0 1px 3px rgba(0,0,0,0.4)'
          : '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: isDark
            ? '0 16px 32px -8px rgba(0,0,0,0.5)'
            : '0 16px 32px -8px rgba(0,0,0,0.12)',
          borderColor: isDark ? 'rgba(37,99,235,0.4)' : 'rgba(37,99,235,0.25)',
        },
      }}
    >
      <CardContent sx={{ p: { xs: 3, sm: 3.5 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Icon */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '10px',
            bgcolor: isDark ? 'rgba(37,99,235,0.12)' : 'rgba(37,99,235,0.08)',
            border: '1px solid',
            borderColor: isDark ? 'rgba(37,99,235,0.25)' : 'rgba(37,99,235,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
            color: '#2563eb',
          }}
        >
          {ServiceIcon}
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: { xs: '1.05rem', sm: '1.125rem' },
            letterSpacing: '-0.01em',
            color: isDark ? '#f1f5f9' : '#0f172a',
            mb: 1.5,
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: isDark ? '#64748b' : '#64748b',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          {description}
        </Typography>

        {/* Features list */}
        <Box sx={{ mb: 4, flexGrow: 1 }}>
          {specifites?.slice(0, 5).map((item, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 1.25 }}
            >
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  bgcolor: isDark ? 'rgba(37,99,235,0.12)' : 'rgba(37,99,235,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  mt: 0.125,
                }}
              >
                <CheckIcon sx={{ fontSize: 11, color: '#2563eb' }} />
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

        {/* CTA */}
        <Button
          endIcon={<ArrowForwardIcon sx={{ fontSize: '15px !important' }} />}
          onClick={() => navigate('/services/' + id)}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.875rem',
            color: '#2563eb',
            p: 0,
            justifyContent: 'flex-start',
            '&:hover': {
              bgcolor: 'transparent',
              color: '#1e40af',
              '& .MuiButton-endIcon': { transform: 'translateX(3px)' },
            },
            '& .MuiButton-endIcon': { transition: 'transform 0.2s ease' },
          }}
        >
          En savoir plus
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
