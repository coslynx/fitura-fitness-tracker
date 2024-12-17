import React, { useState, useCallback } from 'react';
import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material';
import { validators } from '../../utils/validators';

export interface InputProps extends MUITextFieldProps {
  label: string;
  type?: string;
  onChange: (value: string) => void;
  validators?: ((value: string) => string | undefined)[];
}

const Input: React.FC<InputProps> = ({ label, type = 'text', onChange, validators = [], error, helperText, ...props }) => {
  const [value, setValue] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    const validationErrors = validators.map(validator => validator(newValue));
    const hasError = validationErrors.some(error => error !== undefined);
    setValidationError(hasError ? validationErrors.find(error => error !== undefined) ?? '' : '');
    onChange(newValue);
  }, [onChange, validators]);

  return (
    <MUITextField
      label={label}
      type={type}
      value={value}
      onChange={handleChange}
      error={Boolean(validationError)}
      helperText={validationError || helperText}
      {...props}
    />
  );
};

export default Input;