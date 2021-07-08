import React from "react";
import CartEvents from "../CartEvents/CartEvents";


const Events:React.FC = () => {
    return(
        <div className='flex flex-col  sm:w-9/12 w-full m-auto mt-8'>
            <div className='flex justify-center'>
                <p className='sm:text-4xl text-xl'>
                    Upcoming University Events
                </p>
            </div>
            <div className='flex justify-center mt-8'>
                <p className='sm:text-lg text-base text-gray text-center'>
                    Sunt autem  hoc epicrus in  gravissimo bello animadversion metu  dengendae                
                </p>
            </div>
            <CartEvents/>
        </div>
    )
}

export default Events