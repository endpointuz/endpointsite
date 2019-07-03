import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TitleOne } from '../../simple';

const PortfolioContentTitle = ({ row }) => (
  <Container key={row.id}>
    <Row>
      <Col xs={12}>
        <TitleOne
          text={row.content}
          style={{ marginBottom: 30 }}
        />
      </Col>
    </Row>
  </Container>
);

const PortfolioContentText = ({ row }) => (
  <Container key={row.id}>
    <Row>
      <Col xs={12} lg={7}>
        <p className="single-portfolio-content-text">
          {row.content}
        </p>
      </Col>
    </Row>
  </Container>
);

const PortfolioContentImage = ({ row }) => (
  <Container key={row.id} fluid={row.fluid}>
    <Row>
      <Col xs={12}>
        <img src={row.content} alt="картинка проекта" className="w-100 single-portfolio-content-image" />
      </Col>
    </Row>
  </Container>
);

const PortfolioContentSubtitle = ({ row }) => (
  <Container key={row.id} fluid={row.fluid}>
    <Row>
      <Col xs={12}>
        <h5 className="single-portfolio-content-subtitle">{row.content}</h5>
      </Col>
    </Row>
  </Container>
);

const renderers = {
  title: PortfolioContentTitle,
  text: PortfolioContentText,
  image: PortfolioContentImage,
  subtitle: PortfolioContentSubtitle,
};

const SinglePortfolioContent = (
  {
    body,
  },
) => body.map((row) => {
  const Component = renderers[row.type];
  return <Component key={row.id} row={row} />;
});

export default SinglePortfolioContent;
