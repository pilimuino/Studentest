import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomeComponent from '@/components/home/HomeComponent';

describe('Home Component', () => {
    test('renders correctly with background image and content', () => {
    render(<HomeComponent />);
    
    const heading = screen.getByText(/Create tests with AI/i);
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole('button'); 
    expect(button).toBeInTheDocument();
    });
});
