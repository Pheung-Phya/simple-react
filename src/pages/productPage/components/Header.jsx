import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Header = ({ brands }) => {
    const { brandSlug } = useParams(); 

    return (
        <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm">
            <h2 className="mb-0 text-primary">All Products</h2>
            <div className="d-flex align-items-center">
                <span className="me-2 fw-bold">Filter by Brand:</span>
                <div className="d-flex gap-2">
                    <Link
                        className={`btn btn-sm ${brandSlug === "all" ? "btn-primary" : "btn-outline-primary"}`}
                        to="/products/all"
                    >
                        All Brands
                    </Link>
                    {brands.map((value) => (
                        <Link
                            key={value.id}
                            className={`btn btn-sm ${brandSlug === value.slug ? "btn-primary" : "btn-outline-primary"}`}
                            to={`/products/${value.slug}`}
                        >
                            {value.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
