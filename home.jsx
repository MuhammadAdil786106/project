import Header from './components/header';
import Footer from './components/footer';
import HomeVedio from './components/HomeVedio';
import HomeSliderSec from './components/HomeSliderSec';
import HomeVisitSec from './components/HomeVisitSec';
import HomeBlogSec from './components/HomeBlogSec';
import heroImage1 from './images/hero_1.jpg';
import HomeIconSec from './components/HomeIconSec';

const Home = () => {
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
          className="site-hero overlay"
          style={{ backgroundImage: `url(${heroImage1})` }}
        >
          <div className="container">
            <div className="row site-hero-inner justify-content-center align-items-center">
              <div className="col-md-10 text-center">
                <h1 className="heading mb-4" data-aos="fade-up">
                  Travel &amp; Tours
                </h1>
                <p
                  className="sub-heading mb-5"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  A free template by{" "}
                  <a rel="noreferrer" href="https://" target="_blank">
                    Colorlib
                  </a>
                  . Download and share!
                </p>
                <p className="pt-4" data-aos="fade-up" data-aos-delay={100}>
                  <a
                    rel="noreferrer"
                    href="https://"
                    target="_blank"
                    className="btn uppercase btn-outline-light d-sm-inline d-block py-3"
                  >
                    Visit Colorlib-Hepta
                  </a>
                </p>
              </div>
            </div>
            <p data-aos="fade-up" data-aos-offset={-500}>
              <a href="#next-section" className="scroll-down smoothscroll">
                {" "}
                <span className="fa fa-play" /> Scroll Down
              </a>
            </p>
          </div>
        </section>
        {/* END section */}
        <HomeVedio></HomeVedio>
        <HomeIconSec></HomeIconSec>
        <HomeSliderSec></HomeSliderSec>
        {/* END section */}
        <HomeBlogSec></HomeBlogSec>
        <HomeVisitSec></HomeVisitSec>
        {/* END section */}
        <footer className="section footer-section">
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};



export default Home;