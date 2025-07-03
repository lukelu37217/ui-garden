import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

const StyledInput = styled.input`
  margin-right: 8px;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  disabled,
  onChange
}) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </StyledLabel>
  );
};
