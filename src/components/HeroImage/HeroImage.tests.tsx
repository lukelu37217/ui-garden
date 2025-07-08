import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage component', () => {
  it('should render title and subtitle', () => {
    render(
      <HeroImage
        backgroundImage="test.jpg"
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );
    expect(screen.getByText('Test Title')).toBeVisible();
    expect(screen.getByText('Test Subtitle')).toBeVisible();
  });

  it('should render button when buttonText is provided', () => {
    render(
      <HeroImage
        backgroundImage="test.jpg"
        title="Test Title"
        buttonText="Click Me"
      />
    );
    expect(screen.getByText('Click Me')).toBeVisible();
  });
});
