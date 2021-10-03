import React from 'react'
import ProductCard from './ProductCard.js';
import '../styles/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
    return (
        <div className='productReview'>
            {productReviews.map((item,index)=>(
                <ProductCard key={item.image} image={item.image} review={item.review} name={item.name} price={item.price} index={index}/> 
            ))}
        </div>
    )
}

export default ProductReviews
