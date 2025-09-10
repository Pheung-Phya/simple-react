import React from 'react'

const Header = () => {
  return (
      <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-secondary">
              <i className="fas fa-arrow-left me-2"></i>Back
          </button>
          <h2 className="mb-0">Product Details</h2>
          <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary">
                  <i className="fas fa-heart"></i>
              </button>
              <button className="btn btn-outline-secondary">
                  <i className="fas fa-share"></i>
              </button>
          </div>
      </div>
  )
}

export default Header