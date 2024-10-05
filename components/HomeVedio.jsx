import img1 from './../images/img_1.jpg';
const HomeVedio=()=>{
return(
    <section className="section" id="next-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4" data-aos="fade-up">
                <p>
                  <img
                    src={img1}
                    alt="Free Template by Free-Template"
                    className="img-fluid"
                  />
                </p>
              </div>
              <div className="col-lg-6 pl-lg-5" data-aos="fade-up">
                <h2 className="mb-4">Welcome To Our Website</h2>
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
                <p className="pt-4">
                  <a
                    href="https://vimeo.com/channels/staffpicks/93951774"
                    data-fancybox=""
                    className="btn-play d-flex"
                  >
                    <span className="icon align-self-center mr-3">
                      <span className="fa fa-play" />
                    </span>
                    <span className="text align-self-center">
                      Watch The Video
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
)};


export default HomeVedio;