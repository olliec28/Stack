import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const CustomButton = ({ href, icon, text }) => {
  const theme = useTheme();
  
  return (
    <Button
      component='contained'
      color='primary'
      href={href}
      variant='text'
      startIcon={icon}
      sx={{
        color: theme.palette.text.primary,
        mx: 1.5,
        marginLeft: '50px',
        fontSize: '20px',
        fontWeight: 'bold',
        '&:active': {
          color: theme.palette.primary.main,
        },
        '&:hover': {
          color: theme.palette.primary.main,
          textDecoration: 'underline',
          fontWeight: 'bold',
          
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;