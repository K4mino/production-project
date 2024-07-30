import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '../../../app/providers/ThemeProvider';
import Modal from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text lorem ipsum asd q dasdasd asd qw',
};
