import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/footer/Footer';

describe('Footer', () => {
    it('renders the About section', () => {
        render(<Footer />);
        
        expect(screen.getByText(/About STUDENTEST/i)).toBeInTheDocument();
        expect(screen.getByText(/Studentest is a platform based on Artificial Intelligence/i)).toBeInTheDocument();
    });

    it('renders the Pages section with links', () => {
        render(<Footer />);
        
        expect(screen.getByText(/Service/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    });

    it('renders the Follow Us section with social media icons', () => {
        render(<Footer />);

        expect(screen.getByLabelText(/Facebook/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Instagram/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/X/i)).toBeInTheDocument(); 
        expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/YouTube/i)).toBeInTheDocument();
    });

    it('renders the footer links at the bottom', () => {
        render(<Footer />);
        
        expect(screen.getByText(/Privacy/i)).toBeInTheDocument();
        expect(screen.getByText(/Cookies/i)).toBeInTheDocument();
        expect(screen.getByText(/Terms of use/i)).toBeInTheDocument();
    });
});