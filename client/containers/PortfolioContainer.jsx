import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import * as actions from '../actions';
import { Portfolio } from '../components/blocks';

const mapStateToProps = state => ({
  works: state.portfolio,
  tags: state.tags,
  filterTag: state.filterTag,
});

const actionsCreators = {
  setFilterTag: actions.setFilterTag,
};

@connect(mapStateToProps, actionsCreators)
class PortfolioContainer extends React.Component {
  handleFilter = tag => (event) => {
    event.preventDefault();
    const { setFilterTag } = this.props;
    setFilterTag({ tag });
  };

  render() {
    const { works, tags, filterTag, hasFilter = false } = this.props;
    const filtredWorks = works.filter((work) => {
      if (filterTag === '') {
        return work;
      }
      return work.tags.includes(filterTag);
    });
    return !hasFilter
      ? (
        <Portfolio
          works={works}
        />
      ) : (
        <>
          <Container style={{ marginBottom: 60 }}>
            <Row>
              <Col xl={12}>
                <div className="portfolio-filter">
                  <a
                    href=""
                    onClick={this.handleFilter('')}
                    className={`portfolio-filter-tag${filterTag === '' ? ' active' : ''}`}
                  >
                    Все
                  </a>
                  {tags.map(tag => (
                    <a
                      href=""
                      key={tag}
                      onClick={this.handleFilter(tag)}
                      className={`portfolio-filter-tag${filterTag === tag ? ' active' : ''}`}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
          <Portfolio
            works={filtredWorks}
          />
        </>
      );
  }
}

export default PortfolioContainer;
