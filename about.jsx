import heroImage3 from './images/hero_3.jpg';
import heroImage2 from './images/hero_2.jpg';
import Header from './components/header';
import Footer from './components/footer';
import AboutTeamSec from './components/AboutTeamSec';
import HomeSliderSec from './components/HomeSliderSec';

const About = () => {
  return (
    <>
      <div
        className="js-animsition animsition"
        id="site-wrap"
        data-animsition-in-class="fade-in"
        data-animsition-out-class="fade-out"
      >
        <Header></Header>
        {/* END head */}
        <section
          className="site-hero overlay page-inside"
          style={{ backgroundImage: `url(${heroImage2})` }}
        >
          <div className="container">
            <div className="row site-hero-inner justify-content-center align-items-center">
              <div className="col-md-10 text-center">
                <h1 className="heading" data-aos="fade-up">
                  About Us
                </h1>
                <p
                  className="sub-heading mb-5"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  A free template by{" "}
                  <a rel="noreferrer" href="https:/" target="_blank">
                    Colorlib
                  </a>
                  . Download and share!
                </p>
              </div>
            </div>
            {/* <a href="#e" class="scroll-down">Scroll Down</a> */}
          </div>
        </section>
        {/* END section */}
        <section className="section">
          <div className="container">
            <div className="half d-md-flex d-block">
              <div
                className="image"
                data-aos="fade"
                style={{ backgroundImage: `url(${heroImage3})` }}
              />
              <div className="text" data-aos="fade-right" data-aos-delay={200}>
                <h2>Welcome Travel &amp; Tours</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.{" "}
                </p>
                <p className="mt-5">
                  <a href="#e" className="btn btn-primary uppercase">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <HomeSliderSec></HomeSliderSec>
        {/* END section */}
        <AboutTeamSec></AboutTeamSec>
        <footer className="section footer-section">
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default About;
