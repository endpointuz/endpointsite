const host = 'https://endpoint.uz:8999';

const api = 'api';

export default {
  projectTypes: () => [host, api, 'projecttypes/'].filter(el => el).join('/'),
  projectBudgets: () => [host, api, 'projectbudgets/'].filter(el => el).join('/'),
  sendRequest: () => [host, api, 'requests/'].filter(el => el).join('/'),
};
