
import imageicon1 from './../fonts/flaticon/svg/001-breakfast.svg';
import imageicon2 from './../fonts/flaticon/svg/002-planet-earth.svg';
import imageicon3 from './../fonts/flaticon/svg/003-airplane.svg';
import imageicon4 from './../fonts/flaticon/svg/004-beach.svg';
import imageicon5 from './../fonts/flaticon/svg/005-mountains.svg';
import imageicon6 from './../fonts/flaticon/svg/006-hot-air-balloon.svg';

const HomeIconSec =()=>{
    return(
        <>
        <section className="section bg-light-2">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-8">
                <h2 className="heading" data-aos="fade-up">
                  Experience Once In Your Life Time
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
              <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="d-block ftco-img-flaticon">
                  <img
                    src={imageicon1}
                    alt="Free Template by Free-Template.co"
                    className="img-fluid mb-4"
                  />
                  <h3>Good Foods</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="d-block ftco-img-flaticon">
                  <img
                    src={imageicon2}
                    alt="Free Template by Free-Template.co"
                    className="img-fluid mb-4"
                  />
                  <h3>Travel Anywhere</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="d-block ftco-img-flaticon">
                  <img
                    src={imageicon3}
                    alt="Free Template by Free-Template.co"
                    className="img-fluid mb-4"
                  />
                  <h3>Airplane</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="d-block ftco-img-flaticon">
                  <img
                    src={imageicon4}
                    alt="Free Template by Free-Template.co"
                    className="img-fluid mb-4"
                  />
                  <h3>Beach Resort</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="d-block ftco-img-flaticon">
                  <img
                    src={imageicon5}
                    alt="Free Template by Free-Template.co"
                    className="img-fluid mb-4"
                  />
                  <h3>Mountain Climbing</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="d-block ftco-img-flaticon">
                  <img
                    src={imageicon6}
                    alt="Free Template by Free-Template.co"
                    className="img-fluid mb-4"
                  />
                  <h3>Hot Air Balloon</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
};

export default HomeIconSec;