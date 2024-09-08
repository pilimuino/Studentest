import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import UploadButton from '@/components/button/UploadButton';

describe('UploadButton', () => {
    it('renders correctly with the correct text', () => {
        render(
        <BrowserRouter> 
            <UploadButton />
        </BrowserRouter>
        );

    const uploadbuttonElement = screen.getByRole('button', { name: /Upload document/i });
    expect(uploadbuttonElement).toBeInTheDocument();

    expect(uploadbuttonElement).toHaveClass('bg-white');
    expect(uploadbuttonElement).toHaveClass('text-[#a6a6a6]');
    expect(uploadbuttonElement).toHaveClass('border');
    expect(uploadbuttonElement).toHaveClass('border-[#a6a6a6]');
    expect(uploadbuttonElement).toHaveClass('font-semibold');
    expect(uploadbuttonElement).toHaveClass('py-2');
    expect(uploadbuttonElement).toHaveClass('px-2');
    expect(uploadbuttonElement).toHaveClass('rounded-full');
    expect(uploadbuttonElement).toHaveClass('shadow-lg');
    expect(uploadbuttonElement).toHaveClass('hover:text-[#068ca4]');

    expect(uploadbuttonElement).toHaveStyle({ width: '180px', height: '53px' });
    });
});