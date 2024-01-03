'use client';

import { Card } from 'flowbite-react';
import MainBtn from "./MainBtn";

function Rcard() {
    return (
        <Card
            className="max-w-sm rcard"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc="/img/ckn.png"
        >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Chicken Drumsticks
                </h5>

            <div className="flex items-center">
                <a href="/view-recipe">
                    <MainBtn>View Recipe</MainBtn>
                </a>
            </div>
        </Card>
    );
}
export default Rcard;
