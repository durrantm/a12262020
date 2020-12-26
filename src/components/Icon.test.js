import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Tests of Icon component', () => {
  it('renders component', () => {
    render(<Icon code ="test" />);
    const result = screen.getByAltText('icon-weather');
    expect(result).toBeTruthy();
  });
});