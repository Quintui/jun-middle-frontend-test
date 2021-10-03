import React, { FC, useState } from 'react'

import { DropdownType } from '../types'

interface Props {
  dropdown: DropdownType
}

export const Dropdown: FC<Props> = ({ dropdown }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h6 onClick={() => setIsOpen(!isOpen)}>{dropdown.label}</h6>
      {isOpen &&
        dropdown.items.map((item) => {
          if (item.nest) {
            return <Dropdown dropdown={item.nest} />
          }
          return <p key={item.id}>{item.itemLabel}</p>
        })}
    </div>
  )
}
