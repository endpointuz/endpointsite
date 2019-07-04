import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Footer } from '../components/blocks';
import { NavbarContainer } from '../containers';
import { TitleOne } from '../components/simple';
import logobankImage from '../assets/img/logobank-project.png';
import knowledgeImage from '../assets/img/knowledge-project.png';
import ProjectsCard from '../components/simple/ProjectsCard';
import frontTitle from '../../utils/frontRoutes';


class Projects extends React.Component {
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
          <title>{frontTitle.projectspage.title}</title>
          <meta name="description" content={frontTitle.projectspage.description} />
          <meta name="keywords" content={frontTitle.projectspage.keywords} />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Endpoint.uz" />
          <meta property="og:title" content={frontTitle.projectspage.og.title} />
          <meta property="og:description" content={frontTitle.projectspage.og.description} />
          <meta property="og:url" content={frontTitle.projectspage.og.url} />
          <meta property="og:image" content={frontTitle.projectspage.og.image} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <NavbarContainer />
        <section className="projects">
          <Container>
            <Row>
              <Col lg={7} xl={7}>
                <header className="projects-header">
                  <TitleOne
                    text="Наши проекты"
                  />
                  <p className="page-header-description">
                    Мы знаем что только люди, объединённые общим делом и
                    одной мечтой способны создавать гениально простые вещи.
                  </p>
                  <p className="page-header-description">
                    Благодаря этому принципу в endpoint появились
                    дочерние проекты, которыми мы гордимся.
                  </p>
                </header>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={12} style={{ marginBottom: 40 }}>
                <ProjectsCard
                  title="Logobank"
                  description="Запилили единую базу всех логотипов известных фирм, предприятий и организаций Узбекистана в популярных форматах .cdr .png .eps с возможностью бесплатного скачивания"
                  backgroundPicture={logobankImage}
                  link={{
                    href: 'https://logobank.uz',
                    text: 'logobank.uz',
                  }}
                  gradient="gradient-1"
                />
              </Col>
              <Col xs={12}>
                <ProjectsCard
                  title="Knowledge"
                  description="IT-школа в которой вдохновляем, делимся знаниями и выпускаем востребованных специалистов. Наша миссия: Поднять IT индустрию в Узбекистане на качественно новый уровень"
                  backgroundPicture={knowledgeImage}
                  link={{
                    href: 'https://knowledge.uz',
                    text: 'knowledge.uz',
                  }}
                  gradient="gradient-2"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Projects;
