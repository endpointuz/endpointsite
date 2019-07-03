import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import arrorWhite from '../../../assets/img/arrow-white.svg';
import arrorDark from '../../../assets/img/arrow-black.svg';

const Portfolio = ({ works }) => (
  <Container className="portfolio-container">
    <Row noGutters={true} className="portfolio-row">
      {works.map(el => (
        <Col key={el.id} lg={6} xl={6} className="portfolio-col">
          <div className="portfolio-project">
            <Link to={el.link} className="portfolio-link" />
            <div className="portfolio-project-bg" style={{ backgroundImage: `url(${el.picture})` }}></div>
            <div className="portfolio-project-header">
              <div className="portfolio-project-tags">
                <ul className="portfolio-project-list">
                  {el.tags.map(tag => (
                    <li key={tag} className={`portfolio-project-tag${el.darkTheme ? ' dark' : ' light'}`}>{tag}</li>
                  ))}
                </ul>
                <div className={`portfolio-project-date${el.darkTheme ? ' dark' : ' light'}`}>{el.date}</div>
              </div>
              <div className={`portfolio-project-title${el.darkTheme ? ' dark' : ' light'}`}>
                {el.name}
              </div>
            </div>
            <div className="portfolio-project-footer">
              <span className={`portfolio-project-footer-link link-with-icon${el.darkTheme ? ' dark' : ' light'}`}>
                <i className="icon-arrow" style={{
                  color: el.darkTheme ? '#000' : '#fff',
                }} />
                <span>Посмотреть проект</span>
              </span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Portfolio;
