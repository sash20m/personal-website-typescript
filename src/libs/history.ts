import { createBrowserHistory } from 'history';

export const history = createBrowserHistory<{
  location: { pathname: string };
}>();
