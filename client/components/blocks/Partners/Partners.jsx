import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { TitleOne } from '../../simple';

import logoPicOne from '../../../assets/img/logos-01.png';
import logoPicTwo from '../../../assets/img/logos-02.png';
import logoPicThree from '../../../assets/img/logos-03.png';
import logoPicFour from '../../../assets/img/logos-04.png';

const logos = [
  logoPicOne,
  logoPicTwo,
  logoPicThree,
  logoPicFour,
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
    <Row>
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
