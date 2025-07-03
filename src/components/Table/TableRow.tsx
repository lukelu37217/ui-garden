import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './Table.types';

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};
