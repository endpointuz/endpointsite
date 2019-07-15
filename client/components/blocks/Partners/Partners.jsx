import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { TitleOne } from '../../simple';

import logoPicOne from '../../../assets/img/avtoritet.svg';
import logoPicTwo from '../../../assets/img/AWV.svg';
import logoPicThree from '../../../assets/img/loft.png';
import logoPicFour from '../../../assets/img/orient.svg';
import logoPicFive from '../../../assets/img/vclouds.svg';

const logos = [
  logoPicOne,
  logoPicTwo,
  logoPicThree,
  logoPicFour,
  logoPicFive,
];

const Partners = () => (
  <Container className="partners-container">
    <Row noGutters={true} className="partners-row">
      <Col xs={12} lg={5}>
        <TitleOne
          text="Клиенты и партнеры"
        />
      </Col>
    </Row>
    <Row className="align-items-center justify-content-between">
      {logos.map((logo, index) => (
        <Col xs={4} sm={4} md={2} lg={2} key={index}>
          <div className="partners-logo">
            <img src={logo} alt="Логотип партера"/>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Partners;
