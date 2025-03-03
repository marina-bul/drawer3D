
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import type { FC, InputHTMLAttributes, ChangeEvent } from 'react';

// import styles from './Instruments.module.scss';


interface SelectProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  label: string
  options: string[]
  value: string
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
}


export const CustomSelect:FC<SelectProps> = ({ label, options, value, onInputChange, ...restProps }) => {

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <InputLabel sx={{ minWidth: 100 }}>{label}</InputLabel>
      <FormControl size='small' sx={{ flexGrow: 1 }}>
        <Select value={value} onChange={onInputChange} {...restProps}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
      
  );
}; 