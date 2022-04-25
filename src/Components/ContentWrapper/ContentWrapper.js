import React from 'react'
import './ContentWrapper.sass'

export const ContentWrapper = ({ header, children }) => {
  return (
    <div className='contentWrapper'>
      <h2 className='header'>{header}</h2>
      {children}
    </div>
  )
}
