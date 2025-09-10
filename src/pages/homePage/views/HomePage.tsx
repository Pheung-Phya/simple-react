import { useEffect, useState } from "react";
import Brand from "../components/Brand";
import Product from "../components/Product";
import Slide from "../components/Slide";
import axios from "axios";

const HomePage = () => {

    const [slides, setSlide] = useState([]);
    const [brands, setBrand] = useState([]);
    const [products, setProduct] = useState([]);
    

    const fetchSlidesAPI = async () => {
        try {
            const response = await axios.get("http://localhost:3000/slides");
            if (response.status == 200) {
                setSlide(response.data)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const fetchBrandAPI = async () => {
        try {
            const response = await axios.get("http://localhost:3000/brands");
            if (response.status == 200) {
                setBrand(response.data)
            }
        } catch (errors) {
            console.log(errors);
        }
    }

    const fetchProductAPI = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            if (response.status == 200) {
                setProduct(response.data)
            }
        } catch (errors) {
            console.log(errors);
        }
    }



    useEffect(() => {
        fetchSlidesAPI();
        fetchBrandAPI();
        fetchProductAPI();
    }, [])

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