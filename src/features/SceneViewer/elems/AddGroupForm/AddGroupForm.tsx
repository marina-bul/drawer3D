import { useCallback, useState } from 'react';
import { Input, CustomSelect } from 'shared/UI';

import styles from './AddGroupForm.module.scss';

import type { FC, FormEvent, ChangeEvent, PropsWithChildren } from 'react';
import type { GroupParams, GroupType } from 'shared/types/Groups';

interface FormFields {
  type: GroupType;
  length: string;
  width: string;
  height: string;
  number: string;
}

interface FormProps extends PropsWithChildren {
  onSubmit?: (groupVals: GroupParams) => void
}

const initialFormFields:FormFields = {
  type: 'box',
  length: '',
  width: '',
  height: '',
  number: ''
}

export const Form:FC<FormProps> = ({ children, onSubmit }) => {

  const [formFields, setFormFields] = useState<FormFields>(initialFormFields);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value.replace(/^0+(?=\d)/, '') }));
  };

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    const numericValues = {
      ...formFields,
      length: Number(formFields.length) || 0,
      width: Number(formFields.width) || 0,
      height: Number(formFields.height) || 0,
      number: Number(formFields.number) || 0
    };

    if(onSubmit) onSubmit(numericValues)

  }, [formFields, onSubmit]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <CustomSelect 
        label='Type' 
        name='type' 
        value={formFields.type}
        options={['box', 'pyramide']} 
        onInputChange={handleInputChange} 
      />
      <Input 
        label='Length' 
        value={formFields.length} 
        name='length' 
        onInputChange={handleInputChange} 
      />
      <Input 
        label='Width' 
        value={formFields.width} 
        name='width' 
        onInputChange={handleInputChange} 
      />
      <Input 
        label='Height' 
        value={formFields.height} 
        name='height' 
        onInputChange={handleInputChange} 
      />
      <Input 
        label='Number' 
        value={formFields.number} 
        name='number' 
        onInputChange={handleInputChange} 
      />

      {children}
    </form>
      
  );
}; 