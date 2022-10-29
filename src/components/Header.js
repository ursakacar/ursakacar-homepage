import React from 'react'

import config from '../../config'
import avatar from'../assets/images/avatar.jpg'

export default function Footer() {
  return (
    <header>
      <span className="avatar">
        <img height="200px" src={avatar} alt="" />
      </span>
      <h1>{config.authorName}</h1>
    </header>
  )
}
