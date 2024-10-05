import img2 from './../images/img_2.jpg';
import img1 from './../images/img_1.jpg';
import img4 from './../images/img_4.jpg';
import img5 from './../images/img_5.jpg';
const HomeVisitSec =()=>{
    return(
        <section className="section visit-section">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-8 ">
                <h2 className="heading" data-aos="fade-up">
                  Top Destination
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
                className="col-lg-3 col-md-6 visit mb-3"
                data-aos="fade-right"
              >
                <a href="#e">
                  <img
                    src={img1}
                    alt="placeholder"
                    className="img-fluid"
                  />{" "}
                </a>
                <h3>
                  <a href="#e">Food &amp; Wines</a>
                </h3>
                <div className="reviews-star float-left">
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star-half" />
                  <span className="ion-android-star-outline" />
                </div>
                <span className="reviews-count float-right">3,239 reviews</span>
              </div>
              <div
                className="col-lg-3 col-md-6 visit mb-3"
                data-aos="fade-right"
                data-aos-delay={100}
              >
                <a href="#e">
                  <img
                    src={img2}
                    alt="placeholder"
                    className="img-fluid"
                  />{" "}
                </a>
                <h3>
                  <a href="#e">Resort &amp; Spa</a>
                </h3>
                <div className="reviews-star float-left">
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star-half" />
                  <span className="ion-android-star-outline" />
                </div>
                <span className="reviews-count float-right">4,921 reviews</span>
              </div>
              <div
                className="col-lg-3 col-md-6 visit mb-3"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <a href="#e">
                  <img
                    src={img4}
                    alt="placeholder"
                    className="img-fluid"
                  />{" "}
                </a>
                <h3>
                  <a href="#e">Hotel Rooms</a>
                </h3>
                <div className="reviews-star float-left">
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star-outline" />
                </div>
                <span className="reviews-count float-right">2,112 reviews</span>
              </div>
              <div
                className="col-lg-3 col-md-6 visit mb-3"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <a href="#e">
                  <img
                    src={img5}
                    alt="placeholder"
                    className="img-fluid"
                  />{" "}
                </a>
                <h3>
                  <a href="#e">Mountain Climbing</a>
                </h3>
                <div className="reviews-star float-left">
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star" />
                  <span className="ion-android-star-outline" />
                </div>
                <span className="reviews-count float-right">6,421 reviews</span>
              </div>
            </div>
          </div>
        </section>
    )
}
export default HomeVisitSec;