import { FunctionComponent, SVGProps } from 'react';

export interface INavLink {
  id: string;
  path: string;
  label: string;
  available: boolean;
  icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined; }> | string;
  isDisabled: boolean;
}

export interface IWork {
  id: string;
  link: string;
  imgSrc: string;
  title: string;
  date: string;
  linkTitle: string;
  tags: string[];
}