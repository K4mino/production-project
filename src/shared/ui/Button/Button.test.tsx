import { render,screen } from '@testing-library/react';
import React from 'react';
import Button, { ThemeButton } from './Button';

describe('Button', () => {
    test('with one param',() => {
        render(<Button>Text</Button>);
        expect(screen.getByText('Text')).toBeInTheDocument()
    }); 

    test('with class',() => {
        render(<Button theme={ThemeButton.CLEAR}>Text</Button>);
        expect(screen.getByText('Text')).toHaveClass('clear');
        screen.debug()
    }); 
})