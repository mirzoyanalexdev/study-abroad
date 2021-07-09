import React from "react";
import Slider from 'react-slick'

import { Images } from '../../consts'

const CarouselHeader: React.FC = () => {

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
        <div className='w-9/12 m-auto pt-8'>
            <Slider  {...settings}>
                    <div >
                        <img src={Images.caruselImg1}/>
                    </div>
                    <div>
                        <img src={Images.caruselImg2}/>
                    </div>
                    <div>
                        <img src={Images.caruselImg3}/>
                    </div>
                    <div>
                        <img src={Images.caruselImg4}/>
                     </div>
                     <div >
                        <img src={Images.caruselImg1}/>
                    </div>
                    <div >
                        <img src={Images.caruselImg2}/>
                    </div>
             </Slider>
        </div>
    )
}

export default CarouselHeader