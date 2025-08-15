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
  const homeButton = screen.getByText(/Home/i);
  const portfolioButton = screen.getByText(/Portfolio/i);
  expect(homeButton).toBeInTheDocument();
  expect(portfolioButton).toBeInTheDocument();
});

test('renders main content sections', () => {
  render(<App />);
  const workSection = screen.getByText(/My Work & Projects/i);
  const skillsSection = screen.getByText(/Technical Skills/i);
  expect(workSection).toBeInTheDocument();
  expect(skillsSection).toBeInTheDocument();
});

test('renders portfolio call to action', () => {
  render(<App />);
  const ctaButton = screen.getByText(/View My Portfolio/i);
  expect(ctaButton).toBeInTheDocument();
});
