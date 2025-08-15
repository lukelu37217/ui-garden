import React from 'react';
import { render, screen } from '@testing-library/react';
import { Portfolio } from './Portfolio';

describe('Portfolio Component', () => {
  const mockOnNavigateHome = jest.fn();

  beforeEach(() => {
    mockOnNavigateHome.mockClear();
  });

  it('renders portfolio title', () => {
    render(<Portfolio onNavigateHome={mockOnNavigateHome} />);
    expect(
      screen.getByText(/Luke Lu - Full Stack Developer/i)
    ).toBeInTheDocument();
  });

  it('renders basic information section', () => {
    render(<Portfolio onNavigateHome={mockOnNavigateHome} />);
    expect(
      screen.getByText(/Analytical and adaptable web development student/i)
    ).toBeInTheDocument();
  });

  it('renders work section', () => {
    render(<Portfolio onNavigateHome={mockOnNavigateHome} />);
    expect(screen.getByText(/Work & Projects/i)).toBeInTheDocument();
  });

  it('renders skills section', () => {
    render(<Portfolio onNavigateHome={mockOnNavigateHome} />);
    expect(
      screen.getByText(/Technical Skills & Technologies/i)
    ).toBeInTheDocument();
  });

  it('renders resources section', () => {
    render(<Portfolio onNavigateHome={mockOnNavigateHome} />);
    expect(
      screen.getByText(/Learning Resources & Documentation/i)
    ).toBeInTheDocument();
  });

  it('renders developer setup section', () => {
    render(<Portfolio onNavigateHome={mockOnNavigateHome} />);
    expect(
      screen.getByText(/Development Environment Setup/i)
    ).toBeInTheDocument();
  });

  it('renders contact section', () => {
    render(<Portfolio onNavigateHome={mockOnNavigateHome} />);
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });

  it('calls onNavigateHome when back button is clicked', () => {
    render(<Portfolio onNavigateHome={mockOnNavigateHome} />);
    const backButton = screen.getByText(/Back to Home/i);
    backButton.click();
    expect(mockOnNavigateHome).toHaveBeenCalled();
  });
});
