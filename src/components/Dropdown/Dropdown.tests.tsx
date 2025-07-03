import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown component', () => {
  it('should render visible options', () => {
    render(<Dropdown options={['Item1', 'Item2']} />);
    expect(screen.getByText('Item1')).toBeVisible();
    expect(screen.getByText('Item2')).toBeVisible();
  });

  it('should have grey background when disabled', () => {
    const { container } = render(<Dropdown options={['Test']} disabled />);
    expect(container.firstChild).toHaveStyle('background-color: grey');
  });
});
