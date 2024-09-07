import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom'; 
import Home from '@/components/home/HomeComponent';

describe('Home', () => {
    it('renders correctly with background image, heading, and button', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

    const backgroundElement = screen.getByTestId('home-background');
    expect(backgroundElement).toBeInTheDocument();

    const styles = getComputedStyle(backgroundElement);
    expect(styles.backgroundImage).toMatch(/fotoportada/);

    const headingElement = screen.getByRole('heading', { name: /Create tests with AI/i });
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /Student Test/i });
    expect(buttonElement).toBeInTheDocument();
    });
});
