import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../Store/Slices/AmountSlice'

const Shop = () => {

  const dispatch = useDispatch();
  const quality = useSelector((state) => state.counter.value);

  return (
    <div className='container'>
      <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - 2 items</h5>
          </div>
          <div className="card-body">
             
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    {/*eslint-disable-next-line */}
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    className="w-100" alt="Blue Jeans Jacket" />
                  <a href="/">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>Blue denim shirt</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                  <button style={{height: '50px'}}  className="btn btn-primary px-3 me-2"
                     onClick={()=> dispatch(decrement())}
                     >
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="form-outline">
                    <input id="form1" min="0" name="quantity" value={quality} type="number" className="form-control" />
                    <label className="form-label" htmlFor="form1">Quantity</label>
                  </div>
                  <button style={{height: '50px'}} className="btn btn-primary px-3 ms-2"
                    onClick={() => dispatch(increment())} >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <p className="text-start text-md-center">
                  <strong>$17.99</strong>
                </p>
              </div>
            </div>

            <hr className="my-4" />

            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    {/*eslint-disable-next-line */}
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                    className="w-100" />
                  <a href="/">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>Red hoodie</strong></p>
                <p>Color: red</p>
                <p>Size: M</p>
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                  <button style={{height: '50px'}} className="btn btn-primary px-3 me-2"
                    onClick={()=> dispatch(decrement())}>
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="form-outline">
                    <input id="form1" min="0" name="quantity" value= {quality} type="number" className="form-control" />
                    <label className="form-label" htmlFor="form1">Quantity</label>
                  </div>
                  <button style={{height: '50px'}} className="btn btn-primary px-3 ms-2"
                    onClick={() => dispatch(increment())} >
                    <i className="fas fa-plus"></i>
                  </button>
                </div> 
                <p className="text-start text-md-center">
                  <strong>$17.99</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Shop
