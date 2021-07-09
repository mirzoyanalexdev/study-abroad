import React from "react";
import { FaArrowRight } from "react-icons/fa";


const ApplyOnline:React.FC = () => {
    return(
        <div className='bg-bg w-full p-16 mt-6'>
            <div className='w-9/12 m-auto flex sm:flex-row md:flex-col lg:flex-row flex-col  justify-between'>
                <div>
                    <p className='sm:text-4xl text-xl sm:mb-0 mb-4 md:mb-4 mb-0 '>Ready to  chase your dreams?</p>
                </div>
                <div>
                    <button className="bg-purple flex flex-row items-center text-white	 font-bold py-2 px-4 border  rounded">
                        Apply Online     
                        <FaArrowRight className='ml-4'/>
                    </button>
                </div>
                
            </div>

        </div>
    )
}

export default ApplyOnline