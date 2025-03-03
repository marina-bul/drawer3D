import { useState } from 'react';

import { Input } from '../Input/Input';
import { CustomSelect } from '../Select/Select';
import styles from './Form.module.scss';

import type { FC, FormEvent, ChangeEvent, PropsWithChildren } from 'react';

interface FormFields {
  type: 'box' | 'pyramide';
  length: number;
  width: number;
  height: number;
  number: number;
}


interface FormProps extends PropsWithChildren {
  onSubmit?: () => void
}

const initialFormFields:FormFields = {
  type: 'box',
  length: 0,
  width: 0,
  height: 0,
  number: 0
}


export const Form:FC<FormProps> = ({ children, onSubmit }) => {


  const [formFields, setFormFields] = useState<FormFields>(initialFormFields);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = name === 'type' ? value : +value
    setFormFields((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('form data', formFields)

    if(onSubmit) onSubmit()

  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <CustomSelect label='Type' name='type' value={formFields.type} options={['box', 'pyramide']} onInputChange={handleInputChange} />
      <Input label='Length' value={formFields.length} name='length' onInputChange={handleInputChange} />
      <Input label='Width' value={formFields.width} name='width' onInputChange={handleInputChange} />
      <Input label='Height' value={formFields.height} name='height' onInputChange={handleInputChange} />
      <Input label='Number' value={formFields.number} name='number' onInputChange={handleInputChange} />

      {children}
    </form>
      
  );
}; 