import { useEffect, useState } from "react"
import Header from "../components/Header"
import Product from "../components/Product"
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

const ProductPage = () => {

  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  const { brandSlug } = useParams();


  
  const fetchBrandsAPI = async () => {

    try {
      let response = await axios.get("http://localhost:3000/brands");
      if (response.status == 200) {
        setBrands(response.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchProductsAPI = async () => {
    try {

      let response;

      if ( brandSlug === "all") {
         response = await axios.get(`http://localhost:3000/products`);
      } else {
        response = await axios.get(`http://localhost:3000/products?brand.slug=${brandSlug}`);
      }


      if (response.status == 200) {
        setProducts(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBrandsAPI();
  } , [])

  useEffect(() => {
    fetchProductsAPI();
  }, [brandSlug])

  return (
    <div className=" px-4">
      <section className="mt-5 mb-4">
        <Header brands={brands}/>
      </section>

      <section className="mt-3">
         <Product products={products}/>
      </section>
    </div>
  )
}

export default ProductPage