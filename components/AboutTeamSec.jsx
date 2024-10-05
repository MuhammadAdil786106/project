import person1 from './../images/person_1.jpg';
import person2 from './../images/person_2.jpg';
import person3 from './../images/person_3.jpg'; 

const AboutTeamSec=()=>{
    return(
        <>
            <section className="section">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-8">
                <h2 className="heading" data-aos="fade-up">
                  Team
                </h2>
                <p className="lead" data-aos="fade-up">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
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
                      src={person3}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <span className="meta-post">CEO, Co-Founder</span>
                    <h2 className="mt-0 mb-3">
                      <a href="#e">Vince Richardson</a>
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
                      src={person1}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <span className="meta-post">CTO, Co-Founder</span>
                    <h2 className="mt-0 mb-3">
                      <a href="#e">Jean Love</a>
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
                      src={person2}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <span className="meta-post">Marketer, Co-Founder</span>
                    <h2 className="mt-0 mb-3">
                      <a href="#e">Jeff Stark</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 post"
                data-aos="fade-up"
                data-aos-delay={100}
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
                    <span className="meta-post">CEO, Co-Founder</span>
                    <h2 className="mt-0 mb-3">
                      <a href="#e">Vince Richardson</a>
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
                      src={person1}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <span className="meta-post">CTO, Co-Founder</span>
                    <h2 className="mt-0 mb-3">
                      <a href="#e">Jean Love</a>
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
                      src={person2}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <span className="meta-post">Marketer, Co-Founder</span>
                    <h2 className="mt-0 mb-3">
                      <a href="#e">Jeff Stark</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default AboutTeamSec;