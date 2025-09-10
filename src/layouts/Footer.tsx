const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">

                <div className="row">

                    <div className="col-md-6">
                        <h5>Phone Store</h5>
                        <p>Your trusted destination for the latest smartphones and mobile accessories.</p>
                    </div>

                    <div className="col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Products</a></li>
                            <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>


                    <div className="col-md-3">
                        <h6>Contact Info</h6>
                        <p className="mb-1">Email: info@phonestore.com</p>
                        <p className="mb-1">Phone: +1 (555) 123-4567</p>
                        <p>Address: 123 Tech Street, City</p>
                    </div>

                </div>


                <hr className="my-3" />


                <div className="row">
                    <div className="col-12 text-center">
                        <p className="mb-0">&copy; 2025 Phone Store. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer