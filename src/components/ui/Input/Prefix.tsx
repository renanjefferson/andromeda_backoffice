import { HTMLAttributes, ReactNode } from 'react';

export interface PrefixProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Prefix(props: PrefixProps) {
  return <div {...props} className={props.className} />;
}
