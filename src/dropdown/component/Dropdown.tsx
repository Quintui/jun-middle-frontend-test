import React, { FC, useState } from 'react'
import { GoSettings } from 'react-icons/go'
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io'

import { DropdownType } from '../types'
import './Dropdown.css'

interface Props {
  dropdown: DropdownType
  depth: number
}

export const Dropdown: FC<Props> = ({ dropdown, depth }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} className="  dropdown_container ">
        {isOpen ? (
          <IoMdArrowDropdown className="arrow" />
        ) : (
          <IoMdArrowDropright className="arrow" />
        )}

        <h5 className="dropdown-label_text textwrap">{dropdown.label}</h5>
      </div>
      <div style={{ marginLeft: depth === 0 ? 7 : 7 * depth }}>
        {isOpen &&
          dropdown.items.map((item) => {
            if (item.nest) {
              return <Dropdown depth={depth + 1} dropdown={item.nest} />
            }
            return (
              <div className="dropdown-item_wrapper" key={item.id}>
                <p className="dropdown-item_text textwrap ">{item.itemLabel}</p>
                <GoSettings className="setting_icon" />
              </div>
            )
          })}
      </div>
    </div>
  )
}
