import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TitleOne } from '../../simple';

const AboutService = (
  {
    title,
    children,
  }
) => (
  <section className="about-page-service">
    <Container>
      <Row>
        <Col lg={12}>
          <TitleOne text={title} />
        </Col>
      </Row>
      <Row>
        <Col lg={7} className="ml-auto">
          {children}
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutService;
