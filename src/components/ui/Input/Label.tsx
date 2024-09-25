import { LabelHTMLAttributes, ReactNode } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  labelText: string;
  srOnly?: boolean;
  children: ReactNode;
}

export function Label({
  labelText,
  srOnly = false,
  children,
  ...props
}: LabelProps) {
  return (
    <label {...props}>
      <span
        className={`${srOnly && 'sr-only'} block text-zinc-500 font-medium mb-1`}
      >
        {labelText}
      </span>
      {children}
    </label>
  );
}
