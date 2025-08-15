import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Luke Lu - Full Stack Developer/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders main navigation', () => {
  render(<App />);
  const homeButton = screen.getByRole('button', { name: /home/i });
  const portfolioButton = screen.getByRole('button', { name: /^portfolio$/i });
  expect(homeButton).toBeInTheDocument();
  expect(portfolioButton).toBeInTheDocument();
});

test('renders main content sections', () => {
  render(<App />);
  const workSection = screen.getByText(/My Work & Projects/i);
  const skillsSection = screen.getByRole('heading', {
    level: 2,
    name: /technical skills/i,
  });
  expect(workSection).toBeInTheDocument();
  expect(skillsSection).toBeInTheDocument();
});

test('renders portfolio call to action', () => {
  render(<App />);
  const ctaButton = screen.getByText(/View My Portfolio/i);
  expect(ctaButton).toBeInTheDocument();
});
