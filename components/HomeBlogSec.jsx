import img1 from './../images/img_1.jpg';
import img2 from './../images/img_2.jpg';
import img3 from './../images/img_3.jpg';
import person1 from './../images/person_1.jpg';
import person2 from './../images/person_2.jpg';
import person3 from './../images/person_3.jpg';

const HomeBlogSec = ()=>{
    return(
        <>
         <section className="section blog-post-entry bg-light slant-top">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-8 primary-bg-text">
                <h2 className="heading" data-aos="fade-up">
                  Recent Blog Post
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
                  <a rel="noreferrer" href="#e" className="mb-4 d-block">
                    <img
                      src={img1}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <span className="meta-post">February 26, 2018</span>
                    <h2 className="mt-0 mb-3">
                      <a rel="noreferrer" href="#e">45 Best Places To Unwind</a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.{" "}
                    </p>
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
                      src={img2}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <span className="meta-post">February 26, 2018</span>
                    <h2 className="mt-0 mb-3">
                      <a href="#e">45 Best Places To Unwind</a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-12 post"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="media media-custom d-block mb-4">
                  <a href="#e" className="mb-4 d-block">
                    <img
                      src={img3}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <span className="meta-post">February 26, 2018</span>
                    <h2 className="mt-0 mb-3">
                      <a href="#e">45 Best Places To Unwind</a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END section */}
        <section className="section testimonial-section bg-light-2">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-8">
                <h2 className="heading" data-aos="fade-up">
                  Happy Customers
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="testimonial">
                  <div className="author-image mb-3">
                    <img
                      src={person1}
                      alt="placeholder"
                      className="rounded-circle"
                    />
                  </div>
                  <blockquote>
                    <p>
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.”
                    </p>
                  </blockquote>
                  <p>
                    <em>— Clare Gupta</em>
                  </p>
                </div>
              </div>
              {/* END col */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="testimonial">
                  <div className="author-image mb-3">
                    <img
                      src={person2}
                      alt="placeholder"
                      className="rounded-circle"
                    />
                  </div>
                  <blockquote>
                    <p>
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.rdquo;
                    </p>
                  </blockquote>
                  <p>
                    <em>— Rogie Slater</em>
                  </p>
                </div>
              </div>
              {/* END col */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="testimonial">
                  <div className="author-image mb-3">
                    <img
                      src={person3}
                      alt="placeholder"
                      className="rounded-circle"
                    />
                  </div>
                  <blockquote>
                    <p>
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.”
                    </p>
                  </blockquote>
                  <p>
                    <em>— John Doe</em>
                  </p>
                </div>
              </div>
              {/* END col */}
            </div>
          </div>
        </section>
        </>
    )
};


export default HomeBlogSec;