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
}

export const Dropdown: FC<Props> = ({ dropdown }) => {
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
      {isOpen &&
        dropdown.items.map((item) => {
          if (item.nest) {
            return <Dropdown dropdown={item.nest} />
          }
          return (
            <div className="dropdown-item_wrapper" key={item.id}>
              <p className="dropdown-item_text ">{item.itemLabel}</p>
              <AdjustmentsIcon className="setting_icon" />
            </div>
          )
        })}
    </div>
  )
}
