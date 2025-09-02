import React from 'react'

const product = {
    "id": 1,
    "name": "iPhone 16 Pro Max",
    "slug": "iphone-16-pro-max",
    "category": {
        "id": 1,
        "name": "Premium"
    },
    "brand": {
        "id": 1,
        "name": "Apple"
    },
    "price": 1199,
    "originalPrice": 1299,
    "discount": 100,
    "discountPercentage": 7.7,
    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-finish-select-202409-6-9inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723666530533",
    "description": "The most advanced iPhone ever with titanium design, A18 Pro chip, and pro camera system.",
    "inStock": true,
    "stockCount": 25,
    "rating": 4.8,
    "reviewCount": 1547,
    "releaseDate": "2024-09-20",
    "weight": "221g",
    "colors": [
        "Natural Titanium",
        "Blue Titanium",
        "White Titanium",
        "Black Titanium"
    ],
    "storage": [
        "256GB",
        "512GB",
        "1TB"
    ],
    "warranty": "1 year",
    "features": [
        "6.9-inch Super Retina XDR",
        "A18 Pro chip",
        "Pro camera system",
        "Titanium design",
        "Action Button",
        "USB-C"
    ],
    "specifications": {
        "display": "6.9-inch Super Retina XDR OLED",
        "processor": "A18 Pro chip",
        "camera": "48MP + 12MP + 12MP",
        "battery": "4441 mAh",
        "os": "iOS 18"
    }
}

const DetailProductPage = () => {
  return (
    <div className="container-fluid px-3 py-4">
      {/* Header Section */}
      <section className="mb-4">
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
      </section>

      {/* Product Details Section */}
      <section className="mb-5">
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

            {/* Quantity and Add to Cart */}
            <div className="mb-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="d-flex align-items-center border rounded">
                  <button className="btn btn-outline-secondary border-0 rounded-0">-</button>
                  <span className="px-3 py-2">1</span>
                  <button className="btn btn-outline-secondary border-0 rounded-0">+</button>
                </div>
                <span className="text-muted">{product.stockCount} in stock</span>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-primary btn-lg flex-fill">
                  <i className="fas fa-shopping-cart me-2"></i>Add to Cart
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-bolt"></i>
                </button>
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
      </section>

      {/* Product Description */}
      <section className="mb-5">
        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0">
                <ul className="nav nav-tabs card-header-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab">Description</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="specifications-tab" data-bs-toggle="tab" data-bs-target="#specifications" type="button" role="tab">Specifications</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab">Reviews</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="description" role="tabpanel">
                    <p className="mb-0">{product.description}</p>
                  </div>
                  <div className="tab-pane fade" id="specifications" role="tabpanel">
                    <div className="row">
                      {Object.entries(product.specifications || {}).map(([key, value]) => (
                        <div key={key} className="col-md-6 mb-2">
                          <div className="d-flex justify-content-between">
                            <strong className="text-capitalize">{key}:</strong>
                            <span>{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="reviews" role="tabpanel">
                    <div className="text-center py-4">
                      <i className="fas fa-comments fa-3x text-muted mb-3"></i>
                      <p className="text-muted">Reviews will be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="mb-0">Related Products</h3>
          <button className="btn btn-outline-primary">View All</button>
        </div>
        <div className="row g-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="Related product"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h6 className="card-title">Related Product {item}</h6>
                  <p className="card-text text-primary fw-bold">$999</p>
                  <div className="d-flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fas fa-star text-warning"></i>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-light rounded p-4">
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
      </section>
    </div>
  )
}

export default DetailProductPage