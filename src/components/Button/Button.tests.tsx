import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button component', () => {
  it('should render visible button', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText('Test Button')).toBeVisible();
  });

  it('should have grey background when disabled', () => {
    const { container } = render(<Button label="Disabled Button" disabled />);
    expect(container.firstChild).toHaveStyle('background-color: grey');
  });
});
