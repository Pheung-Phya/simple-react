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
    <div>
      <section className=' mt-5'>

        <div className=" d-flex justify-content-between align-items-center">
          <h3>All Products</h3>
          <select>
            {
              brands.map((value, index) => {
                return (
                  <option value="">{value.name}</option>
                )
              })
            }
          </select>
        </div>

      </section>

      <section className='mt-3'>

        <div className="row p-0 m-0">

          {
            products.map((value, index) => {
              return (
                <div className="col-lg-3 mb-5" key={index}>
                  <div className="card">
                    <img src={value.image} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{ value.name }</h5>
                      <p className="card-text">{ value.description }</p>
                      <p className="card-text">Price: { value.price }</p>
                      <p className="card-text">Rating: { value.rating }</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
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