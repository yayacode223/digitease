import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { FaQuoteLeft } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Testimonials = () => {
  const { isDark } = useTheme();
  
  return (
    <Box
      id="testimonials"
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        background: isDark 
          ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
          : 'linear-gradient(180deg, #111827 0%, #1f2937 100%)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 12 } }}>
            <Chip
              label="Témoignages"
              sx={{
                mb: 2,
                bgcolor: 'rgba(245, 158, 11, 0.2)',
                color: '#f59e0b',
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
                color: '#ffffff',
                mb: 2,
              }}
            >
              Ce que disent{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                nos clients
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.7,
                px: { xs: 2, sm: 0 },
              }}
            >
              Des histoires vraies de ceux qui nous ont fait confiance
            </Typography>
          </Box>

          {/* Testimonials Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {testimonialsData.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      bgcolor: isDark ? 'rgba(30,41,59,0.8)' : 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        bgcolor: isDark ? 'rgba(30,41,59,0.95)' : 'rgba(255,255,255,0.08)',
                        borderColor: 'rgba(245, 158, 11, 0.3)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      {/* Quote icon */}
                      <Box sx={{ mb: 3 }}>
                        <FaQuoteLeft size={28} color="#f59e0b" style={{ opacity: 0.6 }} />
                      </Box>

                      {/* Testimonial text */}
                      <Typography
                        sx={{
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          lineHeight: 1.8,
                          mb: 4,
                          flexGrow: 1,
                        }}
                      >
                        {item.text}
                      </Typography>

                      {/* Author info */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
                        <Avatar
                          src={item.image}
                          alt={item.name}
                          sx={{
                            width: { xs: 40, sm: 48 },
                            height: { xs: 40, sm: 48 },
                            border: '2px solid rgba(245, 158, 11, 0.5)',
                          }}
                        />
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              color: '#ffffff',
                              fontSize: { xs: '0.9rem', sm: '1rem' },
                              mb: 0.25,
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            sx={{
                              color: 'rgba(255,255,255,0.6)',
                              fontSize: { xs: '0.8rem', sm: '0.875rem' },
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Box>
                        {/* Star rating */}
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          {Array(item.rating).fill(0).map((_, idx) => (
                            <img src={assets.star_icon} width={14} key={idx} alt="star" />
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Testimonials;
