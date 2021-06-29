import React from 'react';
import ReactDOM from 'react-dom';
import { routes } from 'router';
import { RouterGenerator } from 'libs/RouterGenerator';
import { UserProvider } from 'contexts/UserContext';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

ReactDOM.render(
  <UserProvider>
    <RouterGenerator routes={routes} />
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
