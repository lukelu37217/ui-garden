import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{
  width?: string;
  height?: string;
  rounded?: boolean;
}>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.rounded ? '50%' : '0'};
  object-fit: cover;
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  rounded
}) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} rounded={rounded} />;
};
