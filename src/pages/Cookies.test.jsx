import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Cookies from '@/pages/Cookies';

describe('Cookies', () => {
    it('renders correctly with the correct text', () => {
        render(
            <BrowserRouter>
                <Cookies />
            </BrowserRouter>
        );

        const titleElement = screen.getByRole('heading', { name: /COOKIES POLICY/i});
        expect(titleElement).toBeInTheDocument();

        const subtitle1 = screen.getByRole('heading', { name: /WHAT ARE COOKIES\?/i });
        const subtitle2 = screen.getByRole('heading', { name: /WHY DO WE USE COOKIES\?/i });
        const subtitle3 = screen.getByRole('heading', { name: /DEACTIVATION OF COOKIES/i });

        expect(subtitle1).toBeInTheDocument();
        expect(subtitle2).toBeInTheDocument();
        expect(subtitle3).toBeInTheDocument();

    });
});    