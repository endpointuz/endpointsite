import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TitleOne } from '../../simple';

import websiteTexts from '../../../websiteContent';

import arrowIcon from '../../../assets/img/arrow.svg';

const HeaderLeft = () => (
  <div className="header-left">
    <p className="header-left-label">Что мы делаем</p>
    <TitleOne
      text={websiteTexts.homepage.header.title}
    />
  </div>
);

const HeaderRight = () => (
  <div className="header-right">
    <p className="header-right-label">
      {websiteTexts.homepage.header.subtitle}
    </p>
    <p className="header-right-link">
      <Link to="/about" className="link-with-icon">
          <i className="icon-arrow" />
          <span>О нас и наших услугах</span>
      </Link>
    </p>
  </div>
);

const Header = () => (
    <Container className="header-container">
      <Row noGutters={true} className="header-row">
        <Col xl={6} className="header-col-left">
          <HeaderLeft />
        </Col>
        <Col xl={6} className="header-col-right">
          <HeaderRight />
        </Col>
      </Row>
    </Container>
);

export default Header;
