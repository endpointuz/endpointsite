import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import {
  Footer, AboutImage, AboutService, AboutTeam, Partners,
} from '../components/blocks';
import { NavbarContainer } from '../containers';
import { TitleOne } from '../components/simple';

import websiteTexts from '../websiteContent';

import teamWork1 from '../assets/img/team-work-1-min.jpg';
import teamWork2 from '../assets/img/team-work-2-min.jpg';
import teamWork3 from '../assets/img/team-work-3-min.jpg';
import teamWork4 from '../assets/img/team-work-4-min.jpg';
import teamWork5 from '../assets/img/team-work-5-min.jpg';
import teamWork6 from '../assets/img/team-work-6-min.jpg';
import pythonIcon from '../assets/img/python.svg';
import phpIcon from '../assets/img/php.png';
import nodejsIcon from '../assets/img/nodejs.svg';
import goIcon from '../assets/img/go.svg';
import javaIcon from '../assets/img/java.svg';
import kotlinIcon from '../assets/img/kotlin.svg';
import swiftIcon from '../assets/img/swift.svg';
import javascriptIcon from '../assets/img/javascript.svg';
import reactIcon from '../assets/img/react.svg';
import vuejsIcon from '../assets/img/vuejs.svg';
import frontTitle from '../../utils/frontRoutes';


const images = [
  teamWork1, teamWork2, teamWork3, teamWork4, teamWork5, teamWork6,
];

const iconsFirst = [
  pythonIcon,
  phpIcon,
  nodejsIcon,
  goIcon,
  javaIcon,
];

const iconsSecond = [
  kotlinIcon,
  swiftIcon,
  javascriptIcon,
  reactIcon,
  vuejsIcon,
];

class About extends React.Component {
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

  renderIcons = icons => (
    <div className="about-page-service-images">
      {icons.map(icon => (
        <div className="about-page-service-container" key={icon}>
          <img src={icon} alt="" className="w-100"/>
        </div>
      ))}
    </div>
  )

  render() {
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <Helmet>
          <title>{frontTitle.aboutpage.title}</title>
          <meta name="description" content={frontTitle.aboutpage.description} />
          <meta name="keywords" content={frontTitle.aboutpage.keywords} />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Endpoint.uz" />
          <meta property="og:title" content={frontTitle.aboutpage.og.title} />
          <meta property="og:description" content={frontTitle.aboutpage.og.description} />
          <meta property="og:url" content={frontTitle.aboutpage.og.url} />
          <meta property="og:image" content={`https://endpoint.uz${frontTitle.aboutpage.og.image}`} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <NavbarContainer />
        <section className="about">
          <Container>
            <Row>
              <Col lg={7} xl={7}>
                <TitleOne
                  text="О нас"
                />
                <p className="about-subtitle">{websiteTexts.aboutpage.header.title}</p>
                <p className="page-header-description">
                  {websiteTexts.aboutpage.header.subtitle}
                </p>
                <p className="page-header-description">
                  {websiteTexts.aboutpage.header.secondSubtitle}
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <AboutImage
          images={images}
        />
        <AboutService title={websiteTexts.aboutpage.aboutService.productDesign.title}>
          <p className="page-header-description" style={{ lineHeight: '40px' }}>
            {websiteTexts.aboutpage.aboutService.productDesign.description}
          </p>
        </AboutService>
        <AboutService title={websiteTexts.aboutpage.aboutService.productDevelopment.title}>
          <p className="page-header-description" style={{ lineHeight: '40px' }}>
            {websiteTexts.aboutpage.aboutService.productDevelopment.description}
          </p>
          {this.renderIcons(iconsFirst)}
          {this.renderIcons(iconsSecond)}
        </AboutService>
        <AboutService title={websiteTexts.aboutpage.aboutService.marketing.title}>
          <p className="page-header-description" style={{ lineHeight: '40px' }}>
            {websiteTexts.aboutpage.aboutService.marketing.description}
          </p>
        </AboutService>
        <AboutTeam />
        <section className="partners">
          <Partners />
        </section>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default About;
