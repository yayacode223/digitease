import React from 'react';
import equipes from '../datas/equipes';
import EquipeCard from './EquipeCard';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { useTheme } from '../contexts/ThemeContext';

const Equipes = () => {
  const { isDark } = useTheme();
  
  return (
    <Box
      id="equipes"
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        background: isDark 
          ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        transition: 'background 0.3s ease',
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
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 12 } }}>
            <Chip
              label="Notre Équipe"
              sx={{
                mb: 2,
                bgcolor: isDark ? 'rgba(8, 145, 178, 0.2)' : 'rgba(8, 145, 178, 0.1)',
                color: '#0891b2',
                fontWeight: 600,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
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
              Une équipe{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #1a56db 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Engagée & passionné
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
                color: isDark ? '#94a3b8' : '#6b7280',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
                px: { xs: 2, sm: 0 },
                transition: 'color 0.3s ease',
              }}
            >
              Des professionnels dédiés à votre réussite digitale
            </Typography>
          </Box>

          {/* Team Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {equipes.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  style={{ height: '100%' }}
                >
                  <EquipeCard {...item} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Equipes;
