import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from '@/components/navbar/Navbar'; 

describe('Navbar', () => {
    it('renders all navigation links', () => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );

        expect(screen.getByText(/LOGIN/i)).toBeInTheDocument();
        expect(screen.getByText(/SERVICE/i)).toBeInTheDocument();
        expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
    });

    it('displays the correct text for each link', () => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );

        expect(screen.getByText(/LOGIN/i)).toBeInTheDocument();
        expect(screen.getByText(/SERVICE/i)).toBeInTheDocument();
        expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
    });

    it('applies the correct styles to login link', () => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );

        const contactLink = screen.getByText(/CONTACT/i);
        expect(contactLink).toHaveClass('text-[#a6a6a6]'); 
    });
});
