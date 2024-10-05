
const Footer=()=>{
    return(
        <div className="container">
            <div className="row mb-4">
              <div className="col-md-3 mb-5">
                <h3>Quick Link</h3>
                <ul className="list-unstyled link">
                  <li>
                    <a href="#e">About Us</a>
                  </li>
                  <li>
                    <a href="#e">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#e">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#e">Help</a>
                  </li>
                  <li>
                    <a href="#e">Rooms</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-5">
                <h3>Support</h3>
                <ul className="list-unstyled link">
                  <li>
                    <a href="#e">Our Location</a>
                  </li>
                  <li>
                    <a href="#e">The Hosts</a>
                  </li>
                  <li>
                    <a href="#e">About</a>
                  </li>
                  <li>
                    <a href="#e">Contact</a>
                  </li>
                  <li>
                    <a href="#e">Restaurant</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-5 pr-md-5 contact-info">
                <h3>Contact Info</h3>
                <p>
                  <span className="d-block">Address:</span>{" "}
                  <span> 98 West 21th Street, Suite 721 New York NY 10016</span>
                </p>
                <p>
                  <span className="d-block">Phone:</span>{" "}
                  <span> (+1) 435 3533</span>
                </p>
                <p>
                  <span className="d-block">Email:</span>{" "}
                  <span> info@yourdomain.com</span>
                </p>
              </div>
              <div className="col-md-3 mb-5">
                <h3>Subscribe</h3>
                <p>Sign up for our newsletter</p>
                <form action="#" className="footer-newsletter">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email..."
                    />
                    <button type="submit" className="btn">
                      <span className="fa fa-paper-plane" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row bordertop text-center pt-5">
              <p className="col-md-12">
                © Copyright 2018. All Rights Reserved. <br /> Designed &amp;
                Developed by{" "}
                <a href="/">Colorib</a> <br />
                Distributed by <a href="/">Adil</a>
              </p>
              <p className="col-md-12 social">
                <a href="#e">
                  <span className="fa fa-facebook" />
                </a>
                <a href="#e">
                  <span className="fa fa-twitter" />
                </a>
                <a href="#e">
                  <span className="fa fa-instagram" />
                </a>
                <a href="#e">
                  <span className="fa fa-linkedin" />
                </a>
                <a href="#e">
                  <span className="fa fa-youtube" />
                </a>
              </p>
            </div>
          </div>
    )
}

export default Footer;