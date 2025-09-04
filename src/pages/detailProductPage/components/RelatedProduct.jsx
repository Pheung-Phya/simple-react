import React from 'react'

const RelatedProduct = ({products}) => {
    return (
        <div>
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
        </div>
    )
}

export default RelatedProduct