import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ChatIcon from '@mui/icons-material/Chat';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../contexts/ThemeContext';

const contactOptions = [
  {
    icon: <WhatsAppIcon sx={{ fontSize: 32 }} />,
    title: 'WhatsApp',
    description: 'Discutez avec nous directement sur WhatsApp pour une réponse rapide',
    detail: '+212 7 79 95 49 88',
    href: 'https://wa.me/+212779954988',
    color: '#25D366',
    gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 32 }} />,
    title: 'Email',
    description: 'Envoyez-nous un message détaillé par email',
    detail: 'contact@digitease.ma',
    href: 'mailto:contact@digitease.ma',
    color: '#1a56db',
    gradient: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 32 }} />,
    title: 'Téléphone',
    description: 'Appelez-nous directement pour discuter de votre projet',
    detail: '+212 7 79 95 49 88',
    href: 'tel:+212779954988',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  },
];

export default function Contact() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 } }}>
        {/* Hero Section */}
        <Box
          sx={{
            py: { xs: 6, sm: 8, md: 12 },
            background: isDark 
              ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Chip
                  icon={<ChatIcon sx={{ fontSize: 18, color: isDark ? '#60a5fa' : '#1a56db' }} />}
                  label="Contactez-nous"
                  sx={{
                    mb: 3,
                    bgcolor: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(26, 86, 219, 0.1)',
                    color: isDark ? '#60a5fa' : '#1a56db',
                    fontWeight: 600,
                    fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    py: 2.5,
                    px: 1,
                    borderRadius: 3,
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                    color: isDark ? '#f1f5f9' : '#111827',
                    mb: 3,
                    transition: 'color 0.3s ease',
                  }}
                >
                  Et si on parlait{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    projet ?
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                    color: isDark ? '#94a3b8' : '#6b7280',
                    maxWidth: '600px',
                    mx: 'auto',
                    lineHeight: 1.8,
                    px: { xs: 2, sm: 0 },
                    transition: 'color 0.3s ease',
                  }}
                >
                  Nous sommes disponibles pour discuter de vos projets de digitalisation. 
                  Choisissez le moyen qui vous convient le mieux.
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Contact Options */}
        <Box
          sx={{
            py: { xs: 6, sm: 8, md: 12 },
            bgcolor: isDark ? '#0f172a' : '#ffffff',
            transition: 'background-color 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
              {contactOptions.map((option, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    style={{ height: '100%' }}
                  >
                    <Card
                      component="a"
                      href={option.href}
                      target={option.title === 'WhatsApp' ? '_blank' : undefined}
                      rel={option.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
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
                        cursor: 'pointer',
                        textDecoration: 'none',
                        overflow: 'visible',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: `0 20px 40px -15px ${option.color}40`,
                          borderColor: `${option.color}40`,
                          '& .contact-icon': {
                            transform: 'scale(1.1)',
                            background: option.gradient,
                            color: '#fff',
                          }
                        }
                      }}
                    >
                      <CardContent sx={{ p: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flexGrow: 1 }}>
                        {/* Icon */}
                        <Box
                          className="contact-icon"
                          sx={{
                            width: { xs: 64, sm: 80 },
                            height: { xs: 64, sm: 80 },
                            borderRadius: 3,
                            bgcolor: isDark ? `${option.color}25` : `${option.color}15`,
                            color: option.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {option.icon}
                        </Box>

                        <Typography
                          sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            color: isDark ? '#f1f5f9' : '#111827',
                            mb: 2,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {option.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: isDark ? '#94a3b8' : '#6b7280',
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            lineHeight: 1.7,
                            mb: 3,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {option.description}
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1rem', sm: '1.1rem' },
                            color: option.color,
                            mt: 'auto',
                          }}
                        >
                          {option.detail}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: { xs: 6, sm: 8, md: 10 },
            background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
            position: 'relative',
            overflow: 'hidden',
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
              opacity: 0.1,
              background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: 'center', px: { xs: 2, sm: 0 } }}>
                <Typography
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.5rem' },
                    color: '#ffffff',
                    mb: 2,
                  }}
                >
                  Prêt à transformer votre entreprise ? <RocketLaunchIcon sx={{ ml: 1, verticalAlign: 'middle' }} />
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
                    color: 'rgba(255,255,255,0.9)',
                    maxWidth: '500px',
                    mx: 'auto',
                    mb: 4,
                    lineHeight: 1.8,
                  }}
                >
                  Disponible pour échanger et vous accompagner dans vos idées digitales
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate('/Mail')}
                  sx={{
                    bgcolor: '#ffffff',
                    color: '#1a56db',
                    borderRadius: 2,
                    px: 4,
                    py: 1.75,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 4px 14px 0 rgba(0,0,0,0.15)',
                    '&:hover': {
                      bgcolor: '#f8fafc',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px 0 rgba(0,0,0,0.2)',
                    }
                  }}
                >
                  Envoyer un Email
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
