import React, { useEffect, useState } from 'react'

type SlideItem = {
    id: string | number;
    image: string;
    title: string;
    description: string;
};

interface SlideProps {
    slides: SlideItem[];
}

const Slide: React.FC<SlideProps> = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Auto-change every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className="hero-carousel position-relative overflow-hidden">
            <div className="carousel-inner">
                {slides.map((value, index) => (
                    <div
                        key={value.id}
                        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                        style={{
                            transform: `translateX(${(index - activeIndex) * 100}%)`,
                            transition: 'transform 0.6s ease-in-out'
                        }}
                    >
                        <div className="hero-slide position-relative">
                            <img
                                src={value.image}
                                className="d-block w-100 hero-image"
                                alt={value.title}
                                style={{ height: '70vh', objectFit: 'cover' }}
                            />
                            <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
                            <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white">
                                <div className="container">
                                    <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInUp">
                                        {value.title}
                                    </h1>
                                    <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                                        {value.description}
                                    </p>
                                    <button className="btn btn-primary btn-lg px-4 py-2 animate__animated animate__fadeInUp animate__delay-2s">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Indicators */}
            <div className="carousel-indicators position-absolute bottom-0 start-50 translate-middle-x mb-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`indicator-btn ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                className="carousel-control-prev position-absolute top-50 start-0 translate-middle-y"
                type="button"
                onClick={goToPrev}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next position-absolute top-50 end-0 translate-middle-y"
                type="button"
                onClick={goToNext}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <style>{`
                .hero-carousel {
                    height: 70vh;
                }
                .hero-slide {
                    height: 100%;
                }
                .hero-image {
                    filter: brightness(0.7);
                }
                .hero-overlay {
                    z-index: 1;
                }
                .hero-content {
                    z-index: 2;
                }
                .indicator-btn {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.7);
                    background: transparent;
                    margin: 0 6px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .indicator-btn.active {
                    background: white;
                    border-color: white;
                }
                .indicator-btn:hover {
                    background: rgba(255, 255, 255, 0.8);
                }
                .carousel-control-prev-icon,
                .carousel-control-next-icon {
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 50%;
                    padding: 15px;
                }
                .carousel-control-prev,
                .carousel-control-next {
                    z-index: 3;
                }
            `}</style>
        </div>
    )
}

export default Slide