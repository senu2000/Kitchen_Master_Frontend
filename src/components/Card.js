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
                {/*<a*/}
                {/*    href="#"*/}
                {/*    className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"*/}
                {/*>*/}
                {/*    View Recipe*/}
                {/*</a>*/}
                <a href="">
                    <MainBtn>View Recipe</MainBtn>
                </a>
            </div>
        </Card>
    );
}
export default Rcard;
