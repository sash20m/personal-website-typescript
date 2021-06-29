import React from 'react';
import './LoaderSpinner.scss';

interface Props {
  className?: string;
}

export const LoaderSpinner: React.FC<Props> = ({
  className = '',
}): React.ReactElement => {
  return (
    <div
      className={`zh-loader-spinner zh-loader-spinner-type-simple zh-loader-spinner-size-small ${className}`}
    />
  );
};
