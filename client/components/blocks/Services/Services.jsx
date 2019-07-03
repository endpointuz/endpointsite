import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesCard from './ServicesCard';
import { TitleOne } from '../../simple';

import websiteTexts from '../../../websiteContent';

import uiIcon from '../../../assets/img/ui_ux_icon.svg';
import frontIcon from '../../../assets/img/frotend_icon.svg';
import backIcon from '../../../assets/img/backend_icon.svg';
import mobileIcon from '../../../assets/img/mobile_icon.svg';
import supportIcon from '../../../assets/img/support_icon.svg';
import graphIcon from '../../../assets/img/graph_design_icon.svg';

const cardDatas = {
  ui: {
    title: websiteTexts.homepage.scope.ui.title,
    icon: 'icon-ui_ux_icon',
    text: websiteTexts.homepage.scope.ui.description,
  },
  front: {
    title: websiteTexts.homepage.scope.front.title,
    icon: 'icon-frotend_icon',
    text: websiteTexts.homepage.scope.front.description,
  },
  back: {
    title: websiteTexts.homepage.scope.back.title,
    icon: 'icon-backend_icon',
    text: websiteTexts.homepage.scope.back.description,
  },
  mobile: {
    title: websiteTexts.homepage.scope.mobile.title,
    icon: 'icon-mobile_icon',
    text: websiteTexts.homepage.scope.mobile.description,
  },
  graph: {
    title: websiteTexts.homepage.scope.design.title,
    icon: 'icon-graph_design_icon',
    text: websiteTexts.homepage.scope.design.description,
  },
  support: {
    title: websiteTexts.homepage.scope.support.title,
    icon: 'icon-support_icon',
    text: websiteTexts.homepage.scope.support.description,
  },
};


const Services = () => (
  <Container className="services-container">
    <Row noGutters={true}>
      <Col xs={12} lg={6}>
        <TitleOne text="Ключевые направления" />
      </Col>
    </Row>
    <Row className="services-row">
      <Col className="services-col first" md={12} lg={4}>
        <ServicesCard
          title={cardDatas.ui.title}
          icon={cardDatas.ui.icon}
          text={cardDatas.ui.text}
        />
      </Col>
      <Col className="services-col second" md={6} lg={4}>
        <ServicesCard
          title={cardDatas.front.title}
          icon={cardDatas.front.icon}
          text={cardDatas.front.text}
        />
      </Col>
      <Col className="services-col third" md={6} lg={4}>
        <ServicesCard
          title={cardDatas.back.title}
          icon={cardDatas.back.icon}
          text={cardDatas.back.text}
        />
      </Col>
    </Row>
    <Row className="services-row">
      <Col className="services-col first" md={12} lg={4}>
        <ServicesCard
          title={cardDatas.mobile.title}
          icon={cardDatas.mobile.icon}
          text={cardDatas.mobile.text}
        />
      </Col>
      <Col className="services-col second" md={6} lg={4}>
        <ServicesCard
          title={cardDatas.graph.title}
          icon={cardDatas.graph.icon}
          text={cardDatas.graph.text}
        />
      </Col>
      <Col className="services-col third" md={6} lg={4}>
        <ServicesCard
          title={cardDatas.support.title}
          icon={cardDatas.support.icon}
          text={cardDatas.support.text}
        />
      </Col>
    </Row>
  </Container>
);

export default Services;
