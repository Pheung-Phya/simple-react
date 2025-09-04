import React from 'react'
import Header from '../components/Header'
import Detail from '../components/details/Detail'
import Description from '../components/details/Description'
import RelatedProduct from '../components/RelatedProduct'
import Footer from '../components/Footer'

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
         <Header/>
      </section>

      {/* Product Details Section */}
      <section className="mb-5">
         <Detail product={product}/>
      </section>

      {/* Product Description */}
      <section className="mb-5">
         <Description product={product}/>
      </section>

      {/* Related Products Section */}
      <section className="mb-5">
        <RelatedProduct products={products}/>
      </section>

      {/* Footer Info */}
      <section className="bg-light rounded p-4">
        <Footer/>
      </section>
    </div>
  )
}

export default DetailProductPage