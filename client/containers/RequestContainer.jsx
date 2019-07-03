import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Request } from '../components/blocks';

const mapStateToProps = () => ({});

const actionsCreators = {
  toggleRequestVisibility: actions.toggleRequestVisibility,
};

const RequestContainer = ({ toggleRequestVisibility, ...rest }) => (
  <Request
    toggleRequestVisibility={toggleRequestVisibility}
    {...rest}
  />
);

export default connect(mapStateToProps, actionsCreators)(RequestContainer);
