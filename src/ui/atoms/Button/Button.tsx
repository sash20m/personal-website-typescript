import React from 'react';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import './Button.scss';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
}

export const Button: React.FC<Props> = ({
  text,
  onClick,
  className = '',
  loading,
}): React.ReactElement => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {loading && <LoaderSpinner />}
      <p>{text}</p>
    </button>
  );
};
