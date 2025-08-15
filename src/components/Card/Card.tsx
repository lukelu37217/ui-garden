import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 0 auto; /* ensure the card centers in its parent */
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* center inner content */
  text-align: center; /* center text */
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 22px; /* larger title */
  line-height: 1.3;
`;

const Description = styled.div`
  margin: 0 0 18px;
  font-size: 16px; /* larger body text */
  line-height: 1.6;
  color: #555;

  ul {
    list-style: disc;
    padding-left: 1.2rem;
    text-align: left;
    margin: 0.25rem 0 0;
  }
`;

const Button = styled.button`
  padding: 10px 20px; /* larger button */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px; /* larger label */
`;

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <CardContainer className="card">
      {image && <Image src={image} alt={title} />}
      <Content>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
      </Content>
    </CardContainer>
  );
};
