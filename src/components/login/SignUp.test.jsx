import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUpComponent from './SignUpComponent'; 

describe('SignUpComponent', () => {
    it('renders the form fields correctly', () => {
        render(
        <BrowserRouter>
            <SignUpComponent />
        </BrowserRouter>
        );

        expect(screen.getByPlaceholderText(/First name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Last name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    });

    it('updates input values on change', () => {
        render(
        <BrowserRouter>
            <SignUpComponent />
        </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/First name/i), {
        target: { value: 'Pili' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Last name/i), {
        target: { value: 'Mui' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), {
        target: { value: 'pili.mui@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Password/i), {
        target: { value: 'password123' },
        });

        expect(screen.getByPlaceholderText(/First name/i)).toHaveValue('Pili');
        expect(screen.getByPlaceholderText(/Last name/i)).toHaveValue('Mui');
        expect(screen.getByPlaceholderText(/Email/i)).toHaveValue('pili.mui@example.com');
        expect(screen.getByPlaceholderText(/Password/i)).toHaveValue('password123');
    });

    it('toggles password visibility on button click', () => {
        render(
            <BrowserRouter>
                <SignUpComponent />
            </BrowserRouter>
        );

        const passwordInput = screen.getByPlaceholderText(/Password/i);
        const toggleButton = screen.getByText(/Show Password/i);

        expect(passwordInput).toHaveAttribute('type', 'password');
        fireEvent.click(toggleButton);

        expect(passwordInput).toHaveAttribute('type', 'text');
        fireEvent.click(toggleButton);

        expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('navigates to login page on clicking Login link', () => {
        render(
            <BrowserRouter>
                <SignUpComponent />
            </BrowserRouter>
        );

        const loginLink = screen.getByText(/Login/i);

        expect(loginLink).toBeInTheDocument();
        expect(loginLink).toHaveAttribute('href', '/');
    });
});
