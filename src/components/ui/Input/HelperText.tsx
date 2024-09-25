import { HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface HelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  error?: FieldError;
}

export function HelperText({ children, error, ...props }: HelperTextProps) {
  return (
    <span
      className={`p-1 text-sm ${error ? 'text-red-500' : 'text-zinc-500'}`}
      {...props}
    >
      {children}
    </span>
  );
}
