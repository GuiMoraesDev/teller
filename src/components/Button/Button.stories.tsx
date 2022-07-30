import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '.'

const Storie = {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

export default Storie

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const PrimaryVariant = Template.bind({})

PrimaryVariant.args = {
  type: 'button',
  label: 'Random Button',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'primary'
}

export const SecondaryVariant = Template.bind({})

SecondaryVariant.args = {
  type: 'button',
  label: 'Random Button',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'secondary'
}

export const NeutralVariant = Template.bind({})

NeutralVariant.args = {
  type: 'button',
  label: 'Random Button',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'neutral'
}

export const OutlineVariant = Template.bind({})

OutlineVariant.args = {
  type: 'button',
  label: 'Random Button',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'outline'
}

export const AlertVariant = Template.bind({})

AlertVariant.args = {
  type: 'button',
  label: 'Random Button',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'alert'
}

export const DisabledVariant = Template.bind({})

DisabledVariant.args = {
  type: 'button',
  label: 'Disabled Button',
  fullWidth: false,
  disabled: true,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'primary'
}

export const RoundedVariant = Template.bind({})

RoundedVariant.args = {
  type: 'button',
  label: 'Random Button',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'full',
  variant: 'primary'
}

export const IconBasic = Template.bind({})

IconBasic.args = {
  type: 'button',
  iconLeft: 'Plus',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'primary'
}

export const LabelIconLeftBasic = Template.bind({})

LabelIconLeftBasic.args = {
  type: 'button',
  label: 'Random Button',
  iconLeft: 'Leaf',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'primary'
}

export const LabelIconRightBasic = Template.bind({})

LabelIconRightBasic.args = {
  type: 'button',
  label: 'Random Button',
  iconRight: 'Plus',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'primary'
}

export const LabelIconLeftRightBasic = Template.bind({})

LabelIconLeftRightBasic.args = {
  type: 'button',
  label: 'Random Button',
  iconLeft: 'Plus',
  iconRight: 'Minus',
  fullWidth: false,
  dimension: 'sm',
  rounded: 'sm',
  variant: 'primary'
}
