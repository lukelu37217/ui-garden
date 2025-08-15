import { ReactNode } from 'react';

export interface CardProps {
  image?: string;
  title: string;
  description?: ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
}
