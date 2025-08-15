import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ size?: string }>`
  font-size: ${props => props.size || '16px'};
  color: #333;
  margin: 0.5rem 0;
`;

const StyledHeading = styled.h2`
  font-size: 34px; /* was 32 */
  margin: 0 0 1rem 0;
  font-weight: 700;
  text-align: center;
`;

const StyledSmall = styled.small`
  color: #666;
  font-size: 14px;
`;

export const Text: React.FC<TextProps> = ({ content, size }) => {
  if (size === 'large') {
    return <StyledHeading>{content}</StyledHeading>;
  }
  if (size === 'small') {
    return <StyledSmall>{content}</StyledSmall>;
  }
  return <StyledText size={size}>{content}</StyledText>;
};
