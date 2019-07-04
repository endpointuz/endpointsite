import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

import { Request } from '../components/blocks';

const mapStateToProps = () => ({});

const actionsCreators = {
  toggleRequestVisibility: actions.toggleRequestVisibility,
};

const RequestContainer = ({ toggleRequestVisibility, location, ...rest }) => (
  <Request
    toggleRequestVisibility={toggleRequestVisibility}
    location={location.state}
    {...rest}
  />
);

export default withRouter(connect(mapStateToProps, actionsCreators)(RequestContainer));
