import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import CreateButton from '@/components/button/CreateButton';

describe('CreateButton', () => {
    it('renders correctly with the correct text', () => {
        render(
        <BrowserRouter> 
            <CreateButton />
        </BrowserRouter>
        );

    const createbuttonElement = screen.getByRole('button', { name: /Create test/i });
    expect(createbuttonElement).toBeInTheDocument();

    expect(createbuttonElement).toHaveClass('bg-white');
    expect(createbuttonElement).toHaveClass('text-[#a6a6a6]');
    expect(createbuttonElement).toHaveClass('border');
    expect(createbuttonElement).toHaveClass('border-[#a6a6a6]');
    expect(createbuttonElement).toHaveClass('font-semibold');
    expect(createbuttonElement).toHaveClass('py-2');
    expect(createbuttonElement).toHaveClass('px-2');
    expect(createbuttonElement).toHaveClass('rounded-full');
    expect(createbuttonElement).toHaveClass('shadow-lg');
    expect(createbuttonElement).toHaveClass('hover:text-[#068ca4]');

    expect(createbuttonElement).toHaveStyle({ width: '180px', height: '53px' });
    });
});
