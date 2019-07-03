import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import RequestForm from '../components/blocks/RequestForm';

const actionsCreators = {
  getProjectTypes: actions.getProjectTypes,
  getProjectBudgets: actions.getProjectBudgets,
  sendMail: actions.sendMail,
  resetStatusOfSendMail: actions.sendMailResetStatus,
};

const mapStateToProps = state => ({
  loading: state.projectTypes.state,
  budgetsLoading: state.projectBudgets.state,
  projectTypes: state.projectTypes.list,
  projectBudgets: state.projectBudgets.list,
  sendMailState: state.sendMailState.status,
  sendMailErrors: state.sendMailState.errors,
});


const RequestFormContainer = (
  {
    loading,
    projectTypes,
    getProjectTypes,
    getProjectBudgets,
    ...restProps
  },
) => {
  useEffect(() => {
    const fetchData = async () => {
      await getProjectTypes();
      await getProjectBudgets();
    };

    fetchData();
  }, []);

  return (
    <RequestForm
      loading={loading}
      projectTypes={projectTypes}
      {...restProps}
    />
  );
}

const loadData = (store) => {
  const actionsToBeDispatched = [];
  actionsToBeDispatched.push(store.dispatch(actions.getProjectTypes));

  return Promise.all(actionsToBeDispatched);
};
// loading={loading}
// projectTypes={projectTypes}


export default connect(mapStateToProps, actionsCreators)(RequestFormContainer);

// export default {
//   loadData,
//   component: connect(mapStateToProps, actionsCreators)(RequestFormContainer),
// };
