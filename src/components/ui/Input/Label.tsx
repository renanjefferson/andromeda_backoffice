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
        className={`${srOnly && 'sr-only'} mb-1 block font-medium text-zinc-500`}
      >
        {labelText}
      </span>
      {children}
    </label>
  );
}
