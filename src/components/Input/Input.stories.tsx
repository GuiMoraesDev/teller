import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '.'
import { Plus } from 'phosphor-react'

const Storie = {
  title: 'Components/Input',
  component: Input
} as ComponentMeta<typeof Input>

export default Storie

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Random Input',
  dimension: 'sm',
  rounded: 'sm'
}

export const DefaultRequired = Template.bind({})

DefaultRequired.args = {
  label: 'Random Input',
  dimension: 'sm',
  rounded: 'sm',
  isRequired: true
}

export const DefaultNoLabel = Template.bind({})

DefaultNoLabel.args = {
  dimension: 'sm',
  rounded: 'sm'
}

export const DefaultWithError = Template.bind({})

DefaultWithError.args = {
  label: 'Random Input',
  dimension: 'sm',
  rounded: 'sm',
  error: 'required'
}

export const Password = Template.bind({})

Password.args = {
  label: 'Random Input',
  type: 'password',
  dimension: 'sm',
  rounded: 'sm'
}


export const DefaultIconLeft = Template.bind({})

DefaultIconLeft.args = {
	label: 'Random Input',
  dimension: 'sm',
  rounded: 'sm',
	PlaceholderIconLeft: <Plus />,
}

export const DefaultIconRight = Template.bind({})

DefaultIconRight.args = {
  label: 'Random Input',
  dimension: 'sm',
  rounded: 'sm',
	PlaceholderIconRight: <Plus />,
}

export const DefaultIconLeftAndRight = Template.bind({})

DefaultIconLeftAndRight.args = {
  label: 'Random Input',
  dimension: 'sm',
  rounded: 'sm',
	PlaceholderIconLeft: <Plus />,
	PlaceholderIconRight: <Plus />,
}
