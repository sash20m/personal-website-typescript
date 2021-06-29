import React from 'react';
import './Textarea.scss';

interface Props {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

export const Textarea: React.FC<Props> = ({
  placeholder,
  className,
  value,
  onChange,
  errorMessage,
}): React.ReactElement => {
  return (
    <>
      <textarea
        className={`textarea ${className ? className : ''} ${
          errorMessage ? 'textarea-invalid' : ''
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event?.target.value)}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
