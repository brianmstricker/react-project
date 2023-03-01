import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5>
              <u>Links</u>
            </h5>
            <ul className="list-unstyled">
              <li>
                <div to="/">Home</div>
              </li>
              <li>
                <div to="/directory">Directory</div>
              </li>
              <li>
                <div to="/about">About</div>
              </li>
              <li>
                <div to="/contact">Contact</div>
              </li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="text-center">
            <h5>
              <u>Social</u>
            </h5>
            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
              <i className="fa fa-instagram" />
            </a>{" "}
            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/">
              <i className="fa fa-facebook" />
            </a>{" "}
            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
              <i className="fa fa-twitter" />
            </a>{" "}
          </Col>
          <Col sm="4" className="text-center">
            <h5>
              <u>Contact</u>
            </h5>
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone" /> 1-222-333-1234
            </a>
            <br />
            <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co">
              <i className="fa fa-envelope-o" /> emailhere@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
