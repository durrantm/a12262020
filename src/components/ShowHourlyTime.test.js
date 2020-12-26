import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowHourlyTime from './ShowHourlyTime';

describe('Tests of Hourly Time component', () => {
  it('renders page', () => {
    render(<ShowHourlyTime time = { 1608067030 } tz = "EST" />);
    const time = screen.getByText(/4/);
    const AMPM = screen.getByText(/PM/);
    expect(time).toBeInTheDocument();
    expect(AMPM).toBeInTheDocument();
  });
});