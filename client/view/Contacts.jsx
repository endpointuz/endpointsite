import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Footer, ContactsMain } from '../components/blocks';
import { NavbarContainer } from '../containers';
import { TitleOne } from '../components/simple';
import frontTitle from '../../utils/frontRoutes';

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
        <Helmet>
          <title>{frontTitle.contactspage.title}</title>
          <meta name="description" content={frontTitle.contactspage.description} />
          <meta name="keywords" content={frontTitle.contactspage.keywords} />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Endpoint.uz" />
          <meta property="og:title" content={frontTitle.contactspage.og.title} />
          <meta property="og:description" content={frontTitle.contactspage.og.description} />
          <meta property="og:url" content={frontTitle.contactspage.og.url} />
          <meta property="og:image" content={`https://endpoint.uz${frontTitle.contactspage.og.image}`} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
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
