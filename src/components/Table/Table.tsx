import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const Table: React.FC<TableProps> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};
