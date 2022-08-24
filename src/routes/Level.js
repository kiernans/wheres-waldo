import React from 'react'
import { LevelNavbar } from '../components/LevelNavbar'
import '../styles/Level.css'

export const Level = ({ image, level, characters }) => {
    


    return (
        <>
            <LevelNavbar />
            <div className='level-image'>
                <img src={image} alt=''/>
            </div>
        </>
        
    )
}
