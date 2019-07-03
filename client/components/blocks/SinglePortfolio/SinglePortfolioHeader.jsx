import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TitleOne } from '../../simple';

import linkIcon from '../../../assets/img/link.svg';

const renderLink = link => (
  link
    ? <p className="single-portfolio-link">
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          <img src={linkIcon} alt="иконка ссылки" style={{ marginRight: 15 }} />
          {link.text}
        </a>
      </p>
    : null
);

const renderTags = tags => (
  tags
    ? <p className="single-portfolio-tags">
        {tags.map(tag => (
          <span key={tag} className="single-portfolio-tag">{tag}</span>
        ))}
      </p>
    : null
);

const SinglePortfolioHeader = (
  {
    title = '',
    description = '',
    date = '',
    link,
    tags = [],
    picture,
  },
) => (
  <Container>
    <Row>
      <Col xl={6}>
        <div className="single-portfolio-header-info">
          <TitleOne
            text={title}
          />
          <p className="single-portfolio-text">{description}</p>
          <p className="single-portfolio-date">{date}</p>
          {renderLink(link)}
          {renderTags(tags)}
        </div>
      </Col>
      <Col xl={6}>
        <div className="single-portfolio-image">
          <img src={picture} alt="картинка проекта" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default SinglePortfolioHeader;
