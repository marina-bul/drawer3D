
import { Box, InputLabel, TextField } from '@mui/material';

import type { FC, InputHTMLAttributes, ChangeEvent } from 'react';

// import styles from './Instruments.module.scss';


interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  label: string
  value: number
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
}


export const Input:FC<InputProps> = 
({ label, value, onInputChange, ...restProps }) => {

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <InputLabel sx={{ minWidth: 100 }}>{label}</InputLabel>
      <TextField
        value={value}
        variant="outlined"
        size='small'
        onChange={onInputChange}
        sx={{ flexGrow: 1 }}
        {...restProps}
      />
    </Box>
      
  );
}; 