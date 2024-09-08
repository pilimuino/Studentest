import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom'; 
import Construction from '@/components/underconstruction/Construction';


describe('Construction', () => {
    it('renders correctly with background image, heading, and button', () => {
        render(
            <BrowserRouter>
                <Construction />
            </BrowserRouter>
        );

    const backgroundElement = screen.getByTestId('construction-background');
    expect(backgroundElement).toBeInTheDocument();

    const styles = getComputedStyle(backgroundElement);
    expect(styles.backgroundImage).toMatch(/UnderConstruction\.png/);
    });
});