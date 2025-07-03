import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './Table.types';

const StyledHeader = styled.thead`
  background-color: #007bff;
  color: white;
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
