import React from 'react';
import { Footer } from '../components/blocks';
import { NavbarContainer, RequestContainer, SinglePortfolioContainer } from '../containers';

class SinglePortfolio extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
      document.querySelector('.loader').classList.add('loaded');
    }, 1500);
    setTimeout(() => {
      document.querySelector('.loader-circle').classList.add('loaded');
    }, 1000);
  }

  componentWillUnmount() {
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <NavbarContainer style={{ backgroundColor: '#FBFBFB' }} />
        <SinglePortfolioContainer />
        <section className="request">
          <RequestContainer
            title="Понравился проект?"
            description="Не стесняйся поделись проектом с друзьями или напиши нам"
            hasShare={true}
          />
        </section>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default SinglePortfolio;
