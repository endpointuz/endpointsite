import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Navbar } from '../components/blocks';


const mapStateToProps = state => ({
  requestVisibility: state.requestVisibility.visibility,
});

const actionsCreators = {
  toggleRequestVisibility: actions.toggleRequestVisibility,
};

const NavbarContainer = ({
  darkTheme = false,
  requestVisibility,
  toggleRequestVisibility,
  style,
}) => (
  <Navbar
    style={style}
    darkTheme={darkTheme}
    requestVisibility={requestVisibility}
    toggleRequestVisibility={toggleRequestVisibility}
  />
);

export default connect(mapStateToProps, actionsCreators)(NavbarContainer);
