import React from 'react';
import ToggleUImode from './ToggleUImode';
import { render, screen } from '@testing-library/react';

describe('Toggle UI mode switcher for themes', () => {
  it('renders toggle', () => {
    render(<ToggleUImode toggleUImode = { () => {} } />);
    const result = screen.findByTestId('edaUImodeSwitcher');
    expect(result).toBeTruthy();
  });
});
