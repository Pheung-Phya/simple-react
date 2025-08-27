import Brand from "../components/Brand";
import Product from "../components/Product";
import Slide from "../components/Slide";


const slides = [
    {
        "id": 1,
        "title": "iPhone 16",
        "image": "https://variety.com/wp-content/uploads/2024/09/Apple-iPhone-16.png?w=1000&h=667&crop=1",
        "description": "The iPhone 16 is the latest smartphone from Apple, featuring a sleek design and advanced technology."
    },
    {
        "id": 2,
        "title": "iOS 17",
        "image": "https://i.blogs.es/c85493/apple-intelligence/840_560.jpeg",
        "description": "iOS 17 is the latest version of Apple's mobile operating system, offering new features and improvements."
    },
    {
        "id": 3,
        "title": "iOS 26",
        "image": "https://assets.thehansindia.com/h-upload/2025/06/12/1559101-ios-26-brings.webp",
        "description": "iOS 26 is the upcoming version of Apple's mobile operating system"
    }
];


const brands = [
    {
        "id": 1,
        "name": "Vivo",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9fe4jwyvS_YcoBpoETKb82qWKLnNW4MeSw&s"
    },
    {
        "id": 2,
        "name": "Oppo",
        "image": "https://www.oppo.com/content/dam/oppo/common/mkt/newsroom/list-image.jpg"
    },
    {
        "id": 3,
        "name": "Samsung",
        "image": "https://marketingweek.imgix.net/content/uploads/2014/10/Samsung_logo.jpg?auto=compress,format&q=60&w=736&h=451"
    },
    {
        "id": 4,
        "name": "Apple",
        "image": "https://logo.com/image-cdn/images/kts928pd/production/cfe98f0d8e42613968a2414d95c9064037d78580-1140x620.png?w=1920&q=72&fm=webp"
    },
    {
        "id": 5,
        "name": "OnePlus",
        "image": "https://oasis.opstatics.com/content/dam/oasis/page/vi/01Banner%20A_small.jpg"
    },
    {
        "id": 6,
        "name": "Xiaomi",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9fe4jwyvS_YcoBpoETKb82qWKLnNW4MeSw&s"
    },
    {
        "id": 7,
        "name": "Realme",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9fe4jwyvS_YcoBpoETKb82qWKLnNW4MeSw&s"
    },
    {
        "id": 8,
        "name": "Motorola",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9fe4jwyvS_YcoBpoETKb82qWKLnNW4MeSw&s"
    }
]


const products = [
    {
        "id": 1,
        "name": "iPhone 16 Pro Max",
        "brand": "Apple",
        "price": 1199,
        "originalPrice": 1299,
        "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-finish-select-202409-6-9inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723666530533",
        "description": "The most advanced iPhone ever with titanium design, A18 Pro chip, and pro camera system.",
        "category": "Premium",
        "inStock": true,
        "rating": 4.8,
        "features": ["6.7-inch Super Retina XDR", "A18 Pro chip", "Pro camera system", "Titanium design"]
    },
    {
        "id": 2,
        "name": "Samsung Galaxy S24 Ultra",
        "brand": "Samsung",
        "price": 1099,
        "originalPrice": 1199,
        "image": "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-ultra-s928-sm-s928bzthins-thumb-539756222?$650_519_PNG$",
        "description": "Ultimate Galaxy experience with S Pen, 200MP camera, and Galaxy AI features.",
        "category": "Premium",
        "inStock": true,
        "rating": 4.7,
        "features": ["6.8-inch Dynamic AMOLED", "Snapdragon 8 Gen 3", "200MP camera", "S Pen included"]
    },
    {
        "id": 3,
        "name": "OnePlus 12",
        "brand": "OnePlus",
        "price": 799,
        "originalPrice": 899,
        "image": "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/products/12/specs/Flowy_Emerald_back_with_logo.png",
        "description": "Never Settle with flagship performance, ultra-fast charging, and premium design.",
        "category": "Flagship",
        "inStock": true,
        "rating": 4.6,
        "features": ["6.82-inch AMOLED", "Snapdragon 8 Gen 3", "100W fast charging", "Hasselblad camera"]
    },
    {
        "id": 4,
        "name": "Xiaomi 14 Ultra",
        "brand": "Xiaomi",
        "price": 699,
        "originalPrice": 799,
        "image": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1710153277.56734644.jpg",
        "description": "Photography flagship with Leica camera system and exceptional performance.",
        "category": "Camera Phone",
        "inStock": true,
        "rating": 4.5,
        "features": ["6.73-inch AMOLED", "Snapdragon 8 Gen 3", "Leica camera", "90W charging"]
    },
    {
        "id": 5,
        "name": "Vivo X100 Pro",
        "brand": "Vivo",
        "price": 649,
        "originalPrice": 749,
        "image": "https://www.vivo.com/content/dam/vivo/en/product/x100-pro/images/kv/X100Pro_KV_A_Meteor-Black.png",
        "description": "Professional photography with Zeiss optics and powerful performance.",
        "category": "Camera Phone",
        "inStock": true,
        "rating": 4.4,
        "features": ["6.78-inch AMOLED", "Dimensity 9300", "Zeiss camera", "120W charging"]
    },
    {
        "id": 6,
        "name": "Oppo Find X7 Pro",
        "brand": "Oppo",
        "price": 899,
        "originalPrice": 999,
        "image": "https://image01.oppo.com/content/dam/oppo/product-asset-library/find/find-x7-series/find-x7-pro/images/design/find-x7-pro-design-tailored-black-front-back.png",
        "description": "Premium flagship with Hasselblad camera and elegant design.",
        "category": "Premium",
        "inStock": false,
        "rating": 4.3,
        "features": ["6.82-inch AMOLED", "Snapdragon 8 Gen 3", "Hasselblad camera", "100W charging"]
    },
    {
        "id": 7,
        "name": "Realme GT 6",
        "brand": "Realme",
        "price": 449,
        "originalPrice": 549,
        "image": "https://image01.realme.net/general/20240605/1717563967871.jpg.webp",
        "description": "Flagship killer with exceptional performance and value for money.",
        "category": "Performance",
        "inStock": true,
        "rating": 4.2,
        "features": ["6.78-inch AMOLED", "Snapdragon 8s Gen 3", "120W charging", "AI camera"]
    },
    {
        "id": 8,
        "name": "Motorola Edge 50 Ultra",
        "brand": "Motorola",
        "price": 599,
        "originalPrice": 699,
        "image": "https://motorolain.vtexassets.com/arquivos/ids/166007/motorola-edge-50-ultra-pdp-render-Peach-Fuzz-1-y5idr6na.png",
        "description": "Premium experience with clean Android and versatile camera system.",
        "category": "Flagship",
        "inStock": true,
        "rating": 4.1,
        "features": ["6.7-inch pOLED", "Snapdragon 8s Gen 3", "125W charging", "Clean Android"]
    },
    {
        "id": 9,
        "name": "iPhone 15",
        "brand": "Apple",
        "price": 799,
        "originalPrice": 899,
        "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378",
        "description": "Dynamic Island, 48MP main camera, and USB-C connectivity.",
        "category": "Mid-Premium",
        "inStock": true,
        "rating": 4.6,
        "features": ["6.1-inch Super Retina XDR", "A16 Bionic chip", "48MP camera", "USB-C"]
    },
    {
        "id": 10,
        "name": "Samsung Galaxy A55",
        "brand": "Samsung",
        "price": 399,
        "originalPrice": 449,
        "image": "https://images.samsung.com/is/image/samsung/p6pim/in/2403/gallery/in-galaxy-a55-5g-a556-sm-a556elvcins-thumb-540907168?$650_519_PNG$",
        "description": "Awesome everyday experience with great camera and long-lasting battery.",
        "category": "Mid-Range", 
        "inStock": true,
        "rating": 4.0,
        "features": ["6.6-inch Super AMOLED", "Exynos 1480", "50MP camera", "5000mAh battery"]
    },
    {
        "id": 11,
        "name": "Xiaomi Redmi Note 13 Pro",
        "brand": "Xiaomi",
        "price": 299,
        "originalPrice": 349,
        "image": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1705399320.49552372.jpg",
        "description": "Exceptional value with powerful performance and versatile camera.",
        "category": "Budget",
        "inStock": true,
        "rating": 4.3,
        "features": ["6.67-inch AMOLED", "Snapdragon 7s Gen 2", "200MP camera", "5000mAh battery"]
    },
    {
        "id": 12,
        "name": "OnePlus Nord 4",
        "brand": "OnePlus",
        "price": 499,
        "originalPrice": 599,
        "image": "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/products/nord-4/spec/Mercurial_Silver_Back_with_logo_Light.png",
        "description": "Premium mid-range with flagship features and OxygenOS experience.",
        "category": "Mid-Range",
        "inStock": true,
        "rating": 4.4,
        "features": ["6.74-inch AMOLED", "Snapdragon 7+ Gen 3", "100W charging", "Metal unibody"]
    }
];

const HomePage = () => {
    return (
        <div>
            {/* Slides */}
            <section className="mt-4">
                <Slide slides={slides} />
            </section>


            {/* Brands */}
            <section className="mt-5 mb-5 p-0 ">
               <Brand brands={brands} />
            </section>

            {/* Products */}
            <section className="mt-5 mb-5">
                <Product products={products} />
            </section>

        </div>
    )
}

export default HomePage