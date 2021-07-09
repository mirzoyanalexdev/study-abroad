import React from "react";
import { FaArrowRight } from "react-icons/fa";

import {Images} from '../../consts'
import { ServiceCard } from "../../types";



const items: ServiceCard[]  = [
    {
        title:'Career Consuling',
        text:'Maiores voluptas labrosiam non dolorum perferendis fuga repellat aut.',
        icon:`${Images.icon1}`,
    },
    {
        title:'University Admissions',
        text:'Maiores voluptas labrosiam non dolorum perferendis fuga repellat aut.',
        icon:`${Images.icon2}`,
    },
    {
        title:'Visa Consultancy',
        text:'Maiores voluptas labrosiam non dolorum perferendis fuga repellat aut.',
        icon:`${Images.icon3}`,
    },
    {
        title:'Accommodation',
        text:'Maiores voluptas labrosiam non dolorum perferendis fuga repellat aut.',
        icon:`${Images.icon4}`,
    },
    {
        title:'Pre-Deapture Briefing',
        text:'Maiores voluptas labrosiam non dolorum perferendis fuga repellat aut.',
        icon:`${Images.icon5}`,
    },
    
]


const Cart: React.FC = () => {
    return (
        <div className="grid sm:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 sm:w-9/12 w-10/12 m-auto mt-16">
            {items.map((item) => (
                <div className='flex flex-col sm:w-6/7   m-auto rounded  p-4 shadow-2xl	'>
                    <div className='w-12 h-12'>
                        <img src={item.icon} />
                    </div>
                    <div className='mt-4'>
                        <p className='text-lg'>{item.title}</p>
                    </div>
                    <div className='mt-4 text-gray'>
                        <p className='text-sm'>{item.text}</p>
                    </div>
                    <div className='mt-4 flex flex-row items-center cursor-pointer'>
                        <p className='text-blue'>Learn More </p>
                        <FaArrowRight
                        className='text-blue ml-4'
                        />
                    </div>                
                </div>
            ))}
        </div>
    )
}


export default Cart