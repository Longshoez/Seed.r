import React from 'react'
import './Posts.sass'
import { BsHeart } from 'react-icons/bs'

export const Post = ({ picture, title, handle, description, likes }) => {
  return (
    <div className='post'>
      <img src={picture} alt={picture} />
      <div>
        <div>
          <h3>@{handle}<span>•</span>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <BsHeart />
          <p>{likes}</p>
        </div>
      </div>

    </div>
  )
}
