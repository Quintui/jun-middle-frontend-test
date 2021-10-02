import { PlusIcon } from '@heroicons/react/solid'
import React from 'react'

import './index.css'

export interface IProps {}
export const Example: React.FC<IProps> = () => {
  return (
    <div className="container">
      <div className="title-wrapper">
        <h5>Saved Graphs</h5>
        <PlusIcon className="plus-icon" />
      </div>
    </div>
  )
}
