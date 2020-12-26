import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from './Description';

describe('Tests of description component', () => {

  it('renders page', () => {
    render(<Description text = "windy" />);
    const conditions = screen.getByText(/windy/i);
    expect(conditions).toBeInTheDocument();
  });
});