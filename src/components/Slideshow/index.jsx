import React, { useState } from "react";
import "../Slideshow/Slideshow.scss"; // Assurez-vous que ce fichier CSS est bien créé pour le style

function Slideshow({ slide }) {
    const [current, setCurrent] = useState(0);
    const length = slide.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slide) || slide.length === 0) {
        console.log(slide);
        return null; // Ne rien rendre si aucune image n'est fournie
    }

    return (
        <section className="carousel">
            {length > 1 && (
                <>
                    <button className="left-arrow" onClick={prevSlide}>
                        &lt;
                    </button>
                    <button className="right-arrow" onClick={nextSlide}>
                        &gt;
                    </button>
                </>
            )}

            {slide.map((image, index) => (
                <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                >
                    {index === current && (
                        <>
                            <img
                                src={image}
                                alt="carousel slide"
                                className="image"
                            />
                            {length > 1 && (
                                <div className="slide-number">
                                    {index + 1}/{length}
                                </div>
                            )}
                        </>
                    )}
                </div>
            ))}
        </section>
    );
}

export default Slideshow;
