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
        borderRadius: 3,
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
        bgcolor: isDark ? '#1e293b' : '#ffffff',
        boxShadow: isDark 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        overflow: 'visible',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: isDark 
            ? '0 20px 40px -15px rgba(8, 145, 178, 0.3)'
            : '0 20px 40px -15px rgba(8, 145, 178, 0.2)',
          '& .avatar-container': {
            transform: 'scale(1.05)',
          }
        }
      }}
    >
      <CardContent sx={{ p: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Avatar with gradient ring */}
        <Box
          className="avatar-container"
          sx={{
            position: 'relative',
            mb: 3,
            transition: 'transform 0.3s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: -4,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
              opacity: isDark ? 0.3 : 0.2,
            }
          }}
        >
          <Avatar
            src={image}
            alt={nom}
            sx={{
              width: { xs: 100, sm: 120 },
              height: { xs: 100, sm: 120 },
              border: isDark ? '4px solid #1e293b' : '4px solid white',
              boxShadow: '0 8px 20px -8px rgba(0,0,0,0.2)',
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
            color: isDark ? '#f1f5f9' : '#111827',
            mb: 0.5,
            transition: 'color 0.3s ease',
          }}
        >
          {nom}
        </Typography>

        <Typography
          sx={{
            background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 600,
            fontSize: { xs: '0.875rem', sm: '0.95rem' },
            mb: 2,
          }}
        >
          {poste}
        </Typography>

        <Typography
          sx={{
            color: isDark ? '#94a3b8' : '#6b7280',
            fontSize: { xs: '0.85rem', sm: '0.9rem' },
            lineHeight: 1.7,
            mb: 3,
            transition: 'color 0.3s ease',
          }}
        >
          {description}
        </Typography>

        {/* Social Links */}
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          {network?.facebook && (
            <IconButton
              component="a"
              href={network.facebook}
              target="_blank"
              rel="noopener"
              aria-label="facebook"
              sx={{
                bgcolor: isDark ? 'rgba(59, 89, 152, 0.2)' : 'rgba(59, 89, 152, 0.1)',
                '&:hover': { bgcolor: isDark ? 'rgba(59, 89, 152, 0.3)' : 'rgba(59, 89, 152, 0.2)' }
              }}
            >
              <FaFacebook size={18} color="#3B5998" />
            </IconButton>
          )}
          {network?.linkedin && (
            <IconButton
              component="a"
              href={network.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="linkedin"
              sx={{
                bgcolor: isDark ? 'rgba(0, 119, 181, 0.2)' : 'rgba(0, 119, 181, 0.1)',
                '&:hover': { bgcolor: isDark ? 'rgba(0, 119, 181, 0.3)' : 'rgba(0, 119, 181, 0.2)' }
              }}
            >
              <FaLinkedin size={18} color="#0077B5" />
            </IconButton>
          )}
          {network?.email && (
            <IconButton
              component="a"
              href={`mailto:${network.email}`}
              aria-label="email"
              sx={{
                bgcolor: isDark ? 'rgba(234, 67, 53, 0.2)' : 'rgba(234, 67, 53, 0.1)',
                '&:hover': { bgcolor: isDark ? 'rgba(234, 67, 53, 0.3)' : 'rgba(234, 67, 53, 0.2)' }
              }}
            >
              <MdEmail size={20} color="#EA4335" />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EquipeCard;