const brands = [
  {
    "id": 1,
    "name": "Apple",
    "slug": "apple",
    "description": "American multinational technology company known for premium smartphones with iOS ecosystem integration.",
    "logo": "https://logo.clearbit.com/apple.com"
  },
  {
    "id": 2,
    "name": "Samsung",
    "slug": "samsung",
    "description": "South Korean multinational conglomerate, world's largest smartphone manufacturer with diverse Android lineup.",
    "logo": "https://logo.clearbit.com/samsung.com"
  },
  {
    "id": 3,
    "name": "OnePlus",
    "slug": "oneplus",
    "description": "Chinese smartphone manufacturer known for 'flagship killer' devices with OxygenOS and fast charging.",
    "logo": "https://logo.clearbit.com/oneplus.com"
  },
  {
    "id": 4,
    "name": "Xiaomi",
    "slug": "xiaomi",
    "description": "Chinese electronics company offering high-value smartphones with MIUI software and competitive pricing.",
    "logo": "https://logo.clearbit.com/mi.com"
  },
  {
    "id": 5,
    "name": "Vivo",
    "slug": "vivo",
    "description": "Chinese smartphone manufacturer focusing on camera technology, design aesthetics, and selfie photography.",
    "logo": "https://logo.clearbit.com/vivo.com"
  },
  {
    "id": 6,
    "name": "Oppo",
    "slug": "oppo",
    "description": "Chinese smartphone manufacturer known for camera innovation, fast charging technology, and design excellence.",
    "logo": "https://logo.clearbit.com/oppo.com"
  },
  {
    "id": 7,
    "name": "Realme",
    "slug": "realme",
    "description": "Chinese smartphone brand targeting young users with performance-oriented devices and aggressive pricing.",
    "logo": "https://logo.clearbit.com/realme.com"
  },
  {
    "id": 8,
    "name": "Motorola",
    "slug": "motorola",
    "description": "American telecommunications company known for clean Android experience and innovative form factors.",
    "logo": "https://logo.clearbit.com/motorola.com"
  }
]

const products = [
  {
    "id": 1,
    "name": "iPhone 16 Pro Max",
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
]

const ProductPage = () => {

  return (
    <div className="container-fluid px-4">
      <section className="mt-5 mb-4">
        <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm">
          <h2 className="mb-0 text-primary">All Products</h2>
          <div className="d-flex align-items-center">
            <label htmlFor="brandSelect" className="me-2 fw-bold">Filter by Brand:</label>
            <select id="brandSelect" className="form-select w-auto">
              <option value="">All Brands</option>
              {
                brands.map((value, index) => {
                  return (
                    <option key={value.id} value={value.slug}>{value.name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </section>

      <section className="mt-3">
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
    </div>
  )
}

export default ProductPage