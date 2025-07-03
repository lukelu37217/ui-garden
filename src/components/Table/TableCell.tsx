import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './Table.types';

const StyledCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <StyledCell>{children}</StyledCell>;
};
