import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '.'

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
  required: true
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
