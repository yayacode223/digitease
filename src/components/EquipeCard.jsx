import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '../contexts/ThemeContext';

const EquipeCard = ({ nom, poste, image, description, network }) => {
  const { isDark } = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: '12px',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
        bgcolor: isDark ? '#1e293b' : '#ffffff',
        boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.4)' : '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: isDark
            ? '0 16px 32px -8px rgba(0,0,0,0.5)'
            : '0 16px 32px -8px rgba(0,0,0,0.12)',
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 3, sm: 3.5 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Avatar */}
        <Box sx={{ position: 'relative', mb: 3 }}>
          <Box
            sx={{
              position: 'absolute',
              inset: -3,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
              opacity: 0.25,
            }}
          />
          <Avatar
            src={image}
            alt={nom}
            sx={{
              width: { xs: 96, sm: 112 },
              height: { xs: 96, sm: 112 },
              border: isDark ? '3px solid #1e293b' : '3px solid #ffffff',
              boxShadow: '0 8px 20px -8px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          />
        </Box>

        {/* Name */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: { xs: '1rem', sm: '1.125rem' },
            letterSpacing: '-0.01em',
            color: isDark ? '#f1f5f9' : '#0f172a',
            mb: 0.5,
          }}
        >
          {nom}
        </Typography>

        {/* Role */}
        <Typography
          sx={{
            background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 600,
            fontSize: '0.875rem',
            mb: 2.5,
          }}
        >
          {poste}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: isDark ? '#64748b' : '#64748b',
            fontSize: '0.85rem',
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          {description}
        </Typography>

        {/* Social links */}
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          {network?.facebook && (
            <IconButton
              component="a"
              href={network.facebook}
              target="_blank"
              rel="noopener"
              aria-label="facebook"
              size="small"
              sx={{
                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#f8fafc',
                border: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
                color: '#1877f2',
                '&:hover': {
                  bgcolor: 'rgba(24,119,242,0.08)',
                  borderColor: 'rgba(24,119,242,0.3)',
                },
              }}
            >
              <FaFacebook size={15} />
            </IconButton>
          )}
          {network?.linkedin && (
            <IconButton
              component="a"
              href={network.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="linkedin"
              size="small"
              sx={{
                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#f8fafc',
                border: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
                color: '#0077b5',
                '&:hover': {
                  bgcolor: 'rgba(0,119,181,0.08)',
                  borderColor: 'rgba(0,119,181,0.3)',
                },
              }}
            >
              <FaLinkedin size={15} />
            </IconButton>
          )}
          {network?.email && (
            <IconButton
              component="a"
              href={`mailto:${network.email}`}
              aria-label="email"
              size="small"
              sx={{
                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#f8fafc',
                border: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
                color: '#ea4335',
                '&:hover': {
                  bgcolor: 'rgba(234,67,53,0.08)',
                  borderColor: 'rgba(234,67,53,0.3)',
                },
              }}
            >
              <MdEmail size={17} />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EquipeCard;
