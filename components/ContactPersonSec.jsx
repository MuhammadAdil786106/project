import person1 from './../images/person_1.jpg';
import person2 from './../images/person_2.jpg';
import person3 from './../images/person_3.jpg';


const ContactPersonSec=()=>{
    return(
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
    )
}

export default ContactPersonSec;