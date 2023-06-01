import React from 'react'
import './ProponerPopup.css'

export const ProponerPopup = () => {
  return (
    <div className='proponerPopup'>
      <p style={{ fontWeight: '700' }}>Identificaste una oportunidad para clasificar mejor las soluciones que recomendamos a las PyMEs</p>
      <hr />
      <p>Explicanos claramente que mejorarias:</p>
      <input type="textbox" placeholder='Agregarias una subcategoria o reto de crecimiento? /n En que area? Mientras mas detalles nos des, mejor.' name="" id="" />
    </div>
  )
}
