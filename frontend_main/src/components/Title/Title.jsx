import React from 'react'
import {color} from '../../theme'

function Title(props) {
  return (
    <div style={{color: color.text}} className='text-center my-8 md:my-10'>
      <div className='text-2xl md:text-3xl font-semibold'>{props.children}</div>
    </div>
  )
}

export default Title