import React from 'react' 
import { useLocation } from 'react-router'
import './ProductDetail.css'; 

export default function ProductDetail() {

    const location = useLocation();

    const product = location.state

    return (
        <div className='detail-product-box'>
            <h2>Product Detail Page</h2>
            
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>{product.category}</h4>
            <h3>Rs.{product.price}</h3>

        </div>
    )
}