import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './Table.types';

const StyledFooter = styled.tfoot`
  background-color: #007bff;
  color: white;
`;

export const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};
