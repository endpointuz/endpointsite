import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TitleOne } from '../../simple';
import AboutTeamCard from './AboutTeamCard';

import igorPhoto from '../../../assets/img/igor-photo.png';
import ulugbekPhoto from '../../../assets/img/ulugbek-photo.png';
import aleksanderPhoto from '../../../assets/img/aleksander-photo.png';

const teamData = [
  {
    id: 1,
    name: 'Игорь',
    description: 'ceo & co-founder',
    photo: igorPhoto,
    position: 'flex-start',
  },
  {
    id: 2,
    name: 'Улугбек',
    description: 'cio & co-founder',
    photo: ulugbekPhoto,
    position: 'center',
  },
  {
    id: 3,
    name: 'Александр',
    description: 'cto & co-founder',
    photo: aleksanderPhoto,
    position: 'flex-end',
  },
];

const AboutTeam = () => (
  <section className="team">
    <Container className="team-container">
      <Row>
        <Col lg={12}>
          <TitleOne
            text="Команда"
            style={{ color: '#fff', marginBottom: 30 }}
          />
        </Col>
      </Row>
      <Row className="team-row">
        {teamData.map(member => (
          <Col md={4} lg={4} key={member.id} style={{ alignSelf: member.position }} className="team-col">
            <AboutTeamCard
              {...member}
            />
          </Col>
        ))}
      </Row>
      <Row className="team-row">
        {teamData.map(member => (
          <Col md={4} lg={4} key={member.id} style={{ alignSelf: member.position }} className="team-col">
            <AboutTeamCard
              {...member}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default AboutTeam;
