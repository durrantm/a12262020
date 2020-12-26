import React from 'react';
import { render, screen } from '@testing-library/react';
import Rain from './Rain';

describe('Tests of rain component', () => {
  it('renders page', () => {
    render(<Rain inches = "0.5" />);
    const rain = screen.getByText(/0\.5/);
    expect(rain).toBeInTheDocument();
  });
});