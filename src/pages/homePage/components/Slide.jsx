import React from 'react'

const Slide = ({ slides  }) => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                {
                    slides.map((value, index) => {
                        return (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000" key={value.id}>
                                <img src={value.image} className="d-block w-100" height="800" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{value.title}</h5>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    )
}

export default Slide