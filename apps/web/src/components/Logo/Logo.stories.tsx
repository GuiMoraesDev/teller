import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Logo from '.';

const Storie = {
	title: 'Components/Logo',
	component: Logo,
} as ComponentMeta<typeof Logo>;

export default Storie;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const DefaultTypeIcon = Template.bind({});

DefaultTypeIcon.args = {
	type: 'icon',
};

export const DefaultTypeLogo = Template.bind({});

DefaultTypeLogo.args = {
	type: 'logo',
};
