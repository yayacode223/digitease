import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Navbar, Footer } from "../components";
import services from "../datas/services";
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VerifiedIcon from '@mui/icons-material/Verified';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '../contexts/ThemeContext';

const processSteps = [
  {
    icon: <AnalyticsIcon sx={{ fontSize: 24 }} />,
    title: '1. Analyse',
    description: 'Discussion, compréhension des besoins et définition du cahier des charges.',
    image: '/services/processus/analyse.webp',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 24 }} />,
    title: '2. Développement',
    description: 'Conception et réalisation de votre solution web ou mobile.',
    image: '/services/processus/developpement.webp',
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 24 }} />,
    title: '3. Livraison & Suivi',
    description: 'Mise en ligne, accompagnement et évolutions futures.',
    image: '/services/processus/livraison.webp',
  },
];

export default function Service() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  
  const service = services.find(item => item.id == id);
  
  if (!service) {
    return (
      <Box>
        <Navbar isHome={false} />
        <Container maxWidth="lg" sx={{ py: 20, textAlign: 'center' }}>
          <Typography variant="h4" color="error">Service non trouvé</Typography>
          <Button onClick={() => navigate('/')} sx={{ mt: 4 }}>Retour à l'accueil</Button>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: isDark ? '#0f172a' : '#ffffff', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      <Navbar isHome={false} />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          minHeight: { md: '62vh' },
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          bgcolor: '#0b1120',
        }}
      >
        {/* Image de fond — pleine largeur, visible */}
        <Box
          component="img"
          src={service.image}
          alt={service.title}
          loading="eager"
          fetchpriority="high"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: { xs: '70% center', md: 'center' },
            zIndex: 0,
          }}
        />

        {/* Voile de lisibilité — sombre à gauche (texte), photo visible à droite */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: {
              xs: 'linear-gradient(180deg, rgba(7,11,22,0.6) 0%, rgba(7,11,22,0.8) 55%, rgba(7,11,22,0.92) 100%)',
              md: 'linear-gradient(90deg, rgba(7,11,22,0.93) 0%, rgba(7,11,22,0.78) 35%, rgba(7,11,22,0.42) 65%, rgba(7,11,22,0.12) 88%, rgba(7,11,22,0) 100%)',
            },
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <Breadcrumbs
            separator={<NavigateNextIcon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.4)' }} />}
            sx={{ mb: { xs: 4, md: 6 } }}
          >
            <Box
              component="button"
              onClick={() => navigate('/')}
              sx={{
                display: 'flex', alignItems: 'center', gap: 0.5,
                border: 'none', background: 'none', cursor: 'pointer', p: 0,
                color: 'rgba(255,255,255,0.72)',
                fontSize: '0.875rem', fontWeight: 500,
                '&:hover': { color: '#ffffff' },
                transition: 'color 0.2s ease',
              }}
            >
              <HomeIcon sx={{ fontSize: 15 }} />
              Accueil
            </Box>
            <Box
              component="button"
              onClick={() => { navigate('/'); setTimeout(() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
              sx={{
                border: 'none', background: 'none', cursor: 'pointer', p: 0,
                color: 'rgba(255,255,255,0.72)',
                fontSize: '0.875rem', fontWeight: 500,
                '&:hover': { color: '#ffffff' },
                transition: 'color 0.2s ease',
              }}
            >
              Services
            </Box>
            <Typography sx={{ color: '#ffffff', fontSize: '0.875rem', fontWeight: 600 }}>
              {service.title}
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  label="Nos Services"
                  sx={{
                    mb: 3,
                    bgcolor: 'rgba(37, 99, 235, 0.25)',
                    border: '1px solid rgba(96,165,250,0.45)',
                    backdropFilter: 'blur(8px)',
                    color: '#bfdbfe',
                    fontWeight: 600,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    color: '#ffffff',
                    textShadow: '0 2px 24px rgba(0,0,0,0.4)',
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    color: 'rgba(241,245,249,0.9)',
                    textShadow: '0 1px 12px rgba(0,0,0,0.45)',
                    mb: 4,
                    lineHeight: 1.7,
                    maxWidth: 540,
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate('/contact')}
                  sx={{
                    background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    boxShadow: '0 4px 18px 0 rgba(26, 86, 219, 0.5)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 22px 0 rgba(26, 86, 219, 0.6)',
                    }
                  }}
                >
                  Nous contacter
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Spécificités Section */}
      {service.specifites && service.specifites.length > 0 && (
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            bgcolor: isDark ? '#1e293b' : '#ffffff',
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                    color: isDark ? '#f1f5f9' : '#111827',
                    mb: 2,
                  }}
                >
                  Ce que nous{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    proposons
                  </Box>
                </Typography>
              </Box>

              <Card
                sx={{
                  borderRadius: 3,
                  bgcolor: isDark ? '#0f172a' : '#f8fafc',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                  boxShadow: 'none',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <List>
                    {service.specifites.map((item, index) => (
                      <ListItem 
                        key={index} 
                        sx={{ 
                          py: 1.5, 
                          px: 0,
                          borderBottom: index < service.specifites.length - 1 
                            ? `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` 
                            : 'none',
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 44 }}>
                          <CheckCircleIcon sx={{ color: '#10b981', fontSize: 24 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            sx: {
                              color: isDark ? '#e2e8f0' : '#374151',
                              fontSize: { xs: '0.95rem', sm: '1.05rem' },
                              fontWeight: 500,
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Container>
        </Box>
      )}

      {/* Engagements Section */}
      {service.engagements && service.engagements.length > 0 && (
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            bgcolor: isDark ? '#0f172a' : '#f8fafc',
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Chip
                  icon={<VerifiedIcon sx={{ fontSize: 16 }} />}
                  label="Nos Engagements"
                  sx={{
                    mb: 2,
                    bgcolor: isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                    color: isDark ? '#f1f5f9' : '#111827',
                  }}
                >
                  Pourquoi nous choisir ?
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {service.engagements.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      style={{ height: '100%' }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 3,
                          overflow: 'hidden',
                          bgcolor: isDark ? '#1e293b' : '#ffffff',
                          border: '1px solid',
                          borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: isDark
                              ? '0 20px 40px -15px rgba(59, 130, 246, 0.3)'
                              : '0 20px 40px -15px rgba(26, 86, 219, 0.2)',
                            borderColor: isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(26, 86, 219, 0.3)',
                            '& .engage-photo': { transform: 'scale(1.06)' },
                          }
                        }}
                      >
                        {/* Header — image pleine largeur avec numéro flottant */}
                        {item.image && (
                          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                            <Box
                              component="img"
                              className="engage-photo"
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                              sx={{
                                width: '100%',
                                height: { xs: 190, sm: 200 },
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.4s ease',
                              }}
                            />
                            <Box
                              sx={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 45%)',
                              }}
                            />
                            <Avatar
                              sx={{
                                position: 'absolute',
                                top: 16,
                                left: 16,
                                width: 44,
                                height: 44,
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                                boxShadow: '0 8px 20px -6px rgba(26,86,219,0.5)',
                              }}
                            >
                              {index + 1}
                            </Avatar>
                          </Box>
                        )}
                        <CardContent sx={{ p: { xs: 3, sm: 4 }, flexGrow: 1 }}>
                          {!item.image && (
                            <Avatar
                              sx={{
                                width: 48,
                                height: 48,
                                mb: 2,
                                background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                              }}
                            >
                              {index + 1}
                            </Avatar>
                          )}
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: 'Poppins, sans-serif',
                              fontWeight: 700,
                              fontSize: { xs: '1.1rem', sm: '1.25rem' },
                              color: isDark ? '#f1f5f9' : '#111827',
                              mb: 1.5,
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: isDark ? '#94a3b8' : '#6b7280',
                              fontSize: { xs: '0.875rem', sm: '0.95rem' },
                              lineHeight: 1.7,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>
      )}

      {/* Process Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: isDark ? '#1e293b' : '#ffffff',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                  color: isDark ? '#f1f5f9' : '#111827',
                  mb: 2,
                }}
              >
                Notre{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  processus
                </Box>
              </Typography>
              <Typography
                sx={{
                  color: isDark ? '#94a3b8' : '#6b7280',
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Une méthodologie éprouvée pour garantir le succès de votre projet
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {processSteps.map((step, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        overflow: 'hidden',
                        bgcolor: isDark ? '#0f172a' : '#f8fafc',
                        border: '1px solid',
                        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: isDark
                            ? '0 20px 40px -15px rgba(59, 130, 246, 0.3)'
                            : '0 20px 40px -15px rgba(26, 86, 219, 0.2)',
                          borderColor: isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(26, 86, 219, 0.3)',
                          '& .process-photo': { transform: 'scale(1.06)' },
                        },
                      }}
                    >
                      {/* Header — image pleine largeur avec icône flottante */}
                      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                        <Box
                          component="img"
                          className="process-photo"
                          src={step.image}
                          alt={step.title}
                          loading="lazy"
                          sx={{
                            width: '100%',
                            height: { xs: 180, sm: 190 },
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.4s ease',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 45%)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            width: 48,
                            height: 48,
                            borderRadius: '12px',
                            bgcolor: isDark ? '#0f172a' : '#ffffff',
                            border: '1px solid',
                            borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isDark ? '#60a5fa' : '#1a56db',
                            boxShadow: '0 8px 20px -6px rgba(26,86,219,0.4)',
                          }}
                        >
                          {step.icon}
                        </Box>
                      </Box>
                      <CardContent sx={{ p: { xs: 3, sm: 4 }, flexGrow: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            color: isDark ? '#f1f5f9' : '#111827',
                            mb: 1.5,
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: isDark ? '#94a3b8' : '#6b7280',
                            fontSize: '0.95rem',
                            lineHeight: 1.7,
                          }}
                        >
                          {step.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Autres services */}
      {services.filter(s => s.id !== service.id).length > 0 && (
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            bgcolor: isDark ? '#1e293b' : '#f8fafc',
            transition: 'background-color 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: isDark ? '#f1f5f9' : '#0f172a',
                    mb: 1,
                    transition: 'color 0.3s ease',
                  }}
                >
                  Nos autres{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    services
                  </Box>
                </Typography>
                <Typography sx={{ color: isDark ? '#64748b' : '#94a3b8', fontSize: '0.95rem' }}>
                  Découvrez nos autres expertises
                </Typography>
              </Box>

              <Grid container spacing={3} justifyContent="center">
                {services
                  .filter(s => s.id !== service.id)
                  .map((other, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={other.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        style={{ height: '100%' }}
                      >
                        <Card
                          sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 3,
                            overflow: 'hidden',
                            bgcolor: isDark ? '#0f172a' : '#ffffff',
                            border: '1px solid',
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)',
                            boxShadow: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-6px)',
                              borderColor: '#2563eb',
                              boxShadow: isDark
                                ? '0 16px 32px -8px rgba(37,99,235,0.25)'
                                : '0 16px 32px -8px rgba(37,99,235,0.15)',
                              '& .other-photo': { transform: 'scale(1.06)' },
                            },
                          }}
                          onClick={() => navigate(`/services/${other.id}`)}
                        >
                          {/* Header — image pleine largeur */}
                          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                            <Box
                              component="img"
                              className="other-photo"
                              src={other.image}
                              alt={other.title}
                              loading="lazy"
                              sx={{
                                width: '100%',
                                height: { xs: 170, sm: 180 },
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.4s ease',
                              }}
                            />
                          </Box>
                          <CardContent sx={{ p: { xs: 3, sm: 4 }, flexGrow: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1.125rem' },
                                color: isDark ? '#f1f5f9' : '#0f172a',
                                mb: 1.5,
                                transition: 'color 0.3s ease',
                              }}
                            >
                              {other.title}
                            </Typography>
                            <Typography
                              sx={{
                                color: isDark ? '#94a3b8' : '#6b7280',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                mb: 2.5,
                              }}
                            >
                              {other.description.length > 120
                                ? `${other.description.slice(0, 120)}…`
                                : other.description}
                            </Typography>
                            <Box
                              sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.5,
                                color: '#2563eb',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                              }}
                            >
                              En savoir plus <ArrowForwardIcon sx={{ fontSize: 16 }} />
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
      )}

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                color: '#ffffff',
                mb: 2,
              }}
            >
              Prêt à travailler ensemble ?
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: { xs: '1rem', sm: '1.125rem' },
                mb: 4,
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              Contactez-nous dès aujourd'hui pour concrétiser vos projets digitaux.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/contact')}
              sx={{
                bgcolor: '#ffffff',
                color: '#1a56db',
                borderRadius: 2,
                px: 4,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: { xs: '0.95rem', sm: '1rem' },
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Nous contacter
            </Button>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

