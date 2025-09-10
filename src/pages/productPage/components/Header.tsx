import React from 'react'

type Brand = {
    id: string | number;
    slug: string;
    name: string;
};

interface HeaderProps {
    brands: Brand[];
}

const Header: React.FC<HeaderProps> = ({brands}) => {
  return (
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
  )
}

export default Header