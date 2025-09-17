import React from 'react'
import { useNavigate } from 'react-router'
import "./Home.css";

export default function Home({ products, setCartList }) {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Home Page</h2>
            <div className="products-view">
                {
                    products.map((product, index) => <div key={index} className='product-box'>

                        <h3>{product.title}</h3>
                        <h3>Rs.{product.price}</h3>
                        <h4>{product.category}</h4>

                        <button onClick={() => {
                            console.log(product);
                            navigate("/products", { state: product })
                        }}>View</button>

                        <button className='btn-primary' onClick={() => {
                            setCartList(prev => [...prev, product]);
                            navigate("/carts");
                        }}>Add to cart</button>

                    </div>)
                }
            </div>
        </div>
    )
}
