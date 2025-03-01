
import { Button } from '@mui/material';

import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

// import styles from './Instruments.module.scss';


export const ButtonMain:FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = 
({ children, ...restProps }) => {

  return (
    
    <Button {...restProps} variant="contained" color="primary" sx={{ textTransform: 'none' }}>
      {children}
    </Button>
      
  );
}; 