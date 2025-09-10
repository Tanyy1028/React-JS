import React from 'react'
import "./Book.css"

export default function Book() {
  return (
    <div>

      <div className="container jet">
        <hr className="my-4" />
        <div className="py-5 text-center">
          <h2>BOOK TABLE</h2>
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-3 order-md-last">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>


          <div className="col-md-7 col-lg-6">
            <form className="needs-validation" noValidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    defaultValue=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Date</label>
                  <input type="date" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Person</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Email</label>
                  <input type="email" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>


              <hr className="my-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    defaultChecked=""
                    required=""
                  />
                  <label className="form-check-label " htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">Name on card is required</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Expiration date required</div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-dark  btn-lg" type="submit">
                BOOK TABLE
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="container-fluid bg-dark text-light pt-5 pb-4 mt-5">
          <div className="container text-md-left">
            <div className="row text-md-left">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">PATO Restaurant</h5>
                <p>
                  A modern dining experience blending taste and atmosphere. Located in the heart of the city.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Menu</h5>
                <p><a href="#" className="text-light text-decoration-none">Lunch</a></p>
                <p><a href="#" className="text-light text-decoration-none">Dinner</a></p>
                <p><a href="#" className="text-light text-decoration-none">Desserts</a></p>
                <p><a href="#" className="text-light text-decoration-none">Drinks</a></p>
              </div>


              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                <p><i className="bi bi-geo-alt-fill me-2"></i>123 Main Street, City</p>
                <p><i className="bi bi-envelope-fill me-2"></i>info@pato.com</p>
                <p><i className="bi bi-telephone-fill me-2"></i>+123 456 7890</p>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow us</h5>
                <a href="#" className="text-light me-4"><i className="bi bi-facebook fs-4"></i></a>
                <a href="#" className="text-light me-4"><i className="bi bi-instagram fs-4"></i></a>
                <a href="#" className="text-light me-4"><i className="bi bi-twitter-x fs-4"></i></a>
                <a href="#" className="text-light"><i className="bi bi-youtube fs-4"></i></a>
              </div>

            </div>

            <hr className="my-3 text-light" />
            <div className="row align-items-center">
              <div className="col-md-8 col-lg-8">
                <p>© {new Date().getFullYear()} PATO Restaurant. All Rights Reserved.</p>
              </div>
              <div className="col-md-4 col-lg-4 text-md-end">
                <a href="#" className="text-light"><i className="bi bi-arrow-up-circle fs-4"></i></a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}
