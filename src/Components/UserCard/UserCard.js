import React from 'react'
import './UserCard.sass'

export const UserCard = ({ pic, username, handle, bio, setColor, color = '#fff' }) => {
  return (
    <div className="container">
      <div className="userPic" style={{ border: `5px solid ${color}` }}>
        <img src={pic} alt={username} srcset="" />
      </div>
      <div className="head">
        <h2>{username}</h2>
        <h4>{handle}</h4>
        <p>
          {bio}
        </p>
      </div>

      <div className="userSettings">
        <label htmlFor="colorPicker">Color</label>
        <input type="color" name="colorPicker" id="" value={color} onChange={(e) => setColor(e.target.value)} />
        <br />

        <div>
          <label htmlFor="pattern">Pattern</label>
          <input type="radio" name="wavy" id="" />
          <input type="radio" name="zebra" id="" />
          <input type="radio" name="dot" id="" />
        </div>

        {/* <option value={'s'}>
          {'something'}
        </option> */}
      </div>
    </div>
  )
}
