import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WebIcon from '@mui/icons-material/Web';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '../contexts/ThemeContext';

// Map icon names to Material UI icons
const getIconMap = (isDark) => ({
  web: <WebIcon sx={{ fontSize: 28, color: isDark ? '#60a5fa' : '#1a56db' }} />,
  ai: <SmartToyIcon sx={{ fontSize: 28, color: isDark ? '#60a5fa' : '#1a56db' }} />,
  cloud: <CloudIcon sx={{ fontSize: 28, color: isDark ? '#60a5fa' : '#1a56db' }} />,
  default: <CodeIcon sx={{ fontSize: 28, color: isDark ? '#60a5fa' : '#1a56db' }} />,
});

const ServiceCard = ({ id, title, description, specifites, icon }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const iconMap = getIconMap(isDark);
  const ServiceIcon = iconMap[icon] || iconMap.default;
  
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
        bgcolor: isDark ? '#1e293b' : '#ffffff',
        boxShadow: isDark 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        overflow: 'visible',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: isDark 
            ? '0 20px 40px -15px rgba(59, 130, 246, 0.3)'
            : '0 20px 40px -15px rgba(26, 86, 219, 0.2)',
          borderColor: isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(26, 86, 219, 0.3)',
        }
      }}
    >
      <CardContent sx={{ p: { xs: 3, sm: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Service Icon */}
        <Box
          sx={{
            width: { xs: 48, sm: 56 },
            height: { xs: 48, sm: 56 },
            borderRadius: 2,
            background: isDark 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)'
              : 'linear-gradient(135deg, rgba(26, 86, 219, 0.1) 0%, rgba(8, 145, 178, 0.1) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          {ServiceIcon}
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
            color: isDark ? '#f1f5f9' : '#111827',
            mb: 2,
            transition: 'color 0.3s ease',
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: isDark ? '#94a3b8' : '#6b7280',
            fontSize: { xs: '0.875rem', sm: '0.95rem' },
            lineHeight: 1.7,
            mb: 3,
            transition: 'color 0.3s ease',
          }}
        >
          {description}
        </Typography>

        <Box sx={{ mb: 3, flexGrow: 1 }}>
          {specifites?.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <CheckCircleIcon 
                sx={{ 
                  fontSize: { xs: 16, sm: 18 }, 
                  color: isDark ? '#60a5fa' : '#1a56db',
                  flexShrink: 0,
                  mt: 0.25,
                }} 
              />
              <Typography sx={{ 
                color: isDark ? '#cbd5e1' : '#374151', 
                fontSize: { xs: '0.8rem', sm: '0.875rem' }, 
                lineHeight: 1.5 
              }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          fullWidth
          variant="outlined"
          endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
          onClick={() => navigate('/services/' + id)}
          sx={{
            borderRadius: 2,
            py: { xs: 1.25, sm: 1.5 },
            textTransform: 'none',
            fontWeight: 600,
            fontSize: { xs: '0.875rem', sm: '0.95rem' },
            borderColor: isDark ? '#60a5fa' : '#1a56db',
            color: isDark ? '#60a5fa' : '#1a56db',
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
              bgcolor: isDark ? '#3b82f6' : '#1a56db',
              borderColor: isDark ? '#3b82f6' : '#1a56db',
              color: '#fff',
            }
          }}
        >
          En savoir plus
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
