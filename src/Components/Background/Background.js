import React from 'react'
import './Background.sass'

export const Background = ({ pattern }) => {
  return (
    <div className={`bg ${pattern && pattern}`} style={{ backgroundImage: '' }}>

    </div>
  )
}
