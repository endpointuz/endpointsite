import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import posed, { PoseGroup } from 'react-pose';

import { MenuItems } from '../../simple';
import NavbarMenu from './NavbarMenu';
import { RequestFormContainer } from '../../../containers';
import logo from '../../../assets/img/logo.png';
import logoInv from '../../../assets/img/logo-inv.png';

const Burger = ({ className = '' }) => (
  <div className={`burger ${className}`}>
    <div className="burger-top"></div>
    <div className="burger-bottom"></div>
  </div>
);

const MenuItemsContainer = posed.div({
  show: {
    applyAtStart: { display: 'block' },
    transition: {
      duration: 200,
      delay: 300,
    },
    opacity: 1,
  },
  hide: {
    applyAtEnd: { display: 'none' },
    transition: {
      duration: 200,
      delay: 300,
    },
    opacity: 0,
  },
});

const LogoContainer = posed.div({
  enter: {
    width: 180,
    transition: {
      duration: 100,
      delay: 100,
    },
  },
  exit: {
    width: 0,
    transition: {
      duration: 100,
      delay: 250,
    },
  },
});
const LogoSContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 100,
      delay: 250,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 100,
      delay: 70,
    },
  },
});

const Navbar = ({
  darkTheme = false,
  requestVisibility,
  toggleRequestVisibility,
  style,
}) => {
  const [visibleMenu, toggleMenuVisibility] = useState(false);
  const [pageY, setPageY] = useState(null);
  const [scrollMenuVisible, setScrollMenuVisibility] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();
    if (requestVisibility) {
      toggleRequestVisibility();
      setScrollMenuVisibility(true);
      return;
    }
    toggleMenuVisibility(!visibleMenu);
  };

  const handleScroll = () => {
    if (!visibleMenu) {
      const prevScrollpos = pageY;
      const currentScrollPos = window.pageYOffset;
      const visible = (prevScrollpos > currentScrollPos) || (currentScrollPos < 100);
      setPageY(currentScrollPos);
      setScrollMenuVisibility(visible);
    }
  };

  useEffect(() => {
    setPageY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleToggleRequestVisibility = (e) => {
    e.preventDefault();
    toggleRequestVisibility();
    setScrollMenuVisibility(true);
  };

  const menuOnTop = pageY === 0;

  const visibilityTopNavbar = scrollMenuVisible || visibleMenu || requestVisibility;

  return (
    <div className={`navbar${visibilityTopNavbar ? ' visible' : ''}${menuOnTop ? ' onTop' : ''}`}>
      <div className={`navbar-pos${visibleMenu ? ' bg' : ''}`}>
        <Container fluid={true} className="navbar-container">
          <Row className="align-items-center">
            <Col xs={8} md={4} lg={3} xl={2}>
              <PoseGroup>
                {
                  !visibleMenu && !darkTheme && !requestVisibility
                    ? <LogoContainer key="first">
                        <Link to="/" className="navbar-logo">
                          <img src={logo} alt="Логотип компании Endpoint" style={{ width: 180 }} />
                        </Link>
                      </LogoContainer>
                    : <LogoSContainer key="second">
                        <Link to="/" className="navbar-logo">
                          <img src={logoInv} alt="Логотип компании Endpoint" style={{ width: 180 }} />
                        </Link>
                      </LogoSContainer>
                }
              </PoseGroup>
            </Col>
            <Col lg={7} xl={6} className="navbar-right ml-auto">
              {
                darkTheme
                  ? (
                    <MenuItems>
                      <a className="dark" href="tel:+998977543210">+998 97 754-32-10</a>
                      <a className="dark" href="" onClick={handleToggleRequestVisibility}>Оставить заявку</a>
                    </MenuItems>
                  ) : (
                    <MenuItemsContainer pose={visibleMenu || requestVisibility ? 'hide' : 'show'}>
                      <MenuItems>
                        <a href="tel:+998977543210" >+998 97 754-32-10</a>
                        <a href="" onClick={handleToggleRequestVisibility}>Оставить заявку</a>
                      </MenuItems>
                    </MenuItemsContainer>
                  )
              }
            </Col>
            <Col xs={4} md={1} lg={1} xl={1} className="ml-lg-auto">
              <a className={`menu-toggler${visibleMenu || requestVisibility ? ' open' : ''}${darkTheme ? ' dark' : ''}`} onClick={handleToggle}>
                <Burger
                  className={`${darkTheme ? ' dark' : ''}`}
                />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`navbar-bg${darkTheme ? ' dark' : ''}`} style={style || null}></div>
      <NavbarMenu
        isVisible={visibleMenu}
      />
      <RequestFormContainer
        isVisible={requestVisibility}
      />
    </div>
  );
};

export default Navbar;
