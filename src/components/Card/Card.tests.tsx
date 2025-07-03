import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
  it('should render title and description', () => {
    render(<Card
      image="test.jpg"
      title="Test Card"
      description="Test description"
    />);
    expect(screen.getByText('Test Card')).toBeVisible();
    expect(screen.getByText('Test description')).toBeVisible();
  });

  it('should render button if buttonText is provided', () => {
    render(<Card
      image="test.jpg"
      title="Test Card"
      buttonText="Click Here"
    />);
    expect(screen.getByText('Click Here')).toBeVisible();
  });
});
