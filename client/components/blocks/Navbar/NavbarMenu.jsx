import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import posed, { PoseGroup } from 'react-pose';
import NavbarMenuList from './NavbarMenuList';
import NavbarMenuFooterInfo from './NavbarMenuFooterInfo';

import presentation from '../../../assets/files/Endpoint_presentation.pdf';

import arrowIcon from '../../../assets/img/arrow.svg';

const MenuContainer = posed.div({
  enter: {
    transform: 'translateX(0%)',
    transition: {
      duration: 300,
    },
  },
  exit: {
    transform: 'translateX(100%)',
    transition: {
      duration: 300,
    },
  },
});

const NavigatorContainer = ({ isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      document.querySelector('body')
        .classList
        .add('noScroll');
    } return () => {
      document.querySelector('body')
        .classList
        .remove('noScroll');
    };
  });
  return (
    <Container className="navigator-container">
      <Row noGutters={true} style={{ height: '100%' }}>
        <Col xl={12}>
          <NavbarMenuList />
        </Col>
        <Col xl={12} className="d-none d-lg-block">
          <p className="navigator-presentation">
            <a href={presentation} download className="navigator-presentation-link">
              <img src={arrowIcon} alt="Стрелка направо" /> Скачать презентацию в pdf - 8.1 Мб
            </a>
          </p>
        </Col>
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
              <Col md={6} lg={3} xl={3} className="d-none d-sm-block">
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
    </Container>
  );
};

const NavbarMenu = ({
  isVisible = false,
}) => (
  <PoseGroup>
    {
      isVisible ? (
        <MenuContainer className="navigator" key="navigator">
          <NavigatorContainer isVisible={isVisible} />
        </MenuContainer>
      ) : null
    }
  </PoseGroup>
);


export default NavbarMenu;
