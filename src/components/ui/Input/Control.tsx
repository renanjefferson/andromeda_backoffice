import { forwardRef, Ref, InputHTMLAttributes } from 'react';

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Control = forwardRef(
  (props: ControlProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        className="h-14 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
        {...props}
        ref={ref}
      />
    );
  }
);
