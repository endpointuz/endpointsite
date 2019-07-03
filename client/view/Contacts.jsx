import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer, ContactsMain } from '../components/blocks';
import { NavbarContainer } from '../containers';
import { TitleOne } from '../components/simple';

class Contacts extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
      document.querySelector('.loader').classList.add('loaded');
    }, 1500);
    setTimeout(() => {
      document.querySelector('.loader-circle').classList.add('loaded');
    }, 1000);
  }

  componentWillUnmount() {
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <NavbarContainer />
        <section className="contacts">
          <Container>
            <Row>
              <Col lg={7} xl={7}>
                <TitleOne
                  text="Контакты"
                />
                <p className="page-header-description">
                  У тебя есть вопросы, ты хочешь с нами сотрудничать?
                  Звони, пиши или заглядывай к нам в офис
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <ContactsMain />
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Contacts;
