import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from '.';

const Storie = {
	title: 'Patterns/Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

export default Storie;

const Template: ComponentStory<typeof Modal> = (args) => (
	<Modal {...args}>Your content here</Modal>
);

export const Default = Template.bind({});

Default.args = {};
