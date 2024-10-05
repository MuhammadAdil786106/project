import img1 from './../images/img_1.jpg';
import person2 from './../images/person_2.jpg';
import person3 from './../images/person_3.jpg';
import HomeSliderSec from'./HomeSliderSec';


const HotelSliderBlogSec=()=>{
    return(
        <>
          <HomeSliderSec></HomeSliderSec>
        {/* END section */}
        <section className="section blog-post-entry bg-pattern">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-8">
                <h2 className="heading" data-aos="fade-up">
                  More Hotel Features
                </h2>
                <p className="lead" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                  dolor, iusto doloremque quo odio repudiandae sunt eveniet?
                  Enim facilis laborum voluptate id porro, culpa maiores quis,
                  blanditiis laboriosam alias. Sed.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 post"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="media media-custom d-block mb-4">
                  <a href="#e" className="mb-4 d-block">
                    <img
                      src={img1}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <h2 className="mt-0 mb-3">
                      <a href="#e">Five Reasons to Stay at Villa Resort</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 post"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="media media-custom d-block mb-4">
                  <a href="#e" className="mb-4 d-block">
                    <img
                      src={person2}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <h2 className="mt-0 mb-3">
                      <a href="#e">Five Reasons to Stay at Villa Resort</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 post"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="media media-custom d-block mb-4">
                  <a href="#e" className="mb-4 d-block">
                    <img
                      src={person3}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <h2 className="mt-0 mb-3">
                      <a href="#e">Five Reasons to Stay at Villa Resort</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
};

export default HotelSliderBlogSec;