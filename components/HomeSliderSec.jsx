
import slider1 from './../images/slider-1.jpg';
import slider2 from './../images/slider-2.jpg';
import slider3 from './../images/slider-3.jpg';
import slider4 from './../images/slider-4.jpg';
import slider5 from './../images/slider-5.jpg';
import slider6 from './../images/slider-6.jpg';
import React from 'react';
import CustomCarousel from './CustomCarousel';




const images = [
  { imgURL: slider1, imgAlt: 'Image 1' },
  { imgURL: slider2, imgAlt: 'Image 2' },
  { imgURL: slider3, imgAlt: 'Image 3' },
  { imgURL: slider4, imgAlt: 'Image 4' },
  { imgURL: slider5, imgAlt: 'Image 5' },
  { imgURL: slider6, imgAlt: 'Image 6' },
];

const HomeSliderSec = ()=>{
    return(
        <section className="section slider-section">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-8">
                <h2 className="heading" data-aos="fade-up">
                  International Tour Management.
                </h2>
                <p className="lead" data-aos="fade-up" data-aos-delay={100}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="home-slider major-caousel owl-carousel mb-5 container__slider"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                    <CustomCarousel>
                      {images.map((image, index) => (
                        <div className="slider-item" key={index}>
                          <img src={image.imgURL} alt={image.imgAlt} className="img-fluid" />
                        </div>
                      ))}
                    </CustomCarousel>
                </div>
                {/* END slider */}
              </div>
            </div>
          </div>
        </section>
    )
}


export default HomeSliderSec;