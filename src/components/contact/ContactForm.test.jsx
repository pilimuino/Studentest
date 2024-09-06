import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactForm from './ContactForm';

describe('ContactForm Component', () => {
    it('renders correctly with all form elements', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByPlaceholderText('Name');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('type', 'text');

    const lastNameInput = screen.getByPlaceholderText('Last name');
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveAttribute('type', 'text');

    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');

    const phoneInput = screen.getByPlaceholderText('Phone');
    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).toHaveAttribute('type', 'tel');

    const messageTextarea = screen.getByPlaceholderText('Message');
    expect(messageTextarea).toBeInTheDocument();

    const sendButton = screen.getByRole('button', { name: /send/i });
    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toHaveAttribute('type', 'submit');
    });
});
