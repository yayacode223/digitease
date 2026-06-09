import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '../contexts/ThemeContext';

const EquipeCard = ({ nom, poste, image, description, network }) => {
  const { isDark } = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
        bgcolor: isDark ? '#1e293b' : '#ffffff',
        boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.4)' : '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: isDark
            ? '0 18px 36px -10px rgba(8,145,178,0.3)'
            : '0 18px 36px -10px rgba(8,145,178,0.18)',
          borderColor: '#0891b2',
          '& .equipe-photo': { transform: 'scale(1.05)' },
        },
      }}
    >
      {/* Header — photo pleine largeur */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          component="img"
          className="equipe-photo"
          src={image}
          alt={nom}
          loading="lazy"
          sx={{
            width: '100%',
            height: { xs: 230, sm: 210, md: 220 },
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            transition: 'transform 0.4s ease',
          }}
        />
        {/* Dégradé bas pour la profondeur */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 42%)',
          }}
        />
      </Box>

      {/* Body — infos */}
      <CardContent
        sx={{
          px: { xs: 3, sm: 3.5 },
          pt: 2.5,
          pb: 1,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Name */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: { xs: '1.05rem', sm: '1.125rem' },
            letterSpacing: '-0.01em',
            color: isDark ? '#f1f5f9' : '#0f172a',
            mb: 0.5,
            lineHeight: 1.3,
          }}
        >
          {nom}
        </Typography>

        {/* Role */}
        <Typography
          sx={{
            background: 'linear-gradient(135deg, #0891b2 0%, #2563eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 600,
            fontSize: '0.875rem',
            mb: 1.75,
            lineHeight: 1.4,
          }}
        >
          {poste}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: isDark ? '#94a3b8' : '#475569',
            fontSize: '0.85rem',
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Footer — liens sociaux */}
      <CardActions sx={{ px: { xs: 3, sm: 3.5 }, pb: 3, pt: 1, gap: 1 }}>
        {network?.linkedin && (
          <IconButton
            component="a"
            href={network.linkedin}
            target="_blank"
            rel="noopener"
            aria-label={`LinkedIn de ${nom}`}
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
            aria-label={`Envoyer un email à ${nom}`}
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
      </CardActions>
    </Card>
  );
};

export default EquipeCard;
