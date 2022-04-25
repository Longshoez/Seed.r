import React from 'react'
import './UserCard.sass'

export const UserCard = ({ pic, username, handle, bio }) => {
  return (
    <div className="container">
      <div className="userPic">
        <img src={pic} alt={username} srcset="" />
      </div>
      <div className="head">
        <h2>{username}</h2>
        <h4>{handle}</h4>
        <p>
          {bio}
        </p>
      </div>
    </div>
  )
}
