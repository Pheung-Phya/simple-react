import React from 'react'

const Detail = ({product}) => {
  return (
      <div className="row">
          {/* Product Images */}
          <div className="col-lg-6 mb-4">
              <div className="position-relative">
                  <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid rounded shadow"
                      style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                  />

              </div>
          </div>

          {/* Product Information */}
          <div className="col-lg-6">
              <div className="mb-3">
                  <h1 className="display-5 fw-bold mb-2">{product.name}</h1>
                  <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="text-muted">({product.reviewCount} reviews)</span>
                  </div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="h3 text-primary fw-bold mb-0">${product.price}</span>
                      <span className="text-decoration-line-through text-muted">${product.originalPrice}</span>
                      <span className="badge bg-success">{product.discountPercentage}% OFF</span>
                  </div>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                  <h5 className="fw-bold mb-3">Color</h5>
                  <div className="d-flex gap-2 flex-wrap">
                      {product.colors?.map((color, index) => (
                          <button
                              key={index}
                              className="btn btn-outline-secondary px-3 py-2"
                          >
                              {color}
                          </button>
                      ))}
                  </div>
              </div>

              {/* Storage Selection */}
              <div className="mb-4">
                  <h5 className="fw-bold mb-3">Storage</h5>
                  <div className="d-flex gap-2 flex-wrap">
                      {product.storage?.map((storage, index) => (
                          <button
                              key={index}
                              className="btn btn-outline-secondary px-3 py-2"
                          >
                              {storage}
                          </button>
                      ))}
                  </div>
              </div>

              <div className="mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="text-muted">{product.stockCount} in stock</span>
                  </div>
              </div>

              {/* Product Highlights */}
              <div className="mb-4">
                  <h5 className="fw-bold mb-3">Highlights</h5>
                  <div className="row g-2">
                      {product.features?.slice(0, 6).map((feature, index) => (
                          <div key={index} className="col-6">
                              <div className="d-flex align-items-center gap-2">
                                  <i className="fas fa-check text-success"></i>
                                  <small>{feature}</small>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Detail