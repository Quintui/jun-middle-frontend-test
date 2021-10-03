import { PlusIcon } from '@heroicons/react/solid'
import React from 'react'

import { Dropdown } from './component/Dropdown'
import './index.css'
import { DropdownType } from './types'

export interface Props {
  title: string
  dropdown: DropdownType[]
}
export const Example: React.FC<Props> = ({ dropdown }) => {
  return (
    <div className="container">
      <div className="title-wrapper">
        <h5 className="title-text">Saved Graphs</h5>
        <PlusIcon className="plus-icon" />
      </div>
      {dropdown.map((item) => (
        <Dropdown key={item.id} dropdown={item} />
      ))}
    </div>
  )
}
