import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextArea from '.';

const Storie = {
  title: 'Components/Text area',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

export default Storie;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});

Default.args = {};
