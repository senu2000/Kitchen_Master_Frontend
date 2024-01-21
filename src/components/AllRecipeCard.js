
'use client';

import { Card } from 'flowbite-react';
import MainBtn from "./MainBtn";

export default function AllRcard() {
  return (
    <Card
      className="max-w-sm ml-3 mt-3"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="../img/pizza.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Recipe Name
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

