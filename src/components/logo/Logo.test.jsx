import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logo from '@/components/logo/Logo'; 

describe('Logo', () => {
    it('renders the logo image with correct src and alt attributes', () => {
        render(<Logo />);

        const logoImage = screen.getByRole('img');
        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveAttribute('src', expect.stringContaining('1.png'));
        expect(logoImage).toHaveAttribute('alt', 'StudenTLogo');
    });

    it('renders the logo description for accessibility', () => {
        render(<Logo />);

        const logoDescription = screen.getByText(/StudenTLogo/i);
        expect(logoDescription).toBeInTheDocument();
        expect(logoDescription).toHaveClass('sr-only');
    });

    it('renders with a custom alt text', () => {
        render(<Logo alt="Custom Logo Alt Text" />);

        const logoImage = screen.getByRole('img');
        expect(logoImage).toHaveAttribute('alt', 'Custom Logo Alt Text');
    });
});
