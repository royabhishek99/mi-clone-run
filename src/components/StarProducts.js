import React from 'react'
import '../styles/StarProduct.css'

const StarProducts = ({starProducts}) => {
    return (
        <div className='starProducts'>
            <div> <a href={starProducts[0].url}><img src={starProducts[0].image} alt="1st Product"/></a> </div>
            <div>
                <a href={starProducts[1].url}><img src={starProducts[1].image} alt="2st Product"/></a>
                <a href={starProducts[2].url}><img src={starProducts[2].image} alt="3st Product"/></a>
                <a href={starProducts[3].url}><img src={starProducts[3].image} alt="4st Product"/></a>
            </div>
        </div>
        
    )
}

export default StarProducts
