export interface HeroImageProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}
