import React, { FC } from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';
import { LoadingIndicator } from './LoadingIndicator';

export interface ButtonProps extends MUIButtonProps {
  isLoading?: boolean;
  onError?: (error: any) => void;
}

const Button: FC<ButtonProps> = ({ onClick, text, variant = 'contained', size = 'medium', disabled = false, isLoading = false, onError, ...props }) => {
  const handleClick = () => {
    try {
      onClick?.();
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <MUIButton
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? <LoadingIndicator size={20} /> : text}
    </MUIButton>
  );
};

export default Button;