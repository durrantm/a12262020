import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsRow from './ShowDetailsRowDaily';

describe('Tests of hourly component', () => {

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
  });  // TODO Due to unresolved error about tr, however test passes.

  it('renders row with correct day of week', () => {
    const day = {"valid_date": "12-24-2020", "weather": { "description": "Windy"}};
    render(<DetailsRow day = { day } />);
    const dayOfWeek = screen.getByText(/Fri/i);
    expect(dayOfWeek).toBeInTheDocument();
  });
});