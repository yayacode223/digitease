import React from 'react';
import { questions } from './index';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LinkIcon from '@mui/icons-material/Link';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ListContent = ({ items, isDark }) => (
  <List dense disablePadding>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
        <ListItemIcon sx={{ minWidth: 32 }}>
          <ArrowRightIcon sx={{ color: isDark ? '#60a5fa' : '#1a56db', fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText 
          primary={item} 
          primaryTypographyProps={{ 
            sx: { color: isDark ? '#cbd5e1' : '#4b5563', fontSize: { xs: '0.875rem', sm: '0.95rem' } } 
          }} 
        />
      </ListItem>
    ))}
  </List>
);

const StepsContent = ({ items, isDark }) => (
  <List dense disablePadding>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ py: 0.75, alignItems: 'flex-start' }}>
        <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
          <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem', fontWeight: 700, bgcolor: isDark ? '#3b82f6' : '#1a56db', color: 'white' }}>
            {idx + 1}
          </Avatar>
        </ListItemIcon>
        <ListItemText primary={item} primaryTypographyProps={{ sx: { color: isDark ? '#cbd5e1' : '#4b5563', fontSize: { xs: '0.875rem', sm: '0.95rem' }, lineHeight: 1.6 } }} />
      </ListItem>
    ))}
  </List>
);

const OptionsContent = ({ items, isDark }) => (
  <Stack spacing={1.5}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
      <ScheduleIcon sx={{ color: isDark ? '#60a5fa' : '#1a56db', fontSize: 20 }} />
      <Typography sx={{ color: isDark ? '#f1f5f9' : '#111827', fontWeight: 600, fontSize: { xs: '0.875rem', sm: '0.95rem' } }}>
        Options flexibles :
      </Typography>
    </Box>
    {items.map((item, idx) => (
      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 }, pl: { xs: 2, sm: 3.5 }, flexWrap: 'wrap' }}>
        <Chip label={item.label} size="small" sx={{ bgcolor: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(26, 86, 219, 0.1)', color: isDark ? '#60a5fa' : '#1a56db', fontWeight: 600, minWidth: { xs: 80, sm: 100 } }} />
        <Typography sx={{ color: isDark ? '#cbd5e1' : '#4b5563', fontSize: { xs: '0.875rem', sm: '0.95rem' } }}>{item.value}</Typography>
      </Box>
    ))}
  </Stack>
);

const CheckContent = ({ items, isDark }) => (
  <List dense disablePadding>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
        <ListItemIcon sx={{ minWidth: 32 }}>
          <CheckCircleIcon sx={{ color: '#10b981', fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText primary={item} primaryTypographyProps={{ sx: { color: isDark ? '#cbd5e1' : '#4b5563', fontSize: { xs: '0.875rem', sm: '0.95rem' } } }} />
      </ListItem>
    ))}
  </List>
);

const PricingContent = ({ data, isDark }) => (
  <Stack spacing={2}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <AttachMoneyIcon sx={{ color: '#f59e0b', fontSize: 22 }} />
      <Typography sx={{ color: isDark ? '#f1f5f9' : '#111827', fontWeight: 600, fontSize: { xs: '0.875rem', sm: '0.95rem' } }}>{data.intro}</Typography>
    </Box>
    <List dense disablePadding sx={{ pl: 1 }}>
      {data.items.map((item, idx) => (
        <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <ArrowRightIcon sx={{ color: isDark ? '#60a5fa' : '#1a56db', fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText primary={item} primaryTypographyProps={{ sx: { color: isDark ? '#cbd5e1' : '#4b5563', fontSize: { xs: '0.875rem', sm: '0.95rem' } } }} />
        </ListItem>
      ))}
    </List>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 1 }}>
      <LinkIcon sx={{ color: '#0891b2', fontSize: 18 }} />
      <Typography sx={{ color: '#0891b2', fontSize: { xs: '0.85rem', sm: '0.9rem' }, fontWeight: 500 }}>{data.cta}</Typography>
    </Box>
  </Stack>
);

const renderContent = (item, isDark) => {
  switch (item.type) {
    case 'list': return <ListContent items={item.reponse} isDark={isDark} />;
    case 'steps': return <StepsContent items={item.reponse} isDark={isDark} />;
    case 'options': return <OptionsContent items={item.reponse} isDark={isDark} />;
    case 'check': return <CheckContent items={item.reponse} isDark={isDark} />;
    case 'pricing': return <PricingContent data={item.reponse} isDark={isDark} />;
    default: return <Typography sx={{ color: isDark ? '#94a3b8' : '#6b7280', fontSize: { xs: '0.875rem', sm: '0.95rem' }, lineHeight: 1.8 }}>{item.reponse}</Typography>;
  }
};

const FAQ = () => {
  const { isDark } = useTheme();
  return (
    <Box id="faq" component="section" sx={{ py: { xs: 6, sm: 8, md: 12 }, bgcolor: isDark ? '#0f172a' : '#ffffff', transition: 'background-color 0.3s ease' }}>
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Chip label="FAQ" sx={{ mb: 2, bgcolor: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(26, 86, 219, 0.1)', color: isDark ? '#60a5fa' : '#1a56db', fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' }, py: 2, px: 1 }} />
            <Typography variant="h2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' }, color: isDark ? '#f1f5f9' : '#111827', mb: 2, transition: 'color 0.3s ease' }}>
              Questions{' '}<Box component="span" sx={{ background: 'linear-gradient(135deg, #1a56db 0%, #0891b2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>fréquentes</Box>
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' }, color: isDark ? '#94a3b8' : '#6b7280', maxWidth: '500px', mx: 'auto', lineHeight: 1.7, px: { xs: 2, sm: 0 }, transition: 'color 0.3s ease' }}>
              Vos doutes seront clarifiés en quelques réponses
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {questions.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                <Accordion sx={{ borderRadius: '12px !important', border: '1px solid', borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)', bgcolor: isDark ? '#1e293b' : '#ffffff', boxShadow: 'none', transition: 'all 0.3s ease', '&:before': { display: 'none' }, '&.Mui-expanded': { margin: 0, boxShadow: isDark ? '0 4px 20px -8px rgba(59, 130, 246, 0.3)' : '0 4px 20px -8px rgba(26, 86, 219, 0.2)', borderColor: isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(26, 86, 219, 0.3)' }, overflow: 'hidden' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: isDark ? '#60a5fa' : '#1a56db', transition: 'transform 0.3s ease' }} />} aria-controls={`faq-content-${index}`} id={`faq-header-${index}`} sx={{ py: 1, px: { xs: 2, sm: 3 }, '& .MuiAccordionSummary-content': { my: 2 } }}>
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: isDark ? '#f1f5f9' : '#111827', transition: 'color 0.3s ease' }}>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: { xs: 2, sm: 3 }, pb: 3, pt: 0 }}>{renderContent(item, isDark)}</AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ;
