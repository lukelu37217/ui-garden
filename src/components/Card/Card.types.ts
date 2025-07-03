export interface CardProps {
  image: string;
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}
