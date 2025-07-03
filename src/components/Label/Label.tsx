import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color?: string }>`
  color: ${props => props.color || 'black'};
  font-size: 14px;
`;

export const Label: React.FC<LabelProps> = ({ text, color }) => {
  return <StyledLabel color={color}>{text}</StyledLabel>;
};
