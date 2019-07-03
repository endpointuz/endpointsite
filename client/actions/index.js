import { createAction } from 'redux-actions';
import axios from 'axios';

import routes from '../apiRoutes';

export const toggleRequestVisibility = createAction('REQUEST_VISIBILITY_TOGGLE');

export const setFilterTag = createAction('FILTER_TAG_ACTION');

export const sendMailRequest = createAction('MAIL_SEND_REQUEST');
export const sendMailSuccess = createAction('MAIL_SEND_SUCCESS');
export const sendMailFailure = createAction('MAIL_SEND_FAILURE');

export const sendMailResetStatus = createAction('MAIL_SEND_STATUS_RESET');

export const sendMail = data => async (dispatch) => {
  dispatch(sendMailRequest());

  try {
    await axios.post(routes.sendRequest(), {
      ...data,
      project_type: data.project.reduce((acc, el) => (
        el.checked ? [...acc, el.id] : acc
      ), []),
      project_budget: data.budget.reduce((acc, el) => (
        el.checked ? [...acc, el.id] : acc
      ), []),
      phone: data.phone.replace(/\D+/g, ''),
      captcha_token: data.captchaToken,
    });
    dispatch(sendMailSuccess());
  } catch (e) {
    if (e.response) {
      dispatch(sendMailFailure({ data: e.response.data }));
      return;
    }
    dispatch(sendMailFailure({ data: [{ msg: 'Ошибка сети' }] }));
  }
};

/**
 * get project types
 */

export const getProjectTypesRequest = createAction('GET_PROJECT_TYPES_REQUEST');
export const getProjectTypesSuccess = createAction('GET_PROJECT_TYPES_SUCCESS');
export const getProjectTypesFailure = createAction('GET_PROJECT_TYPES_FAILURE');

export const getProjectTypes = () => async (dispatch) => {
  dispatch(getProjectTypesRequest());

  try {
    const projectTypes = await axios.get(routes.projectTypes());
    dispatch(getProjectTypesSuccess({ data: projectTypes.data }));
  } catch (e) {
    if (e.response) {
      dispatch(getProjectTypesFailure({ data: e.response.data }));
      return;
    }
    dispatch(getProjectTypesFailure({ data: [{ msg: 'Ошибка сети' }] }));
  }
};

/**
 * get project budget
 */

export const getProjectBudgetsRequest = createAction('PROJECT_BUDGETS_GET_REQUEST');
export const getProjectBudgetsSuccess = createAction('PROJECT_BUDGETS_GET_SUCCESS');
export const getProjectBudgetsFailure = createAction('PROJECT_BUDGETS_GET_FAILURE');

export const getProjectBudgets = () => async (dispatch) => {
  dispatch(getProjectBudgetsRequest());

  try {
    const projectBudgets = await axios.get(routes.projectBudgets());
    dispatch(getProjectBudgetsSuccess({ data: projectBudgets.data }));
  } catch (e) {
    if (e.response) {
      dispatch(getProjectBudgetsFailure({ data: e.response.data }));
      return;
    }
    dispatch(getProjectBudgetsFailure({ data: [{ msg: 'Ошибка сети' }] }));
  }
};

// export const sendMail = data => async (dispatch) => {
//   dispatch(sendMailRequest());
//
//   try {
//     await axios.post('http://192.168.1.117:3000/api/requests/', {
//       name: 'John',
//       email: 'test@test.ru',
//       phone: '998903530048',
//       captcha_token: data.captchaToken,
//     });
//     dispatch(sendMailSuccess());
//   } catch (e) {
//     if (e.response) {
//       dispatch(sendMailFailure({ data: e.response.data }));
//       return;
//     }
//     dispatch(sendMailFailure({ data: [{ msg: 'Ошибка сети' }] }));
//   }
// };
