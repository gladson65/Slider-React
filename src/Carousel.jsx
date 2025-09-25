import { useState } from "react";

function Carousel({slides}) {

    const [current, setCurrent] = useState(0);

    function prevSlide() {
        setCurrent((prev)=> prev === 0 ? slides.length - 1 : prev - 1);
    }

    function nextSlide() {
        setCurrent((prev)=> prev === slides.length - 1 ? 0 : prev + 1)
    }

    return (
        <>
            <div>
                <img src={`${slides[current]}`} alt={`Slide ${current}`} width='300px' height="300px"/>

                <br/>

                <button onClick={prevSlide}>
                    left
                </button>

                <button onClick={nextSlide}>
                    right
                </button>
            </div>
        </>
    )
}

export default Carousel;