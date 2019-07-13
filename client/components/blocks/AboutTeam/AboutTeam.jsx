import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TitleOne } from '../../simple';
import AboutTeamCard from './AboutTeamCard';

import igorPhoto from '../../../assets/img/igor-photo.jpg';
import ulugbekPhoto from '../../../assets/img/ulugbek-photo.jpg';
import aleksanderPhoto from '../../../assets/img/aleksander-photo.jpg';
import kseniyaPhoto from '../../../assets/img/kseniya-photo.jpg';
import rustamPhoto from '../../../assets/img/rustam-min.jpg';
import leraPhoto from '../../../assets/img/lera-min.jpg';
import bekPhoto from '../../../assets/img/beka-min.jpg';
import arslanPhoto from '../../../assets/img/ars-min.jpg';

const teamData = {
  firstRow: [
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
  ],
  secondRow: [
    {
      id: 4,
      name: 'Рустам',
      description: 'Head of Backend',
      photo: rustamPhoto,
      position: 'flex-start',
    },
    {
      id: 5,
      name: 'Ксения',
      description: 'Back-end developer',
      photo: kseniyaPhoto,
      position: 'center',
    },
    {
      id: 6,
      name: 'Валерия',
      description: 'Back-end developer',
      photo: leraPhoto,
      position: 'flex-end',
    },
  ],
  thirdRow: [
    {
      id: 7,
      name: 'Арслан',
      description: 'Head of Android',
      photo: arslanPhoto,
      position: 'flex-start',
    },
    {
      id: 8,
      name: 'Бекзод',
      description: 'Стажер',
      photo: bekPhoto,
      position: 'center',
    },
  ],
};

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
        {teamData.firstRow.map(member => (
          <Col md={4} lg={4} key={member.id} style={{ alignSelf: member.position }} className="team-col">
            <AboutTeamCard
              {...member}
            />
          </Col>
        ))}
      </Row>
      <Row className="team-row">
        {teamData.secondRow.map(member => (
          <Col md={4} lg={4} key={member.id} style={{ alignSelf: member.position }} className="team-col">
            <AboutTeamCard
              {...member}
            />
          </Col>
        ))}
      </Row>
      <Row className="team-row">
        {teamData.thirdRow.map(member => (
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
