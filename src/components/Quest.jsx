import { MdAdd } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import {motion} from "framer-motion";
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Quest = ({ question, reponse, open, handleClick, index }) => {
  return (
    <Accordion expanded={open} onChange={handleClick.bind(null, index)} className="bg-gray-500 text-white shadow-lg">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls={`quest-content-${index}`}
        id={`quest-header-${index}`}
      >
        <Typography className="outfit text-md sm:text-xl font-semibold text-stone-200">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="outfit text-[1rem] text-stone-300">
          {reponse}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Quest;