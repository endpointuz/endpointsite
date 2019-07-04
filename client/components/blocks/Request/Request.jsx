import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TitleOne, Button } from '../../simple';

const Request = ({
  toggleRequestVisibility, title, description, hasShare, location,
}) => (
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
      {
        hasShare
          ? <Col lg={6}>
              <div className="share-buttons">
                <a target="_blank"
                   rel="noopener noreferrer"
                   href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : location.url}`}
                   className="share-buttons-item">
                  Поделиться в Facebook
                </a>
                <a target="_blank"
                   rel="noopener noreferrer"
                   href={`tg://msg_url?url=${typeof window !== 'undefined' ? window.location.href : location.url}`}
                   className="share-buttons-item">
                  Поделиться в Telegram
                </a>
              </div>
            </Col>
          : null
      }
    </Row>
  </Container>
);

export default Request;
