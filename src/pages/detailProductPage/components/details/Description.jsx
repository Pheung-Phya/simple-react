import React from 'react'

const Description = ({product}) => {
  return (
      <div className="row">
          <div className="col-12">
              <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                      <ul className="nav nav-tabs card-header-tabs" role="tablist">
                          <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab">Description</button>
                          </li>
                          <li className="nav-item" role="presentation">
                              <button className="nav-link" id="specifications-tab" data-bs-toggle="tab" data-bs-target="#specifications" type="button" role="tab">Specifications</button>
                          </li>
                      </ul>
                  </div>
                  <div className="card-body">
                      <div className="tab-content">
                          <div className="tab-pane fade show active" id="description" role="tabpanel">
                              <p className="mb-0">{product.description}</p>
                          </div>
                          <div className="tab-pane fade" id="specifications" role="tabpanel">
                              <div className="row">
                                  {Object.entries(product.specifications || {}).map(([key, value]) => (
                                      <div key={key} className="col-md-6 mb-2">
                                          <div className="d-flex justify-content-between">
                                              <strong className="text-capitalize">{key}:</strong>
                                              <span>{value}</span>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Description