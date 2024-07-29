import { fireEvent, render,screen } from '@testing-library/react';
import React from 'react';
import { withTranslation } from 'react-i18next';
import {Sidebar} from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import componentRender from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('with one param',() => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        componentRender(<SidebarWithTranslation/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    }); 

    test('test toggle',() => {
        componentRender(<Sidebar/>);
        const Toggle = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(Toggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    }); 
})