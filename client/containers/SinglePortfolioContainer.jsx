import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SinglePortfolio from '../components/blocks/SinglePortfolio';

const mapStateToProps = state => ({
  portfolioContent: state.portfolioContent,
});

const { SinglePortfolioHeader, SinglePortfolioContent } = SinglePortfolio;

@withRouter
@connect(mapStateToProps)
class SinglePortfolioContainer extends React.Component {

  render() {

    const { pathname } = this.props.location;
    const { portfolioContent } = this.props;

    const id = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [content] = portfolioContent.filter(singleContent => String(singleContent.id) === id);

    return (
      <>
        <header className="single-portfolio-header">
          <SinglePortfolioHeader
            title={content.header.title}
            description={content.header.description}
            date={content.header.date}
            link={content.header.link}
            tags={content.header.tags}
            picture={content.header.picture}
          />
        </header>
        <section className="single-portfolio-content">
          <SinglePortfolioContent
            body={content.body}
          />
        </section>
      </>
    );
  }
}

export default SinglePortfolioContainer;
