
import { Button } from '@mui/material';

import type { FC, PropsWithChildren } from 'react';

// import styles from './Instruments.module.scss';


export const ButtonMain:FC<PropsWithChildren> = ({ children }) => {

  return (
    
    <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>{children}</Button>
      
  );
};