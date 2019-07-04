import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Footer,
  NotFoundContent,
} from '../components/blocks';
import { NavbarContainer } from '../containers';
import frontTitle from '../../utils/frontRoutes';

class NotFound extends React.Component {
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
      <div className={`wrapper notfound-wrapper ${this.state.visible ? '' : 'load'}`}>
        <Helmet>
          <title>{frontTitle.notfound.title}</title>
          <meta name="description" content={frontTitle.notfound.description} />
          <meta name="keywords" content={frontTitle.notfound.keywords} />
        </Helmet>
        <NavbarContainer
          darkTheme={true}
        />
        <section className="notfound">
          <NotFoundContent />
        </section>
        <footer className="footer" style={{ background: '#212032' }}>
          <Footer hasCredits={false} />
        </footer>
      </div>
    );
  }
}

export default NotFound;
