import env from '@beam-australia/react-env';
import $axios from 'axios';
import { load } from 'react-cookies';

export const axios = $axios.create();

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.baseURL = env('API_URL');

export const axiosHeadersUpdater = (): void => {
  const token = load('token');

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else if (axios.defaults.headers.common.Authorization) {
    delete axios.defaults.headers.common.Authorization;
  }
};

axiosHeadersUpdater();
