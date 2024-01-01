import React from 'react';
import { Carousel } from 'flowbite-react';
import "../css/ImageSlidercss.css";

function ImageSlider() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96" id="slider">
            <Carousel>
                <img src="/img/ckn.png" alt="..." />
                <img src="/img/pizza.jpg" alt="..." />
                <img src="/img/lasagna.jpg" alt="..." />
                <img src="/img/roti.jpg" alt="..." />
                <img src="/img/burger1.jpg" alt="..." />
            </Carousel>
        </div>
    );
}

export default ImageSlider;