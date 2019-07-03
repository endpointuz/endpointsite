import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { YMaps, Placemark, Map } from 'react-yandex-maps';

const mapState = {
  center: [41.327724, 69.302760],
  zoom: 17,
};

const ContactsMain = () => (
  <section className="contacts-main">
    <Container>
      <Row>
        <Col lg={6} style={{ marginBottom: 40 }}>
          <div className="contacts-main-single">
            <p className="contacts-main-label">Звонить</p>
            <a href="tel:+998977543210" className="contacts-main-link">+998 97 754-32-10</a>
          </div>
        </Col>
        <Col lg={6} style={{ marginBottom: 40 }}>
          <div className="contacts-main-single">
            <p className="contacts-main-label">Писать</p>
            <a href="mailto:info@endpoint.uz" className="contacts-main-link">info@endpoint.uz</a>
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: 100 }}>
        <Col lg={6} style={{ marginBottom: 40 }}>
          <div className="contacts-main-single">
            <p className="contacts-main-text">г. Ташкент, Мирзо-Улугбекский р-н, ул. Аккурган 1 пр-д, д. 60</p>
          </div>
        </Col>
        <Col lg={6} style={{ marginBottom: 40 }}>
          <div className="contacts-main-single">
            <ul className="contacts-main-list">
              <li className="contacts-main-item">
                <a href="https://www.facebook.com/endpointuz/" target="_blank" rel="noopener noreferrer" className="contacts-main-link social">
                  Facebook
                </a>
              </li>
              <li className="contacts-main-item">
                <a href="https://www.instagram.com/endpoint.uz/" target="_blank" rel="noopener noreferrer" className="contacts-main-link social">
                  Instagram
                </a>
              </li>
              <li className="contacts-main-item">
                <a target="_blank" rel="noopener noreferrer" href="https://t.me/igakim" className="contacts-main-link social">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <YMaps>
            <Map
              defaultState={mapState}
              instanceRef={(ref) => {
                if (ref) {
                  ref.behaviors.disable('scrollZoom');
                  ref.behaviors.disable('drag');
                }
              }}
              className="map"
            >
              <Placemark geometry={mapState.center} />
            </Map>
          </YMaps>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ContactsMain;
