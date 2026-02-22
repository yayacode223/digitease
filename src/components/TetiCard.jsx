import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const TetiCard = ({ nom, poste, entreprise, temoignage, avatar }) => {
  return (
    <Card className="shadow-lg rounded-2xl max-w-lg mx-auto bg-white" sx={{ p: 3 }}>
      <CardContent>
        <Box className="flex items-center space-x-4 mb-4">
          <Avatar src={avatar} alt={`${nom} avatar`} sx={{ width: 48, height: 48 }} />
          <Box>
            <Typography variant="subtitle1" className="font-semibold text-gray-800">
              {nom}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              {poste} – {entreprise}
            </Typography>
          </Box>
        </Box>
        <Typography className="text-gray-700 italic" variant="body1">
          “{temoignage}”
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TetiCard;
