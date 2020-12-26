import React from 'react';
import ZipForm from './ZipForm';
import { render, screen } from '@testing-library/react';

describe('Zip Form', () => {
  it('renders with an empty zip', () => {
    render(<ZipForm zip="" updateZip= { () => {} } />);
    const placeholderTextZip = screen.getByPlaceholderText(/zip/i);
    expect(placeholderTextZip).toBeInTheDocument();
  });
  it('renders with a zip', () => {
    render(<ZipForm zip="02140" updateZip= { () => {} } />);
    const placeholderTextZip = screen.getByPlaceholderText(/zip/i);
    expect(placeholderTextZip).toBeInTheDocument();
  });
});
