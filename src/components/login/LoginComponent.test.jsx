import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginComponent from './LoginComponent'; 

describe('LoginComponent', () => {
    it('renders the form fields correctly', () => {
        render(
            <BrowserRouter>
                <LoginComponent />
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
                <LoginComponent />
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

    it('calls handleDeleteAccount on delete button click', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
        render(
            <BrowserRouter>
                <LoginComponent />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText(/Delete account/i));
        expect(alertMock).toHaveBeenCalledWith('Account deleted');
        alertMock.mockRestore();
    });

    it('navigates to signup page on clicking Sign Up link', () => {
        render(
            <BrowserRouter>
                <LoginComponent />
            </BrowserRouter>
        );

        const signUpLink = screen.getByText(/Sign Up/i);
        expect(signUpLink).toBeInTheDocument();
        expect(signUpLink).toHaveAttribute('href', '/signup');
    });
});
