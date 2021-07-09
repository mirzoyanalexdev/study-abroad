import React from "react";
import Cart from "../Cart/Cart";

const Services:React.FC = () => {
    return (
        <div className='flex flex-col justify-center mt-12 '>
            <div className='flex flex-col'>
                <div className='text-center sm:text-4xl  text-lg '>
                     <p>Our Services</p>
                </div>
                <div className='text-center sm:text-lg text-base text-gray sm:w-1/2 sm:w-auto m-auto sm:mt-8 mt-4'>
                     <p>Execute Trade Internetional is an University Applicatio Center,guiding  Bangladeshi students to Australian,British,Canadian and Irish univerisities</p>
                </div>
            </div>
            <Cart/>
        </div>

    )
}

export default Services