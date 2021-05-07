import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBCardBody,
  MDBAnimation,
} from "mdbreact";
import "./index.css";
import "./Navbar.css";

class NavbarPage extends React.Component {
  render() {
  
    return (
      <div id="navpage">
        <Router>
          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <img
                    src="https://liquidavatar.com/wp-content/uploads/2021/04/Liquid-Avatar-Logo-W-Rev-v1a-NK.png"
                    className="avatar"
                    alt=""
                  />
                </MDBNavbarBrand>
              </MDBContainer>
            </MDBNavbar>
          </div>
        </Router>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient mt-5 pt-5">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="zoomIn"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                 <img
                src="https://liquidavatar.com/wp-content/uploads/2020/03/LA-M-Asn-bust-right-med2.png"
                className="avatar-img"
                alt=""
              />
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4 align-items-center">
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <MDBCardBody className="white-text">
                      <h1 className="header">What’s A Liquid Avatar?</h1>
                      <h4 className="head">Show The World Who You Are™</h4>
                      <p className="para">
                        A Liquid Avatar is a high quality, biometric and
                        blockchain secured online version of you! Now when you
                        go online, you can easily and securely provide who you
                        are and share only the information that you want to
                        share with others.
                      </p>
                      <p className="para">
                        You can also use different Liquid Avatars for each facet
                        of your personality. Choose different icons for
                        different groups like, family, friends, school,
                        business, social media, and others. Read more
                      </p>
                    </MDBCardBody>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default NavbarPage;
