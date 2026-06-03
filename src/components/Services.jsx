import React from 'react';
import ServiceCard from './ServiceCard';
import services from '../datas/services';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTheme } from '../contexts/ThemeContext';

const Services = () => {
  const { isDark } = useTheme();

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        bgcolor: isDark ? '#1e293b' : '#f8fafc',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                mb: 3,
                px: 1.75,
                py: 0.75,
                borderRadius: '6px',
                bgcolor: isDark ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)',
                border: '1px solid',
                borderColor: isDark ? 'rgba(37,99,235,0.3)' : 'rgba(37,99,235,0.18)',
              }}
            >
              <Typography sx={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#2563eb',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                Nos Services
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.75rem' },
                letterSpacing: '-0.03em',
                color: isDark ? '#f1f5f9' : '#0f172a',
                mb: 2,
                lineHeight: 1.15,
              }}
            >
              Des solutions{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                sur mesure
              </Box>
            </Typography>

            {/* Accent line */}
            <Box sx={{
              width: 48,
              height: 3,
              background: 'linear-gradient(90deg, #2563eb, #0891b2)',
              borderRadius: '2px',
              mx: 'auto',
              mb: 3,
            }} />

            <Typography
              sx={{
                fontSize: { xs: '0.95rem', md: '1.0625rem' },
                color: isDark ? '#64748b' : '#64748b',
                maxWidth: '560px',
                mx: 'auto',
                lineHeight: 1.75,
              }}
            >
              Toutes les technologies de pointe pour vous offrir des services uniques et adaptés à vos besoins
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {services.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <ServiceCard
                    title={item.title}
                    id={item.id}
                    specifites={item.specifités}
                    icon={item.icon}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
