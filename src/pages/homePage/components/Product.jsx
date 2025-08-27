const Product = ({products}) => {
  return (
        <div className="row">


            {
                products.map((value, index) => {
                    return (
                        <div className="col-lg-3 mb-5" key={index}>
                            <div className="card">
                                <img src={value.image} alt="  " />
                                <div className="card-body">
                                    <h5 className="card-title">{value.name}</h5>
                                    <p className="card-text">{value.description}</p>
                                    <p className="card-text">Price: {value.price}</p>
                                    <p className="card-text">Rating: {value.rating}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default Product