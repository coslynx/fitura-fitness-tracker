import React, { FC } from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';

interface LoadingIndicatorProps extends CircularProgressProps {
  size?: number;
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

const LoadingIndicator: FC<LoadingIndicatorProps> = ({ size = 40, color = 'primary', ...props }) => {
  return (
    <CircularProgress size={size} color={color} {...props} />
  );
};

export default LoadingIndicator;