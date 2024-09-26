import { ButtonHTMLAttributes } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: ['rounded-lg px-3 py-2 text-sm font-semibold outline-none shadow-sm'],
  variants: {
    variant: {
      ghost: 'rounded-md px-2 hover:bg-zinc-100 shadow-none',
      primary: 'bg-zinc-900 text-white hover:bg-zinc-950',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />;
}
