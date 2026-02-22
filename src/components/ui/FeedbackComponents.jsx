import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

/**
 * Loading Spinner Component
 * Shows a centered loading indicator with optional message
 */
export const LoadingSpinner = ({ message = 'Chargement...', fullScreen = false }) => {
  return (
    <Fade in timeout={300}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          minHeight: fullScreen ? '100vh' : 200,
          width: '100%',
        }}
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <CircularProgress size={40} thickness={4} aria-label="Chargement en cours" />
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </Box>
    </Fade>
  );
};

/**
 * Skeleton Card Component
 * Placeholder for card content while loading
 */
export const SkeletonCard = ({ count = 1 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: 'grey.100',
              borderRadius: 2,
              p: 3,
              animation: 'pulse 1.5s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.5 },
              },
            }}
            aria-hidden="true"
          >
            <Box sx={{ height: 20, bgcolor: 'grey.200', borderRadius: 1, mb: 2, width: '60%' }} />
            <Box sx={{ height: 16, bgcolor: 'grey.200', borderRadius: 1, mb: 1, width: '100%' }} />
            <Box sx={{ height: 16, bgcolor: 'grey.200', borderRadius: 1, mb: 1, width: '80%' }} />
            <Box sx={{ height: 40, bgcolor: 'grey.200', borderRadius: 1, mt: 2, width: '40%' }} />
          </Box>
        ))}
    </>
  );
};

/**
 * Error Message Component
 * Displays user-friendly error messages
 */
export const ErrorMessage = ({ 
  title = 'Une erreur est survenue', 
  message = 'Veuillez réessayer plus tard.',
  onRetry 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 4,
        textAlign: 'center',
      }}
      role="alert"
      aria-live="assertive"
    >
      <Typography variant="h6" color="error.main" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          aria-label="Réessayer le chargement"
        >
          Réessayer
        </button>
      )}
    </Box>
  );
};

/**
 * Empty State Component
 * Shows when there's no data to display
 */
export const EmptyState = ({ 
  title = 'Aucun résultat', 
  message = 'Aucune donnée à afficher pour le moment.',
  icon = '📭' 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 6,
        textAlign: 'center',
      }}
      role="status"
    >
      <Typography variant="h2" component="span" aria-hidden="true">
        {icon}
      </Typography>
      <Typography variant="h6" color="text.primary">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default { LoadingSpinner, SkeletonCard, ErrorMessage, EmptyState };
