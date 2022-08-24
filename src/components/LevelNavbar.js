import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LevelNavbar.css'

export const LevelNavbar = () => {
  return (
    <div className='level-navbar'>
        <div className='nav-items'>
            <Link to='/'>Return to home</Link>
        </div>
    </div>
  )
}
