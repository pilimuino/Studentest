import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import TermsOfUse from '@/pages/TermsOfUse';

describe('TermsOfUSe', () =>{
    it('renders correctly with the correct text', () =>{
        render(
        <BrowserRouter>
            <TermsOfUse/>
        </BrowserRouter>
        );

        const titleElement = screen.getByRole('heading', { name: /OUR TERMS AND CONDITIONS/i });
        expect(titleElement).toBeInTheDocument();

        const subtitle1 = screen.getByRole('heading', { name: /THANK YOU FOR CHOOSING Studentest/i });
        const subtitle2 = screen.getByRole('heading', { name: /OUR DATA USER DATA/i });
        const subtitle3 = screen.getByRole('heading', { name: /REGISTRATION, PASSWORD AND ACCOUNT ACCESS/i });
        const subtitle4 = screen.getByRole('heading', { name: /USE OF THE SERVICE/i });
        const subtitle5 = screen.getByRole('heading', { name: /INDUSTRIAL AND INTELLECTUAL PROPERTY/i });

        expect(subtitle1).toBeInTheDocument();
        expect(subtitle2).toBeInTheDocument();
        expect(subtitle3).toBeInTheDocument();
        expect(subtitle4).toBeInTheDocument();
        expect(subtitle5).toBeInTheDocument();

    });

    it('contains the expected paragraphs with the correct text', () =>{
        render(
            <BrowserRouter>
                <TermsOfUse/>
            </BrowserRouter>
        );

        const paragraph1 = screen.getByText(/This document, together with our Data Protection Policy and Cookies Policy, establishes the conditions governing the use of this website/i);
        const paragraph2 = screen.getByText(/The information or personal data that you provide us about yourself will be treated in accordance with the provisions of our Data Protection Policy/i);
        const paragraph3 = screen.getByText(/During the registration process, the user will provide a username and password/i);
        const paragraph4 = screen.getByText(/In order to use our services, the user must register a user account on the Studentest website/i);
        const paragraph5 = screen.getByText(/The services and content offered by Studentest are the property of Studentest/i);

        expect(paragraph1).toBeInTheDocument();
        expect(paragraph2).toBeInTheDocument();
        expect(paragraph3).toBeInTheDocument();
        expect(paragraph4).toBeInTheDocument();
        expect(paragraph5).toBeInTheDocument();
    });
});
