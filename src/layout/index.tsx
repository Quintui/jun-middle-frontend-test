import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

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
        <h4 className="title-text">Saved Graphs</h4>
        <AiOutlinePlus className="plus-icon" />
      </div>

      {dropdown.map((item) => (
        <Dropdown key={item.id} dropdown={item} depth={0} />
      ))}
    </div>
  )
}
