import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFoundPic from '../../../assets/img/404.png';
import arrowIcon from '../../../assets/img/arrow.svg';

const NotFoundContent = () => (
  <Container className="notfound-container">
    <Row className="notfound-row">
      <Col className="notfound-col" lg={6}>
        <img src={notFoundPic} alt="" className="w-100 notfound-img" />
      </Col>
      <Col className="notfound-col" lg={6}>
        <p className="notfound-text">
          Страница, которую ты ищешь, не существует
        </p>
      </Col>
      <Col className="notfound-col" lg={6}>
        <div className="notfound-links">
          <p className="notfound-link-container">
            <Link to="/">
              <img src={arrowIcon} alt="" />
              Перейти на главную
            </Link>
          </p>
          <p className="notfound-link-container">
            <Link to="/portfolio">
              <img src={arrowIcon} alt="" />
              Смотреть портфолио
            </Link>
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default NotFoundContent;
