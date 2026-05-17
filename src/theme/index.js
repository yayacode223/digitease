import { createTheme } from '@mui/material/styles';

const designTokens = {
  colors: {
    primary: {
      main: '#2563eb',
      light: '#3b82f6',
      dark: '#1e40af',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0891b2',
      light: '#06b6d4',
      dark: '#0e7490',
      contrastText: '#ffffff',
    },
    success: {
      main: '#059669',
      light: '#34d399',
      dark: '#047857',
    },
    warning: {
      main: '#d97706',
      light: '#f59e0b',
      dark: '#b45309',
    },
    error: {
      main: '#dc2626',
      light: '#f87171',
      dark: '#b91c1c',
    },
    info: {
      main: '#0891b2',
      light: '#22d3ee',
      dark: '#0e7490',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      disabled: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "-apple-system", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.65,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0em',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  shadows: {
    soft: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
    medium: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
    large: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
    blue: '0 4px 14px 0 rgba(37,99,235,0.25)',
    blueLg: '0 10px 30px -5px rgba(37,99,235,0.35)',
  },
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: designTokens.colors.primary,
    secondary: designTokens.colors.secondary,
    success: designTokens.colors.success,
    warning: designTokens.colors.warning,
    error: designTokens.colors.error,
    info: designTokens.colors.info,
    background: designTokens.colors.background,
    text: designTokens.colors.text,
  },
  typography: {
    fontFamily: designTokens.typography.fontFamily,
    h1: designTokens.typography.h1,
    h2: designTokens.typography.h2,
    h3: designTokens.typography.h3,
    h4: designTokens.typography.h4,
    h5: designTokens.typography.h5,
    h6: designTokens.typography.h6,
    body1: designTokens.typography.body1,
    body2: designTokens.typography.body2,
    button: designTokens.typography.button,
  },
  spacing: designTokens.spacing,
  shape: designTokens.shape,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 22px',
          fontWeight: 600,
          boxShadow: 'none',
          fontSize: '0.9375rem',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: designTokens.shadows.blue,
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: designTokens.shadows.soft,
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: designTokens.shadows.xl,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '10px !important',
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: '8px 0' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 6,
        },
      },
    },
  },
});

export { theme, designTokens };
export default theme;
