import React from 'react';
import "./Menu.css"



export default function Menu() {
    return (
        
        <div className="container mt-5">
            <hr className="my-4" />
            <div className="heading">
                <h3>Discover</h3>
                <h1>OUR MENU</h1>
            </div>
            <div className="row d-flex justify-content-between" data-masonry='{"percentPosition": true }'>
                <div className="col-sm-6 col-lg-6 mb-4">
                    <div className="card">
                        <img src="https://plus.unsplash.com/premium_photo-1700752343056-e89926bf5ff9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" className="card-img" width="100%" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" className="card-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D" alt="" className="card-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-6 mb-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" className="card-img" width="100%" height="320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-6 mb-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1671393002836-487b4cc61a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpa2VufGVufDB8fDB8fHww" alt="" className="card-img" width="100%" height="320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false" />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxmb29kfGVufDB8fDB8fHww" alt="" className="card-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false" />
                    </div>
                </div>


            </div>
        </div>

    );
}
