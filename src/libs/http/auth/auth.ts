import { axios } from 'libs/http/axios';
import { Login } from './auth.types';

export const auth = {
  login: (data = {}): Promise<{ data: Login }> =>
    axios.post(`/auth/login`, data),
};
