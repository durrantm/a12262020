import React from 'react';
import { render, screen } from '@testing-library/react';
import Today from './Today';

describe('Tests of Today component', () => {
  it('renders page', () => {
    render(<Today />);
    const timeSeperator = screen.getByText(/:/);
    expect(timeSeperator).toBeInTheDocument();
  });
});