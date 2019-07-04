import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Header,
  Services,
  Partners,
  Footer,
} from '../components/blocks';
import { PortfolioContainer, NavbarContainer, RequestContainer } from '../containers';
import { TitleOne } from '../components/simple';

import frontTitle from '../../utils/frontRoutes';

class Homepage extends React.Component {
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
          <title>{frontTitle.homepage.title}</title>
          <meta name="description" content={frontTitle.homepage.description} />
          <meta name="keywords" content={frontTitle.homepage.keywords} />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Endpoint.uz" />
          <meta property="og:title" content={frontTitle.homepage.og.title} />
          <meta property="og:description" content={frontTitle.homepage.og.description} />
          <meta property="og:url" content={frontTitle.homepage.og.url} />
          <meta property="og:image" content={`https://endpoint.uz${frontTitle.homepage.og.image}`} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <NavbarContainer
          darkTheme={false}
        />
        <header className="header">
          <Header />
        </header>

        <section className="portfolio">
          <Container style={{ marginBottom: 90 }}>
            <Row noGutters={true}>
              <Col xs={12}>
                <TitleOne
                  text="Последние работы"
                />
              </Col>
            </Row>
          </Container>

          <PortfolioContainer
          />

          <Container style={{ marginTop: 60 }}>
            <Row noGutters={true}>
              <Col xs={12} style={{ textAlign: 'center' }}>
                <Link to="/portfolio" className="portfolio-more link-with-icon">
                  <i className="icon-arrow" />
                  <span>Посмотреть все проекты</span>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="services">
          <Services />
        </section>

        <section className="partners">
          <Partners />
        </section>

        <section className="request">
          <RequestContainer
            title="Есть интересные проекты?"
            description="Оставь заявку и наш специалист свяжетсяс тобой, чтоб обсудить проект."
          />
        </section>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Homepage;
