const host = 'http://94.158.52.41:8025';
// const host = 'http://192.168.1.241:8025';
// 192.168.1.241:8025/api/requests/
const api = 'api';

export default {
  projectTypes: () => [host, api, 'projecttypes/'].filter(el => el).join('/'),
  projectBudgets: () => [host, api, 'projectbudgets/'].filter(el => el).join('/'),
  sendRequest: () => [host, api, 'requests/'].filter(el => el).join('/'),
};
