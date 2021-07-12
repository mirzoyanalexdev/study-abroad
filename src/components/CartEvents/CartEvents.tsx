import React from "react";
import { FaArrowRight } from "react-icons/fa";


const Items = [
    {
        date:'23',
        month:"Dec",
        title:'Macquarie University',
        country:"Australia",
        content:'Maiores voluptas labrosiam non dolorum perferendis fuga repellat aut',
        time:'10:00 AM - 2:00 PM'
    },
    {
        date:'17',
        month:"Oct",
        title:'Federation University',
        country:"Canada",
        content:'Maiores voluptas labrosiam non dolorum perferendis fuga repellat aut',
        time:'10:00 AM - 2:00 PM'
    },
    

]


const CartEvents:React.FC = () => {
    return(
        <div className='flex sm:flex-row flex-col p-8'>
            {Items.map((item,i) => (
                <div key={i} className=' sm:w-2/3 w-full m-auto flex flex-col shadow-2xl sm:ml-6 ml-0 sm:p-4 p-2'>
                    <div className='flex flex-row '>
                        <div className='flex flex-col bg-light-gray w-20 h-16  items-center justify-center text-btn-color font-bold text-center mr-4 mb-2 rounded-md'>
                               <div className=''>
                                   <p>{item.date}</p>
                               </div>
                               <div className='text-sm'>
                                    <p>{item.month}</p>
                               </div>         
                        </div>   
                        <div>
                            <p className='text-xl font-bold'>
                                {item.title}
                            </p>
                        </div>
                    </div>  
                    <div className='flex flex-col mt-4 '>
                        <p className='text-gray'>{item.content}</p>
                    </div>   

                    <div className='flex sm:flex-row flex-col-reverse justify-between my-4 cursor-pointer'>
                        <div className='flex flex-row items-center justify-center sm:mt-none mt-4'>
                            <p className='sm:text-xl text-lg  text-purple '>Learn More</p>
                            <FaArrowRight
                            className='text-blue flex items-center  ml-2' 
                        />
                        </div>   
                        <div className='sm:text-none text-center'>
                            <p className='sm:text-xl text-lg'>{item.time}</p>
                        </div> 
                    </div>       
                </div>    
            ))}

        </div>
    )
}


export default CartEvents