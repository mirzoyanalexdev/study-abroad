import React from "react";
import { FaArrowRight } from "react-icons/fa";

import CartNews from "../CartNews/CartNews";


const News: React.FC = () => {
    return (
        <div className='flex flex-col  mt-16 bg-dark-gray py-12'>
            <div className='sm:w-8/12 w-11/12 m-auto justify-center'>
                <div className='text-center'>
                    <div>
                        <p className='sm:text-4xl text-xl'>News</p>
                    </div>
                    <div className='sm:mt-8 mt-2'>
                        <p className='sm:text-base text-sm text-text-color'>Sunt autem  hoc epicrus in  gravissimo bello animadversion metu  dengendae </p>
                    </div>
                </div>
                <CartNews/>
                <div className='flex justify-center mt-12 '>
                    <button className="bg-purple flex flex-row items-center text-white	 font-bold py-2 px-4 border  rounded">
                        Join Here     <FaArrowRight className='ml-4'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default News