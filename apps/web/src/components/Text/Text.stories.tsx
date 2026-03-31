import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Text from '.'

const Storie = {
  title: 'Components/Text',
  component: Text
} as ComponentMeta<typeof Text>

export default Storie

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

const defaultArgs = {
  label: 'Random Text',
  fullWidth: false,
  isDisabled: false
}

export const DisplayTextBasic = Template.bind({})

DisplayTextBasic.args = {
  ...defaultArgs,
  dimension: 'display1'
}

export const Heading1TextBasic = Template.bind({})

Heading1TextBasic.args = {
  ...defaultArgs,
  dimension: 'heading1'
}

export const Heading2TextBasic = Template.bind({})

Heading2TextBasic.args = {
  ...defaultArgs,
  dimension: 'heading2'
}

export const Heading3TextBasic = Template.bind({})

Heading3TextBasic.args = {
  ...defaultArgs,
  dimension: 'heading3'
}

export const Heading4TextBasic = Template.bind({})

Heading4TextBasic.args = {
  ...defaultArgs,
  dimension: 'heading4'
}

export const Heading5TextBasic = Template.bind({})

Heading5TextBasic.args = {
  ...defaultArgs,
  dimension: 'heading5'
}

export const Body1TextBasic = Template.bind({})

Body1TextBasic.args = {
  ...defaultArgs,
  dimension: 'body1'
}

export const Body2TextBasic = Template.bind({})

Body2TextBasic.args = {
  ...defaultArgs,
  dimension: 'body2'
}

export const Body3TextBasic = Template.bind({})

Body3TextBasic.args = {
  ...defaultArgs,
  dimension: 'body3'
}

export const Body4TextBasic = Template.bind({})

Body4TextBasic.args = {
  ...defaultArgs,
  dimension: 'body4'
}
