import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../components/blocks';
import { NavbarContainer, PortfolioContainer, RequestContainer } from '../containers';
import { TitleOne } from '../components/simple';
import syncIcon from '../assets/img/sync.svg';

class Portfolio extends React.Component {
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
        <section className="portfolio full-page">
          <Container style={{ marginBottom: 40 }}>
            <Row noGutters={true}>
              <Col xs={12}>
                <TitleOne
                  text="Портфолио"
                />
              </Col>
            </Row>
          </Container>

          <PortfolioContainer
            hasFilter={true}
          />

          <Container style={{ marginTop: 60 }} className="d-none">
            <Row noGutters={true}>
              <Col xs={12} style={{ textAlign: 'center' }}>
                <Link to="/" className="portfolio-more">
                  <img src={syncIcon} alt="Иконка синхронизации" />
                  Загрузить еще
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="request">
          <RequestContainer
            title="Есть интересные проекты?"
            description="Оставьте заявку и наш специалист свяжется с Вами, чтоб обсудить проект."
          />
        </section>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Portfolio;
