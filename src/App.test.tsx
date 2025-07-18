import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI Component Library title', () => {
  render(<App />);
  const titleElement = screen.getByText(
    /UI Component Library - Assignment 13/i
  );
  expect(titleElement).toBeInTheDocument();
});

test('renders author name', () => {
  render(<App />);
  const authorElement = screen.getByText(
    /Lu Luke - UI Component Library with CI\/CD Pipeline/i
  );
  expect(authorElement).toBeInTheDocument();
});

test('renders button components', () => {
  render(<App />);
  const primaryButton = screen.getByText(/Primary Button/i);
  const disabledButton = screen.getByText(/Disabled Button/i);
  expect(primaryButton).toBeInTheDocument();
  expect(disabledButton).toBeInTheDocument();
});

test('renders feature checkmarks', () => {
  render(<App />);
  const qualityText = screen.getByText(
    /Code Quality: Prettier \+ ESLint \+ Tests/i
  );
  const hooksText = screen.getByText(/Pre-commit Hooks: Husky \+ Lint-staged/i);
  expect(qualityText).toBeInTheDocument();
  expect(hooksText).toBeInTheDocument();
});
