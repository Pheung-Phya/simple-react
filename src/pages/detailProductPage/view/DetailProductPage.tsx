import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Detail from '../components/details/Detail'
import Description from '../components/details/Description'
import RelatedProduct from '../components/RelatedProduct'
import Footer from '../components/Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const DetailProductPage = () => {

  const [product, setProduct] = useState({}) //get product by slug
  const [relatedProducts, setRelatedProducts] = useState([]) // get related products by only brand id
  
  const { brandSlug,productSlug } = useParams();
  
  const fetchProductWithSlug = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products?slug=${productSlug}`);
      if (response.status == 200) {
        setProduct(response.data[0])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchRelatedProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products?brand.slug=${brandSlug}`);
      if (response.status == 200) {
        setRelatedProducts(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(() => {
    fetchProductWithSlug();
    fetchRelatedProducts();
  }, [productSlug, brandSlug])

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
        <RelatedProduct products={relatedProducts}/>
      </section>

      {/* Footer Info */}
      <section className="bg-light rounded p-4">
        <Footer/>
      </section>
    </div>
  )
}

export default DetailProductPage