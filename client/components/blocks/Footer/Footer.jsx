import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarMenuFooterInfo from '../Navbar/NavbarMenuFooterInfo';

const Footer = ({ hasCredits = true }) => (
  <Container>
    <Row noGutters={true}>
      <Col xl={12} style={{ alignSelf: 'flex-end' }}>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col md={6} lg={3} xl={3} className="mb-md-20">
              <NavbarMenuFooterInfo label="Звонить">
                <p className="navigator-footer-phone">
                  <a href="tel:+998977543210">+998 97 754-32-10</a>
                </p>
              </NavbarMenuFooterInfo>
            </Col>
            <Col md={6} lg={3} xl={3} className="mb-md-20">
              <NavbarMenuFooterInfo label="Писать">
                <p className="navigator-footer-email">
                  <a href="mailto:info@endpoint.uz">info@endpoint.uz</a>
                </p>
              </NavbarMenuFooterInfo>
            </Col>
            <Col md={6} lg={3} xl={3} className="d-none d-sm-block d-footer">
              <NavbarMenuFooterInfo label="Приходить">
                <p className="navigator-footer-address">
                  г. Ташкент, Мирзо-Улугбекскийр-н, ул. Аккурган 1 пр-д, д. 60
                </p>
              </NavbarMenuFooterInfo>
            </Col>
            <Col md={6} lg={3} xl={3}>
              <NavbarMenuFooterInfo label="Следить">
                <ul className="navigator-footer-social-list">
                  <li className="navigator-footer-social-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/endpointuz/" className="navigator-footer-social-link">
                      Facebook
                    </a>
                  </li>
                  <li className="navigator-footer-social-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/endpoint.uz/" className="navigator-footer-social-link">
                      Instagram
                    </a>
                  </li>
                  <li className="navigator-footer-social-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://t.me/igakim" className="navigator-footer-social-link">
                      Telegram
                    </a>
                  </li>
                </ul>
              </NavbarMenuFooterInfo>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
    {
      hasCredits
        ? (
          <Row className="footer-credit">
            <Col sm={6} lg={6}>
              <p className="footer-credit-label">© 2019 Endpoint</p>
            </Col>
            <Col sm={6} lg={6} className="d-none">
              <p className="footer-credit-conf">
                <Link to="/">Политика конфиденциальности</Link>
              </p>
            </Col>
          </Row>
        ) : null
    }
  </Container>
);

export default Footer;
