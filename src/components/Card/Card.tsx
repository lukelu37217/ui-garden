import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 20px;
`;

const Description = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  color: #555;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick
}) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {buttonText && (
          <Button onClick={onButtonClick}>{buttonText}</Button>
        )}
      </Content>
    </CardContainer>
  );
};
