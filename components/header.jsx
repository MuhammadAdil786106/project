import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 


const Header =()=>{
    const [navebar, setNavebar] = useState(false);
  const openNavebar = ()=>{
    setNavebar(!navebar);
    console.log("clicked");
  };
  const closeNavebar = () => {
    setNavebar(false);
    console.log("Navbar closed");
  };
    return(
        
        <header className="site-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4 site-logo" data-aos="fade">
                <Link to="/" className="animsition-link">
                  Hepta
                </Link>
              </div>
              <div className="col-8">
                <div
                  className="site-menu-toggle js-site-menu-toggle " onClick={openNavebar}
                  data-aos="fade"
                >
                  <span />
                  <span />
                  <span />
                </div>
                {/* END menu-toggle */}
                {navebar && (
                <div className="site-navbar js-site-navbar">
                  <nav role="navigation">
                    <div className="container">
                      <div className="row full-height align-items-center">
                        <div className="col-md-12 justify-content-center">
                          <ul className="list-unstyled menu">
                            <li className="active">
                            <Link to="/"  className="animsition-link">
                            Home
                            </Link> 
                            </li>
                            <li>
                            <Link to="/hotel"  className="animsition-link">
                            Hotels
                            </Link>
                            </li>
                            <li>
                            <Link to="/about"  className="animsition-link">
                            About Us
                            </Link>
                            </li>
                            <li>
                              <Link to="/gallery" onClick={openNavebar} className="animsition-link">
                              Gallery
                            </Link>
                            </li>
                            <li>
                            <Link to="/blog"  className="animsition-link">
                            News
                            </Link>
                            </li>
                            <li>
                            <Link to="/contact"  className="animsition-link" onClick={closeNavebar}>
                            Contact
                            </Link>
                            </li>
                          </ul>
                          <div className="close-button" onClick={closeNavebar}>
                            ✖
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>)}
              </div>
            </div>
          </div>
        </header>          
    )

};


export default Header;