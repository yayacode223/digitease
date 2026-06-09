import React from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from './index';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LinkIcon from '@mui/icons-material/Link';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ListContent = ({ items, isDark }) => (
  <List dense disablePadding>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ py: 0.4 }}>
        <ListItemIcon sx={{ minWidth: 26 }}>
          <ArrowRightIcon sx={{ color: '#2563eb', fontSize: 18 }} />
        </ListItemIcon>
        <ListItemText
          primary={item}
          primaryTypographyProps={{
            sx: { color: isDark ? '#94a3b8' : '#475569', fontSize: '0.875rem', lineHeight: 1.6 },
          }}
        />
      </ListItem>
    ))}
  </List>
);

const StepsContent = ({ items, isDark }) => (
  <List dense disablePadding>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ py: 0.6, alignItems: 'flex-start' }}>
        <ListItemIcon sx={{ minWidth: 36, mt: 0.25 }}>
          <Avatar sx={{
            width: 22, height: 22,
            fontSize: '0.7rem', fontWeight: 700,
            bgcolor: '#2563eb', color: 'white',
          }}>
            {idx + 1}
          </Avatar>
        </ListItemIcon>
        <ListItemText
          primary={item}
          primaryTypographyProps={{
            sx: { color: isDark ? '#94a3b8' : '#475569', fontSize: '0.875rem', lineHeight: 1.6 },
          }}
        />
      </ListItem>
    ))}
  </List>
);

const OptionsContent = ({ items, isDark }) => (
  <Stack spacing={1.25}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
      <ScheduleIcon sx={{ color: '#2563eb', fontSize: 18 }} />
      <Typography sx={{ color: isDark ? '#e2e8f0' : '#0f172a', fontWeight: 600, fontSize: '0.875rem' }}>
        Options flexibles :
      </Typography>
    </Box>
    {items.map((item, idx) => (
      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2, pl: 3 }}>
        <Chip
          label={item.label}
          size="small"
          sx={{
            bgcolor: isDark ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)',
            color: '#2563eb',
            fontWeight: 600,
            fontSize: '0.75rem',
            minWidth: 80,
          }}
        />
        <Typography sx={{ color: isDark ? '#94a3b8' : '#475569', fontSize: '0.875rem' }}>
          {item.value}
        </Typography>
      </Box>
    ))}
  </Stack>
);

const CheckContent = ({ items, isDark }) => (
  <List dense disablePadding>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ py: 0.4 }}>
        <ListItemIcon sx={{ minWidth: 26 }}>
          <CheckCircleIcon sx={{ color: '#059669', fontSize: 16 }} />
        </ListItemIcon>
        <ListItemText
          primary={item}
          primaryTypographyProps={{
            sx: { color: isDark ? '#94a3b8' : '#475569', fontSize: '0.875rem', lineHeight: 1.6 },
          }}
        />
      </ListItem>
    ))}
  </List>
);

const PricingContent = ({ data, isDark }) => (
  <Stack spacing={1.5}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <AttachMoneyIcon sx={{ color: '#d97706', fontSize: 20 }} />
      <Typography sx={{ color: isDark ? '#e2e8f0' : '#0f172a', fontWeight: 600, fontSize: '0.875rem' }}>
        {data.intro}
      </Typography>
    </Box>
    <List dense disablePadding sx={{ pl: 1 }}>
      {data.items.map((item, idx) => (
        <ListItem key={idx} disableGutters sx={{ py: 0.4 }}>
          <ListItemIcon sx={{ minWidth: 26 }}>
            <ArrowRightIcon sx={{ color: '#2563eb', fontSize: 18 }} />
          </ListItemIcon>
          <ListItemText
            primary={item}
            primaryTypographyProps={{
              sx: { color: isDark ? '#94a3b8' : '#475569', fontSize: '0.875rem' },
            }}
          />
        </ListItem>
      ))}
    </List>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 1 }}>
      <LinkIcon sx={{ color: '#0891b2', fontSize: 16 }} />
      <Typography sx={{ color: '#0891b2', fontSize: '0.85rem', fontWeight: 500 }}>
        {data.cta}
      </Typography>
    </Box>
  </Stack>
);

const TextContent = ({ text, isDark }) => (
  <Typography sx={{ color: isDark ? '#94a3b8' : '#475569', fontSize: '0.875rem', lineHeight: 1.75 }}>
    {Array.isArray(text) ? text.join(' ') : text}
  </Typography>
);

const renderContent = (item, isDark) => {
  switch (item.type) {
    case 'list':    return <ListContent items={item.reponse} isDark={isDark} />;
    case 'steps':   return <StepsContent items={item.reponse} isDark={isDark} />;
    case 'options': return <OptionsContent items={item.reponse} isDark={isDark} />;
    case 'check':   return <CheckContent items={item.reponse} isDark={isDark} />;
    case 'pricing': return <PricingContent data={item.reponse} isDark={isDark} />;
    default:        return <TextContent text={item.reponse} isDark={isDark} />;
  }
};

const FAQ = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      id="faq"
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        bgcolor: isDark ? '#1e293b' : '#f8fafc',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                mb: 3,
                px: 1.5,
                py: 0.625,
                borderRadius: '6px',
                bgcolor: isDark ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)',
                border: '1px solid',
                borderColor: isDark ? 'rgba(37,99,235,0.3)' : 'rgba(37,99,235,0.15)',
              }}
            >
              <HelpOutlineIcon sx={{ fontSize: 14, color: '#2563eb' }} />
              <Typography sx={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#2563eb',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                FAQ
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.5rem' },
                letterSpacing: '-0.03em',
                color: isDark ? '#f1f5f9' : '#0f172a',
                mb: 2,
                lineHeight: 1.15,
              }}
            >
              Questions{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                fréquentes
              </Box>
            </Typography>

            <Box sx={{
              width: 40, height: 3,
              background: 'linear-gradient(90deg, #2563eb, #0891b2)',
              borderRadius: '2px',
              mx: 'auto',
              mb: 2.5,
            }} />

            <Typography sx={{
              fontSize: { xs: '0.9rem', md: '1rem' },
              color: isDark ? '#64748b' : '#64748b',
              maxWidth: '440px',
              mx: 'auto',
              lineHeight: 1.7,
            }}>
              Vos doutes clarifiés en quelques réponses
            </Typography>
          </Box>

          {/* Deux colonnes : questions à gauche, image à droite */}
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">

            {/* Colonne droite — image (sticky sur desktop) */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 0, md: 2 } }}>
              <Box sx={{ position: { md: 'sticky' }, top: { md: 104 } }}>
                <Box sx={{ position: 'relative', mx: 'auto', maxWidth: { xs: 300, sm: 340, md: '100%' } }}>
                  {/* Lueur d'accent derrière l'image */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: -18,
                      borderRadius: '24px',
                      background: 'linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(8,145,178,0.18) 100%)',
                      filter: 'blur(28px)',
                      zIndex: 0,
                    }}
                  />
                  <Box
                    component="img"
                    src="/faq/faq.png"
                    alt="Une question ? DigitEase vous répond"
                    loading="lazy"
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '16px',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#e2e8f0',
                      boxShadow: isDark
                        ? '0 24px 48px -16px rgba(0,0,0,0.6)'
                        : '0 24px 48px -16px rgba(15,23,42,0.18)',
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Colonne gauche — questions */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 0, md: 1 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {questions.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Accordion
                  sx={{
                    borderRadius: '10px !important',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
                    bgcolor: isDark ? '#0f172a' : '#ffffff',
                    boxShadow: 'none',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      margin: 0,
                      borderColor: isDark ? 'rgba(37,99,235,0.35)' : 'rgba(37,99,235,0.2)',
                      boxShadow: isDark
                        ? '0 4px 16px -4px rgba(37,99,235,0.2)'
                        : '0 4px 16px -4px rgba(37,99,235,0.12)',
                    },
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon sx={{ color: '#2563eb', fontSize: 20, transition: 'transform 0.25s ease' }} />
                    }
                    aria-controls={`faq-content-${index}`}
                    id={`faq-header-${index}`}
                    sx={{
                      px: { xs: 2.5, sm: 3 },
                      minHeight: '52px !important',
                      '& .MuiAccordionSummary-content': { my: '14px' },
                    }}
                  >
                    <Typography sx={{
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', sm: '0.9375rem' },
                      color: isDark ? '#e2e8f0' : '#0f172a',
                      lineHeight: 1.5,
                    }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: { xs: 2.5, sm: 3 }, pb: 2.5, pt: 0 }}>
                    {renderContent(item, isDark)}
                  </AccordionDetails>
                </Accordion>
              </motion.div>
                ))}
              </Box>
            </Grid>

          </Grid>

          {/* CTA de sortie */}
          <Box
            sx={{
              mt: 6,
              pt: 5,
              borderTop: '1px solid',
              borderColor: isDark ? 'rgba(255,255,255,0.07)' : '#e2e8f0',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box>
              <Typography sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.0625rem' },
                color: isDark ? '#f1f5f9' : '#0f172a',
                mb: 0.5,
              }}>
                Vous avez une question spécifique ?
              </Typography>
              <Typography sx={{
                fontSize: '0.875rem',
                color: isDark ? '#64748b' : '#94a3b8',
              }}>
                Notre équipe vous répond sous 24h.
              </Typography>
            </Box>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/contact')}
              sx={{
                background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)',
                borderRadius: '10px',
                px: 3.5,
                py: 1.5,
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(26,86,219,0.28)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1e40af 0%, #0e7490 100%)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 6px 20px rgba(26,86,219,0.4)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Nous contacter
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ;
