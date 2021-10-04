import {
  AdjustmentsIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid'
import React, { FC, useState } from 'react'

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
          <ChevronDownIcon className="arrow" />
        ) : (
          <ChevronRightIcon className="arrow" />
        )}

        <h5 className="dropdown-label_text">{dropdown.label}</h5>
      </div>
      <div style={{ marginLeft: depth === 1 ? 5 : 5 * depth }}>
        {isOpen &&
          dropdown.items.map((item) => {
            if (item.nest) {
              return <Dropdown depth={depth + 1} dropdown={item.nest} />
            }
            return (
              <div className="dropdown-item_wrapper" key={item.id}>
                <p className="dropdown-item_text ">{item.itemLabel}</p>
                <AdjustmentsIcon className="setting_icon" />
              </div>
            )
          })}
      </div>
    </div>
  )
}
