import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  border-radius: 4px;
  background-color: ${props => (props.disabled ? 'grey' : 'white')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, disabled }) => {
  return (
    <StyledSelect disabled={disabled}>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </StyledSelect>
  );
};
