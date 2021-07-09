import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

import { Images } from '../../consts'


const Footer:React.FC = () => {
    return(
        <div className='bg-purple w-full'>

            <div className='flex sm:flex-row flex-col-reverse  w-9/12 m-auto  justify-between sm:items-none items-center'>
                <div className='flex flex-col sm:mt-8 mt-0'>
                        <div>
                            <img src={Images.logo} />
                        </div>
                        <div>
                            <ul className='text-white sm:mb-16 md:mb-2 mb-4  sm:mt-8 mt-4'>
                                <li><a>Concord Royal Court(3rd floor)</a></li>
                                <li><a>Dhanmondi,Dhaka 1209,Banglkadesh</a></li>
                            </ul>
                            <div>
                                <p className='text-white'>2020 Executive Trade Internetional.</p>
                            </div>
                        </div>
                </div>
                <div className='sm:w-auto w-11/12 m-auto sm:mt-8 mt-2'>
                    <div>
                        <ul className='text-white sm:block grid grid-cols-2'>
                          <li className='mb-6'><a>About Us</a></li>
                          <li className='mb-6'><a>Responsibility</a></li>
                          <li className='mb-6'><a>Our Services</a></li>
                          <li><a>Contact</a></li>
                        </ul>
                    </div>
                    
                </div>

                <div className='sm:w-auto w-11/12 m-auto  sm:mt-8 mt-2'>
                    <div>
                        <ul className='text-white  sm:block grid grid-cols-2'>
                          <li className='mb-6'><a>Disclaimer</a></li>
                          <li className='mb-6'><a>Testimonials</a></li>
                          <li className='mb-6'><a>Privacy Policy</a></li>
                          <li><a>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row sm:mt-20 mt-2'>
                    <FaFacebookF color={'white'} className='mr-2 cursor-pointer'/>
                    <FaTwitter color={'white'} className='mr-2 cursor-pointer'/>
                    <FaInstagram color={'white'} className='cursor-pointer'/>
                </div>
            </div>
        </div>    
    )
}


export default Footer 