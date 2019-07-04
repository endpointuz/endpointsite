import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Footer } from '../components/blocks';
import { NavbarContainer, PortfolioContainer, RequestContainer } from '../containers';
import { TitleOne } from '../components/simple';
import syncIcon from '../assets/img/sync.svg';
import frontTitle from '../../utils/frontRoutes';

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
        <Helmet>
          <title>{frontTitle.portfoliopage.title}</title>
          <meta name="description" content={frontTitle.portfoliopage.description} />
          <meta name="keywords" content={frontTitle.portfoliopage.keywords} />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Endpoint.uz" />
          <meta property="og:title" content={frontTitle.portfoliopage.og.title} />
          <meta property="og:description" content={frontTitle.portfoliopage.og.description} />
          <meta property="og:url" content={frontTitle.portfoliopage.og.url} />
          <meta property="og:image" content={`https://endpoint.uz${frontTitle.portfoliopage.og.image}`} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
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
