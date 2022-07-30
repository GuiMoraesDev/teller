import React from 'react'

import { render } from 'tests/test.utils'

import TextArea from './index'

describe('TextArea component', () => {
  it('should render correctly', () => {
    const { container } = render(<TextArea id="test-TextArea" />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render visible', () => {
    const { container } = render(<TextArea id="test-TextArea" />)

    expect(container.firstChild).toBeVisible()
  })
})
