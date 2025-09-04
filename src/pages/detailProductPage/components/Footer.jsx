import React from 'react'

const Footer = () => {
  return (
      <div className="row text-center">
          <div className="col-md-3">
              <i className="fas fa-shipping-fast fa-2x text-primary mb-2"></i>
              <h6>Free Shipping</h6>
              <small className="text-muted">Free shipping on orders over $500</small>
          </div>
          <div className="col-md-3">
              <i className="fas fa-undo fa-2x text-primary mb-2"></i>
              <h6>Easy Returns</h6>
              <small className="text-muted">30-day return policy</small>
          </div>
          <div className="col-md-3">
              <i className="fas fa-shield-alt fa-2x text-primary mb-2"></i>
              <h6>Secure Payment</h6>
              <small className="text-muted">100% secure payment</small>
          </div>
          <div className="col-md-3">
              <i className="fas fa-headset fa-2x text-primary mb-2"></i>
              <h6>24/7 Support</h6>
              <small className="text-muted">Customer support available</small>
          </div>
      </div>
  )
}

export default Footer