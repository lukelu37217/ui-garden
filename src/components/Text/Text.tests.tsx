import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text component', () => {
  it('should render visible text', () => {
    render(<Text content="Sample Text" />);
    expect(screen.getByText('Sample Text')).toBeVisible();
  });

  it('should change font size', () => {
    const { container } = render(<Text content="Sized Text" size="24px" />);
    expect(container.firstChild).toHaveStyle('font-size: 24px');
  });
});
