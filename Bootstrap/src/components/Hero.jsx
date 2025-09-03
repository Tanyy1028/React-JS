import React from 'react'

export default function Hero() {
    return (
        <div>
            <div className="row py-lg-4 gx-0">
                <div className="col-lg-4 col-md-8  mx-auto">
                    <h1 className="fw-light">NewsPaper.Com</h1>
                    <p className="lead text-muted">
                       A newspaper about page typically refers to a newspaper page that contains information about the publication itself, such as its mission, history, and contact information, rather than news stories. It could also refer to the first page of a newspaper, which is the front page and serves to capture attention with the day's most significant headlines and stories.
                    </p>
                    <p className='d-flex gap-3'>
                        <a href="https://indianexpress.com/" className="btn btn-primary my-2">
                            The Indian Express 
                        </a>
                        <a href="https://www.hindustantimes.com/" className="btn btn-primary my-2">
                            Hindustan Time
                        </a>
                        <a href="https://www.indiatoday.in/" className="btn btn-primary my-2">
                            India Today
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )   
}

