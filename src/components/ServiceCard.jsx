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

const ICON_MAP = {
  web: <WebIcon sx={{ fontSize: 26 }} />,
  ai: <SmartToyIcon sx={{ fontSize: 26 }} />,
  cloud: <CloudIcon sx={{ fontSize: 26 }} />,
  default: <CodeIcon sx={{ fontSize: 26 }} />,
};

const ServiceCard = ({ id, title, icon, specifites = [] }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const ServiceIcon = ICON_MAP[icon] ?? ICON_MAP.default;
  const highlights = specifites.slice(0, 3);

  return (
    <Card
      onClick={() => navigate('/services/' + id)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
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
          '& .card-cta': {
            gap: '10px',
            color: '#1d4ed8',
          },
          '& .card-icon-box': {
            bgcolor: '#2563eb',
            color: '#ffffff',
          },
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 3, sm: 3.5 },
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        {/* Icon */}
        <Box
          className="card-icon-box"
          sx={{
            width: 52,
            height: 52,
            borderRadius: '12px',
            bgcolor: isDark ? 'rgba(37,99,235,0.12)' : 'rgba(37,99,235,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2.5,
            color: '#2563eb',
            transition: 'background-color 0.22s ease, color 0.22s ease',
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
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.25, mb: 3 }}>
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

        {/* CTA */}
        <Box
          className="card-cta"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#2563eb',
            fontWeight: 600,
            fontSize: '0.875rem',
            transition: 'gap 0.2s ease, color 0.2s ease',
            userSelect: 'none',
          }}
        >
          Découvrir
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
