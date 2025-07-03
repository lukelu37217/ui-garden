import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ size?: string }>`
  font-size: ${props => props.size || '16px'};
  color: #333;
`;

export const Text: React.FC<TextProps> = ({ content, size }) => {
  return <StyledText size={size}>{content}</StyledText>;
};
