import React from 'react'
import {FaCalendarAlt} from "react-icons/fa";

import {Images} from '../../consts'

const Items = [
    {
        date:new Date().toLocaleDateString(),
        bg:`${Images.news1}`,
        titel:'Come on In.The Waters Fine(Mostly)'
    },
    {
        date:new Date().toLocaleDateString(),
        bg:`${Images.news2}`,
        titel:'Trump Lays Plans to Reverse Obama`s Climate  '
    },
    {
        date:new Date().toLocaleDateString(),
        bg:`${Images.news3}`,
        titel:'How a Little Bit of Hydra Regrows a Whole Animal'
    },
]



const CartNews: React.FC = () => {
    return (
        <div className='flex sm:flex-row md:flex-col lg:flex-row flex-col p-4 sm:mt-12 mt-4 m-auto justify-between'>
            {
                Items.map((item) => (
                    <div className='md:ml-4 ml-0 shadow-2xl rounded-lg	bg-white sm:mb-none mb-4'>
                        <div>
                            <img className='w-full sm:h-40 md:h-64 lg:h-40 ' src={item.bg} 
                        
                            />
                        </div>   
                        <div className='md:mx-8 mx-2  ml-2 flex flex-row items-center'>
                            <FaCalendarAlt color='gray' className='mr-2'/>
                            <p className='text-gray'>{item.date}</p>
                        </div>     
                        <div className='ml-2 pb-8'>
                            <p className=''>{item.titel}</p>
                        </div>    
                    </div>    
                ))
            }

        </div>
    )
}

export default CartNews