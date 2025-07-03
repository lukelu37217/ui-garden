import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton component', () => {
  it('should render visible label', () => {
    render(<RadioButton label="Radio Label" name="group1" value="val1" />);
    expect(screen.getByText('Radio Label')).toBeVisible();
  });

  it('should have disabled style when disabled', () => {
    const { container } = render(
      <RadioButton label="Disabled Radio" name="group2" value="val2" disabled />
    );
    expect(container.firstChild).toHaveStyle('cursor: not-allowed');
    expect(container.firstChild).toHaveStyle('opacity: 0.5');
  });
});
