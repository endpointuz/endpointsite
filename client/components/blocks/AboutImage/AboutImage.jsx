import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutImage = ({
  images,
}) => (
  <section className="images">
    <Container>
      <Row>
        {images.map(image => (
          <Col md={6} lg={4} key={image}>
            <div className="images-container" style={{ marginBottom: 30 }}>
              <img src={image} alt="Картинка команды" className="w-100" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default AboutImage;
