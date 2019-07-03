import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TitleOne, Button } from '../../simple';

const Request = ({ toggleRequestVisibility, title, description }) => (
  <Container className="request-container">
    <Row className="request-row">
      <Col lg={10} className="request-col">
        <TitleOne
          text={title}
          style={{ color: '#1E266D' }}
        />
      </Col>
      <Col lg={5}>
        <p className="request-body">
          {description}
        </p>
      </Col>
      <Col lg={6}>
        <Button
          text="Оставить заявку"
          onClick={(e) => {
            e.preventDefault();
            toggleRequestVisibility();
          }}
        />
      </Col>
    </Row>
  </Container>
);

export default Request;
