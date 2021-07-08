import React from "react";
import { FaArrowRight } from "react-icons/fa";

import {Images} from '../../consts'

const Header:React.FC = () => {
    return (
        <div className='flex flex-col sm:w-9/12 md:w-11/12 w-11/12 m-auto mb-8'>
            <div className='flex md:flex-row flex-col justify-between items-center mt-8'>
                <div>
                    <img src={Images.headerLogo} />
                </div>

                <div>
                    <ul className='flex  sm:flex-row md:grid-cols-2 lg:flex-row flex-col items-center'>
                        <li className='sm:mr-8 md:mr-2 lg:mr-8 mr-2 text-xl '>
                            Home
                        </li>
                        <li className='sm:mr-8 md:mr-2 lg:mr-8 mr-2 text-xl'>
                            About Us
                        </li>
                        <li className='sm:mr-8 md:mr-2 sm:text-xl  lg:mr-8 mr-2 text-xl'>
                            Our Services
                        </li>
                        <li className='sm:mr-8 md:mr- lg:mr-8 mr-2 text-xl'>
                            Responsibility
                        </li>
                        <li className='sm:mr-8 md:mr-2 lg:mr-8 mr-2 text-xl'>
                            Country
                        </li>
                        <li>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded-xl">
                                Apply
                            </button>
                        </li>
                    </ul>
                </div>
             </div>
            <div className='flex md:flex-row flex-col justify-between items-center'>
                <div className='flex flex-col md:mt-0 mt-8'>
                    <div>
                        <p className='sm:text-6xl md:text-3xl text-3xl'>We Help to <span className='text-purple'>Build</span><br/> Your Dream</p>
                    </div>
                    <div className='mt-4 sm:text-2xl md:text-lg  text-lg text-gray'>
                        <p>We are always availed to consult on taking your higher education to the next level so you can stay competitive in</p>
                    </div>
                    <div className='mt-8 sm:mb mb-8'>
                        <button className="bg-purple flex flex-row items-center text-white	 font-bold py-3 px-4 border  rounded-lg">
                            Apply Online     <FaArrowRight className='ml-4'/>
                        </button>
                    </div>
                </div>
                <img src={Images.student} className='sm:block hidden' />
            </div>

        </div>

       
    )
}

export default Header