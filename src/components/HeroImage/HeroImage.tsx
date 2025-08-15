import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'backgroundImage',
})<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 12px 22px; /* larger button */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 17px; /* match site buttons */
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <HeroContainer backgroundImage={backgroundImage}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
    </HeroContainer>
  );
};
