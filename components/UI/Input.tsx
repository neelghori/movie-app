import { InputProps } from '@movieapp/Types/components'
import React from 'react'

const Input:React.FC<InputProps> = (props) => {
  return (
    <div>
        <input {...props} className={`${props.className ??""}`}/>
    </div>
  )
}

export default Input
