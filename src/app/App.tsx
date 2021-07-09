import React from 'react';

import Header from '../components/Header/Header';
import CarouselHeader from '../components/Carousel/Carousel'
import Services from '../components/Services/Services'
import News from '../components/News/News'
import Events from '../components/Events/Events';
import Countries from '../components/Countries/Countries';
import Testimonial from '../components/Testimonial/Testimonial';
import ApplyOnline from '../components/ApplyOnline/ApplyOnline';
import Footer from '../components/Footer/Footer';


function App() {
  return (
    <div className="">
      <Header />
      <CarouselHeader />
      <Services />
      <News />
      <Events />
      <Countries />
      <Testimonial />
      <ApplyOnline />
      <Footer />
    </div>
  );
}

export default App;
