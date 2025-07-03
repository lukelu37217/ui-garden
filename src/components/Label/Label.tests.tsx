import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label component', () => {
  it('should render visible label', () => {
    render(<Label text="Test Label" />);
    expect(screen.getByText('Test Label')).toBeVisible();
  });

  it('should change color', () => {
    const { container } = render(<Label text="Colored Label" color="red" />);
    expect(container.firstChild).toHaveStyle('color: red');
  });
});
