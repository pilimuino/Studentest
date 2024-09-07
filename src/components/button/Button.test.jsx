import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Button from '@/components/button/Button';

describe('Button', () => {
  it('renders correctly with the correct text', () => {
    render(
      <BrowserRouter> 
        <Button />
      </BrowserRouter>
    );

    const buttonElement = screen.getByRole('button', { name: /Student Test/i });
    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toHaveClass('bg-white');
    expect(buttonElement).toHaveClass('text-[#a6a6a6]');
    expect(buttonElement).toHaveClass('border');
    expect(buttonElement).toHaveClass('border-[#a6a6a6]');
    expect(buttonElement).toHaveClass('font-semibold');
    expect(buttonElement).toHaveClass('py-4');
    expect(buttonElement).toHaveClass('px-8');
    expect(buttonElement).toHaveClass('rounded-full');
    expect(buttonElement).toHaveClass('shadow-lg');
    expect(buttonElement).toHaveClass('hover:text-[#068ca4]');

    expect(buttonElement).toHaveStyle({ width: '250px', height: '53px' });
  });
});
