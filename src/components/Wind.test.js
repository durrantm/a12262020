import React from 'react';
import { render, screen } from '@testing-library/react';
import Wind from './Wind';

describe('Tests of rain component', () => {
  it('renders page', () => {
    render(<Wind speed = { 10 } direction = "E" />);
    const speed = screen.getByText(/10/);
    const direction = screen.getByText(/E/);
    expect(speed).toBeInTheDocument();
    expect(direction).toBeInTheDocument();
  });
});