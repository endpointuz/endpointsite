import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions';

import portfolioWorks from '../../utils/portfolio';
import portfolioPages from '../../utils/portfolioContent';
import tagsList from '../../utils/tags';

const portfolio = handleActions({

}, portfolioWorks);

const portfolioContent = handleActions({

}, portfolioPages);

const requestVisibility = handleActions({
  [actions.toggleRequestVisibility](state) {
    return {
      visibility: !state.visibility,
    };
  },
}, {
  visibility: false,
});

const tags = handleActions({

}, tagsList);

const filterTag = handleActions({
  [actions.setFilterTag](state, { payload: { tag } }) {
    return tag;
  },
}, '');

const sendMailState = handleActions({
  [actions.sendMailRequest]() {
    return {
      status: 'request',
      errors: [],
    };
  },
  [actions.sendMailSuccess]() {
    return {
      status: 'success',
      errors: [],
    };
  },
  [actions.sendMailFailure](state, { payload: { data } }) {
    return {
      status: 'failure',
      errors: data.errors,
    };
  },
  [actions.sendMailResetStatus]() {
    return {
      status: 'form',
      errors: [],
    };
  },
}, {
  status: 'form',
  errors: [],
});

const projectTypes = handleActions({
  [actions.getProjectTypesSuccess](state, { payload: { data } }) {
    return {
      list: data,
      state: 'success',
    };
  },
  [actions.getProjectTypesFailure](state) {
    return {
      ...state,
      state: 'failure',
    };
  },
  [actions.getProjectTypesRequest](state) {
    return {
      ...state,
      state: 'request',
    };
  },
}, {
  list: [],
  state: null,
});

const projectBudgets = handleActions({
  [actions.getProjectBudgetsSuccess](state, { payload: { data } }) {
    return {
      list: data,
      state: 'success',
    };
  },
  [actions.getProjectBudgetsFailure](state) {
    return {
      ...state,
      state: 'failure',
    };
  },
  [actions.getProjectBudgetsRequest](state) {
    return {
      ...state,
      state: 'request',
    };
  },
}, {
  list: [],
  state: null,
});

export default combineReducers({
  portfolio,
  portfolioContent,
  requestVisibility,
  tags,
  filterTag,
  sendMailState,
  projectTypes,
  projectBudgets,
});
