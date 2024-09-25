import { ReactNode, HTMLAttributes } from 'react';

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Root(props: RootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 shadow-sm hover:border-zinc-900 focus-within:border-zinc-950 focus-within:ring-1 focus-within:ring-zinc-950"
      {...props}
    />
  );
}
