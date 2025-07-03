import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  background-color: ${props => props.disabled ? 'grey' : '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  font-size: 16px;
`;

export const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
