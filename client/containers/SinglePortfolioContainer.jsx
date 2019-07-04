import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import SinglePortfolio from '../components/blocks/SinglePortfolio';
import frontTitle from '../../utils/frontRoutes';


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
        <Helmet>
          <title>{frontTitle[id].title}</title>
          <meta name="description" content={frontTitle[id].description} />
          <meta name="keywords" content={frontTitle[id].keywords} />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Endpoint.uz" />
          <meta property="og:title" content={frontTitle[id].og.title} />
          <meta property="og:description" content={frontTitle[id].og.description} />
          <meta property="og:url" content={frontTitle[id].og.url} />
          <meta property="og:image" content={frontTitle[id].og.image} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
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
