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
      label: 'Folder',
      items: [
        {
          id: '1',
          itemLabel: 'Subfolder',
          nest: {
            id: '1',
            label: 'Icons',
            items: [
              {
                itemLabel: 'Icon 1',
                id: '1',
              },
              {
                itemLabel: 'Icon 2',
                id: '2',
              },
            ],
          },
        },
        {
          id: '2',
          itemLabel: 'Profile Setting',
        },
        {
          id: '3',
          itemLabel: 'User appearance',
        },
      ],
    },
    {
      id: '2',
      label: 'Folder 2',
      items: [
        {
          id: '2',
          itemLabel: 'Subfolder',
          nest: {
            id: '2',
            label: 'Images',
            items: [
              {
                itemLabel: 'Image 1',
                id: '2',
              },
              {
                itemLabel: 'Image 2',
                id: '3',
              },
            ],
          },
        },
        {
          id: '3',
          itemLabel: 'User Setting',
        },
      ],
    },
  ],
}
