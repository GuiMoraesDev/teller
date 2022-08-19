import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Avatar from '.'

const Storie = {
  title: 'Components/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

export default Storie

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
  src: 'https://i.pravatar.cc/150?id=50',
	alt: 'avatar placeholder'
}

export const Bordered = Template.bind({})

Bordered.args = {
  src: 'https://i.pravatar.cc/150?id=50',
	alt: 'avatar placeholder',
	isBordered: true,
}
