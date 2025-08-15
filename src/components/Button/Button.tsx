import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 12px 22px; /* larger hit area */
  background-color: ${props => (props.disabled ? 'grey' : '#007bff')};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  font-size: 17px; /* bump size */
`;

export const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
