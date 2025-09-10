import React from 'react'
import './Hero.css'
export default function Hero() {
    return (
        <div className='body'>
            <div className="hero">
                <div className="row py-lg-4 gx-0">
                <div className="content col-lg-4 col-md-8  mx-auto">
                    <h1 className="fw-light">Welcom To </h1>
                    <h2 className="fw-light">PATO PLACE </h2>
                    <p className='d-flex gap-3'>
                        <a href="/Restaurant/src/components/" className="btn btn-dark text-decoration-none">
                            LOOK MENU
                        </a>
                    </p>
                </div>
            </div>
            </div>
        </div>
    )   
}

