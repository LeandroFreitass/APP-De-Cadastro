/* eslint-disable */

import config from '../config';
import api from '../services/api';

const authenticate = async companyId => {
  const response = await api.get(
    config.endpoint + 'integration/superlogica/plan-issue-date',
    {
      params: {id: companyId},
    },
  );
  return response.data;
};

export default {authenticate};
