import React, { useState } from 'react'
import './Header.css'

export const Header = ({pic, username, handle, bio, pattern, bg_color}) => {

  const [toggle, setToggle] = useState(true)

  return (
    <div className={toggle ? 'header' : 'headerSmall'}>
      <div className={'headerHead'}>
        <div className={`patternBg ${pattern}`} style={{backgroundColor: bg_color}}></div>
        <div className={toggle ? 'userPic' : 'smallUserPic'}> <img src={pic} alt={username}/></div>
      </div>
      <div className='userData' onClick={() => setToggle(!toggle)}>        
        <h2 className='userTitle'> {username} </h2>
        <h4 className='userHandle'>@{handle}</h4>
        <p className='userBio'>{bio}</p>
      </div>
    </div>
  )
}