import React from "react";
import { Images } from "../../consts";

const Items = [
    {
        img:`${Images.profile1}`,
        name:"Harrison Phillips",
        profesia:"Reporter",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis perferendis maxime laudantium dolor pariatur, perspiciatis quae nisi deleniti natus dolorem qui laborum? Aperiam nostrum eveniet dignissimos, ea ipsum sapiente?",

    },
    {
        img:`${Images.profile2}`,
        name:"Ainara Vergara",
        profesia:"Reporter",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis perferendis maxime laudantium dolor pariatur, perspiciatis quae nisi deleniti natus dolorem qui laborum? Aperiam nostrum eveniet dignissimos, ea ipsum sapiente?",
        
    }
]


const Testimonial:React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <div className='flex flex-col justify-center items-center text-center w-9/12 m-auto'>
                <div>
                    <p className='sm:text-4xl text-xl'>Testimonial</p>
                </div>
                <div className='mt-4'>
                    <p className='text-gray sm:text-lg text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis perferendis maxime laudantium dolor pariatur, perspiciatis quae nisi deleniti natus dolorem qui laborum? Aperiam nostrum eveniet dignissimos, ea ipsum sapiente</p>
                </div>
            </div>
            
            <div className='flex  sm:flex-row md:flex-col lg:flex-row flex-col justify-center m-auto mt-20 '>
                {Items.map((item,i) => (
                    <div key={i} className='shadow-2xl p-4 flex flex-col sm:w-96 w-11/12 sm:ml-8 m-auto mt-8'>
                        <div className='flex flex-row'>
                            <div>
                                <img alt='' src={item.img}/>
                            </div>
                            <div className='flex flex-col ml-6'>
                                <div>
                                    <p>
                                        {item.name}
                                    </p>
                                </div>    
                                <div>
                                    <p className='text-gray'>{item.profesia}</p>
                                </div>    
                                
                            </div>        
                        </div>   
                        <div className='mt-4'>
                             <p className='text-gray'>{item.text}</p>
                        </div>    
                    </div>    
                ))}
            </div>


        </div>
    )
}


export default Testimonial