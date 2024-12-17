import React, { useState, FC } from 'react';
import { helpers } from '../../utils/helpers';

interface ErrorBoundaryProps {
  FallbackComponent?: React.ReactNode;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ FallbackComponent }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error: any, errorInfo: React.ErrorInfo) => {
    setHasError(true);
    helpers.logError(error, errorInfo);
  };

  if (hasError) {
    return (
      <div role="alert">
        {FallbackComponent || (
          <div>
            <h1>Something went wrong.</h1>
            <p>Please try again later.</p>
          </div>
        )}
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;