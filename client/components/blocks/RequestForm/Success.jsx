import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Success = ({ resetStatusOfSendMail }) => {
  useEffect(() => {
    return () => {
      resetStatusOfSendMail();
    };
  });

  return (
    <Row className="request-form-row">
      <Col xl={8}>
        <p className="request-form-success-icon">
          <FontAwesomeIcon icon="check" />
        </p>
        <h2 className="request-form-success-title">Спасибо. Заявка успешно отправлена</h2>
        <p className="request-form-text">
          Наш менеджер свяжется с тобой ближайшее время.
        </p>
      </Col>
    </Row>
  );
}

export default Success;
