import React from 'react'
import './ClickableComponent.sass'


export const ClickableComponent = ({ header, children, edata, color = 'red' }) => {
  return (
    <div className="clickableComponent" style={{ backgroundColor: color }}>
      <div>
        {children}
        <p>{header}</p>
      </div>
      <p>{edata}</p>
    </div>
  )
}
