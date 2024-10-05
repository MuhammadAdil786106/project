


const ContactSec =()=>{
    return(
        <section className="section contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <form
                  action="#"
                  method="post"
                  className="bg-white p-md-5 p-4 mb-5"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" className="form-control " />
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" id="phone" className="form-control " />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control "
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="message">Write Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control "
                        cols={30}
                        rows={8}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <div className="row">
                  <div className="col-md-10 ml-auto contact-info">
                    <p>
                      <span className="d-block">Address:</span>{" "}
                      <span>
                        {" "}
                        98 West 21th Street, Suite 721 New York NY 10016
                      </span>
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
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default ContactSec;