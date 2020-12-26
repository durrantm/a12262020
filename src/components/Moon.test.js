import React from 'react';
import { render, screen } from '@testing-library/react';
import Moon from './Moon';

describe('Tests of moon component', () => {
  it('renders page', () => {
    render(<Moon moon_phase_lunation = { 0.5 } />);
    const result = screen.getByTestId('lunation');
    expect(result).toBeTruthy();
  });
});