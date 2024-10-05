import heroImage4 from './images/hero_4.jpg';
import Header from './components/header';
import Footer from './components/footer';
import ContactSec from './components/ContactSec';
import ContactPersonSec from './components/ContactPersonSec';

const Contact = () => {
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
          style={{ backgroundImage: `url(${heroImage4})` }}
        >
          <div className="container">
            <div className="row site-hero-inner justify-content-center align-items-center">
              <div className="col-md-10 text-center">
                <h1 className="heading" data-aos="fade-up">
                  Contact
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
        <ContactSec></ContactSec>
        <ContactPersonSec></ContactPersonSec>
        <footer className="section footer-section">
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default Contact;
