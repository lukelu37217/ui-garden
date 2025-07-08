import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './index';

describe('Table component', () => {
  it('should render table headers', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    );
    expect(screen.getByText('Header 1')).toBeVisible();
  });

  it('should render table footer', () => {
    render(
      <Table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByText('Footer 1')).toBeVisible();
  });
});
