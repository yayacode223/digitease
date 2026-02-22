import React from 'react';
import ServiceCard from './ServiceCard';
import services from '../datas/services';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { useTheme } from '../contexts/ThemeContext';

const Services = () => {
  const { isDark } = useTheme();
  
  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        bgcolor: isDark ? '#0f172a' : '#ffffff',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <Box className="text-center mb-12">
            <Chip
              label="Nos Services"
              sx={{
                mb: 2,
                bgcolor: 'rgba(26, 86, 219, 0.1)',
                color: '#1a56db',
                fontWeight: 600,
                fontSize: '0.875rem',
                py: 2,
                px: 1,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' },
                color: isDark ? '#f1f5f9' : '#111827',
                mb: 2,
                transition: 'color 0.3s ease',
              }}
            >
              Des solutions{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                sur mesure
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.95rem', md: '1.125rem' },
                color: isDark ? '#94a3b8' : '#6b7280',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
                px: { xs: 2, sm: 0 },
                transition: 'color 0.3s ease',
              }}
            >
              Toutes les technologies de pointe pour vous offrir des services uniques et adaptés à vos besoins
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={4} justifyContent="center">
            {services.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <ServiceCard
                    title={item.title}
                    description={item.description}
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
