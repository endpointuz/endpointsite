import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import linkIcon from '../../assets/img/link.svg';

import { TitleOne } from '.';

const ProjectsCard = ({
  title,
  backgroundPicture,
  description,
  link,
  gradient,
}) => (
  <div className={`projects-card ${gradient}`}>
    <div
      className="projects-card-background"
      style={{
        backgroundImage: `url(${backgroundPicture})`,
      }}
    >
      <div className="projects-card-wrapper">
        <Container>
          <Row>
            <Col lg={6} xl={6}>
              <TitleOne
                text={title}
                style={{
                  color: '#fff',
                }}
              />
              <p className="projects-card-description">
                {description}
              </p>
              <div className="projects-card-footer">
                <p className="projects-card-footer-label">Посмотреть проект</p>
                <p className="projects-card-footer-link">
                  <a target="_blank" rel="noopener noreferrer" href={link.href}>
                    <img src={linkIcon} alt="Иконка ссылки" style={{ marginRight: 15 }} />
                    {link.text}
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </div>
);

export default ProjectsCard;
