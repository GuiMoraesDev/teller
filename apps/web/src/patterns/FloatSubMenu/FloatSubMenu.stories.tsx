import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import FloatSubMenu from '.';

const Storie = {
	title: 'Patterns/FloatSubMenu',
	component: FloatSubMenu,
} as ComponentMeta<typeof FloatSubMenu>;

export default Storie;

const Template: ComponentStory<typeof FloatSubMenu> = (args) => (
	<FloatSubMenu {...args} />
);

export const Default = Template.bind({});

Default.args = {
	ActionComponent: <span>Controller</span>,
	submenuComponents: [
		<p key="menu-item-1">Menu item 1</p>,
		<p key="menu-item-2">Menu item 2</p>,
		<p key="menu-item-3">Menu item 3</p>,
	],
};
