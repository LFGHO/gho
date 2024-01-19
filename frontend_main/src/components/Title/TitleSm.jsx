import React from 'react'
import {color} from '../../theme'

function TitleSm(props) {
  return (
    <div style={{color: color.text}} className='text-center'>
      <div className='text-xl md:text-2xl font-semibold'>{props.children}</div>
    </div>
  )
}

export default TitleSm