import React from "react";
import {Images} from '../../consts'
import Slider from 'react-slick'


  const settings = {
        dots: true,
        infinite: true,
        speed: 350,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 1

              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


const Items = [
    {
        img:`${Images.city1}`,
        title:"Study in Australia",
        text:"Ut aut corporis accusantlum illo ullam qul laudantium , Maxime rerum sunt et  sequi sed",
    },
    {
        img:`${Images.city2}`,
        title:"Study in Canada",
        text:"Ut aut corporis accusantlum illo ullam qul laudantium , Maxime rerum sunt et  sequi sed",
    },
    {
        img:`${Images.city3}`,
        title:"Study in Uk",
        text:"Ut aut corporis accusantlum illo ullam qul laudantium , Maxime rerum sunt et  sequi sed",
    }
]


const Countries:React.FC = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 350,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


    return(
        <div className='bg-dark-gray w-full pb-16'>
                  <div className='flex flex-col w-9/12 m-auto mt-12'>
            <div className='flex flex-col items-center mt-8'>
                <div>
                    <p className='sm:text-4xl text-xl'>Countries We Covered</p>
                </div>
                <div className='mt-8'>
                    <p className='text-gray sm:text-xl text-base'>Sunt autem  hoc epicrus in  gravissimo bello animadversion metu  dengendae </p>
                </div>
               
            </div>
            <Slider  {...settings}>
            {Items.map((item) => (
                        <div className='sm:ml-4 -ml-2 h-1/2 flex flex-col sm:pt-0 pt-2 '>

                       <div className='ml-4  h-1/2 flex flex-col'>
                           <div className='sm:pt-2'>
                               <img src ={item.img} />
                           </div>  
                           <div className='mt-4'>
                               <p>{item.title}</p>
                           </div>
                           <div className='mt-2 text-gray'>
                               <p>{item.text}</p>
                           </div>         
                        </div>   
                        </div> 

                   ))}

             </Slider>
           
        </div>
        </div>
      
    )
}


export default Countries