import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import SavePassword from '@/components/button/SavePassword'


describe('SavePassword', () => {
    it('renders correctly with the correct text', () => {
        render(
            <BrowserRouter>
                <SavePassword/>
            </BrowserRouter>
        );

        const savepasswordElement = screen.getByRole('button', { name: /Show password/i});
        expect(savepasswordElement).toBeInTheDocument();
        expect(savepasswordElement).toHaveClass('hover:bg-secondary');
        expect(savepasswordElement).toHaveClass('text-gray-400');
        expect(savepasswordElement).toHaveClass('border-gray-400');
        expect(savepasswordElement).toHaveClass('hover:text-white');
    });
});
