import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img component', () => {
  it('should render visible image with alt text', () => {
    render(<Img src="test.jpg" alt="Test Alt" />);
    expect(screen.getByAltText('Test Alt')).toBeVisible();
  });

  it('should have border-radius when rounded', () => {
    const { container } = render(
      <Img src="test.jpg" alt="Test Alt" rounded width="100px" height="100px" />
    );
    expect(container.firstChild).toHaveStyle('border-radius: 50%');
  });
});
