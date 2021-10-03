import React from 'react'
import {Link} from "react-router-dom"
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
    return (
        <div className='htm'>
            <Link className='htmlink' to='/music'>Music Store</Link>
            <Link className='htmlink' to='/smartdevices'>Smart Devices</Link>
            <Link className='htmlink' to='/home'>Home</Link>
            <Link className='htmlink' to='/lifestyle'>Lifestyle</Link>
            <Link className='htmlink' to='/ma'>Mobile Accessories</Link>
        </div>
    )
}

export default HotAccessoriesMenu
