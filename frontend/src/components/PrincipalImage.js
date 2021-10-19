import React from 'react'
import { Image } from 'react-bootstrap'
import './principalimage.css'

export const PrincipalImage = () => {
    const image = 'img/galaxia.jpg'
    return (
        <div>
            <Image className="image" src={image} fluid />
        </div>
    )
}
