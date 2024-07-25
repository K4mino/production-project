import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotfoundPage from './NotfoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'pages/NotfoundPage',
  component: NotfoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotfoundPage>;

const Template: ComponentStory<typeof NotfoundPage> = (args) => <NotfoundPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]