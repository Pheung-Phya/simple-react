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


const products = [
  {
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
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S24 Ultra",
    "slug": "samsung-galaxy-s24-ultra",
    "category": {
      "id": 1,
      "name": "Premium"
    },
    "brand": {
      "id": 2,
      "name": "Samsung"
    },
    "price": 1099,
    "originalPrice": 1199,
    "discount": 100,
    "discountPercentage": 8.3,
    "image": "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-ultra-s928-sm-s928bzthins-thumb-539756222?$650_519_PNG$",
    "description": "Ultimate Galaxy experience with S Pen, 200MP camera, and Galaxy AI features.",
    "inStock": true,
    "stockCount": 18,
    "rating": 4.7,
    "reviewCount": 2341,
    "releaseDate": "2024-01-24",
    "weight": "232g",
    "colors": [
      "Titanium Black",
      "Titanium Gray",
      "Titanium Violet",
      "Titanium Yellow"
    ],
    "storage": [
      "256GB",
      "512GB",
      "1TB"
    ],
    "warranty": "1 year",
    "features": [
      "6.8-inch Dynamic AMOLED 2X",
      "Snapdragon 8 Gen 3",
      "200MP camera",
      "S Pen included",
      "Galaxy AI",
      "Titanium frame"
    ],
    "specifications": {
      "display": "6.8-inch Dynamic AMOLED 2X",
      "processor": "Snapdragon 8 Gen 3",
      "camera": "200MP + 50MP + 10MP + 12MP",
      "battery": "5000 mAh",
      "os": "Android 14 with One UI 6.1"
    }
  },
  {
    "id": 3,
    "name": "OnePlus 12",
    "slug": "oneplus-12",
    "category": {
      "id": 2,
      "name": "Flagship"
    },
    "brand": {
      "id": 3,
      "name": "OnePlus"
    },
    "price": 799,
    "originalPrice": 899,
    "discount": 100,
    "discountPercentage": 11.1,
    "image": "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/products/12/specs/Flowy_Emerald_back_with_logo.png",
    "description": "Never Settle with flagship performance, ultra-fast charging, and premium design.",
    "inStock": true,
    "stockCount": 32,
    "rating": 4.6,
    "reviewCount": 892,
    "releaseDate": "2024-01-23",
    "weight": "220g",
    "colors": [
      "Flowy Emerald",
      "Silky Black",
      "Rock Gray"
    ],
    "storage": [
      "256GB",
      "512GB"
    ],
    "warranty": "1 year",
    "features": [
      "6.82-inch AMOLED",
      "Snapdragon 8 Gen 3",
      "100W fast charging",
      "Hasselblad camera",
      "OxygenOS 14",
      "Alert Slider"
    ],
    "specifications": {
      "display": "6.82-inch LTPO AMOLED",
      "processor": "Snapdragon 8 Gen 3",
      "camera": "50MP + 64MP + 48MP",
      "battery": "5400 mAh",
      "os": "OxygenOS 14 based on Android 14"
    }
  },
  {
    "id": 4,
    "name": "Xiaomi 14 Ultra",
    "slug": "xiaomi-14-ultra",
    "category": {
      "id": 3,
      "name": "Camera Phone"
    },
    "brand": {
      "id": 4,
      "name": "Xiaomi"
    },
    "price": 699,
    "originalPrice": 799,
    "discount": 100,
    "discountPercentage": 12.5,
    "image": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1710153277.56734644.jpg",
    "description": "Photography flagship with Leica camera system and exceptional performance.",
    "inStock": true,
    "stockCount": 15,
    "rating": 4.5,
    "reviewCount": 1247,
    "releaseDate": "2024-02-25",
    "weight": "224g",
    "colors": [
      "Black",
      "White",
      "Titanium"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "warranty": "2 years",
    "features": [
      "6.73-inch AMOLED",
      "Snapdragon 8 Gen 3",
      "Leica camera",
      "90W charging",
      "HyperOS",
      "IP68 rating"
    ],
    "specifications": {
      "display": "6.73-inch LTPO AMOLED",
      "processor": "Snapdragon 8 Gen 3",
      "camera": "50MP + 50MP + 50MP + 50MP",
      "battery": "5300 mAh",
      "os": "HyperOS based on Android 14"
    }
  },
]

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
          {
            products.map((value, index) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={value.id}>
                  <div className="card h-100 shadow-sm border-0 hover-shadow">
                    <div className="position-relative">
                      <img src={value.image} className="card-img-top img-fluid" alt={value.name} style={{ height: '200px', objectFit: 'cover' }} />
                      {value.discount > 0 && (
                        <span className="badge bg-danger position-absolute top-0 end-0 m-2">-{value.discountPercentage.toFixed(0)}%</span>
                      )}
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-truncate" title={value.name}>{value.name}</h5>
                      <p className="card-text text-muted small">{value.description}</p>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center mb-2">
                          <span className="text-success fw-bold fs-5">${value.price}</span>
                          {value.originalPrice > value.price && (
                            <span className="text-muted text-decoration-line-through ms-2">${value.originalPrice}</span>
                          )}
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <span className="text-warning me-1">★</span>
                          <span className="fw-semibold">{value.rating}</span>
                          <span className="text-muted ms-1">({value.reviewCount})</span>
                        </div>
                        <button className="btn btn-primary w-100">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
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