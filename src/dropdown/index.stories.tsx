import { Story, Meta } from '@storybook/react'
import React from 'react'

import { Example, Props } from '.'

export default {
  title: 'Example',
  component: Example,
} as Meta

const Template: Story<Props> = (args) => <Example {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Material design presets',
  dropdown: [
    {
      id: '1',
      label: 'test',
      items: [
        {
          id: '1',
          itemLabel: 'Item label',
          nest: {
            id: '1',
            label: 'Nested item label',
            items: [
              {
                itemLabel: 'nested item label 1  ',
                id: '1',
              },
            ],
          },
        },
        {
          id: '2',
          itemLabel: 'Item 2 label',
        },
        {
          id: '3',
          itemLabel: 'Item 3 label',
        },
      ],
    },
    {
      id: '2',
      label: 'test',
      items: [
        {
          id: '2',
          itemLabel: 'Item label',
          nest: {
            id: '2',
            label: 'Nested item label',
            items: [
              {
                itemLabel: 'nested item label 1 ',
                id: '2',
              },
            ],
          },
        },
        {
          id: '3',
          itemLabel: 'Item 2 label',
        },
        {
          id: '4',
          itemLabel: 'Item 3 label',
        },
      ],
    },
  ],
}
