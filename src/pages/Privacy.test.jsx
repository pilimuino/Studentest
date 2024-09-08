import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Privacy from '@/pages/Privacy';

describe('Privacy', () => {
    it('renders correctly with the correct text', () => {
        render(
            <BrowserRouter>
                <Privacy />
            </BrowserRouter>
        ); 

        const subtitle1 = screen.getByRole('heading', { name: /PRIVACY POLICIES:/i });
        expect(subtitle1).toBeInTheDocument();

        const paragraph1 = screen.getByText(/Studentest respects current legislation on personal data protection/i);
        const paragraph2 = screen.getByText(/In that case, the user will be notified of such changes/i);

        expect(paragraph1).toBeInTheDocument();
        expect(paragraph2).toBeInTheDocument();
    });
});
