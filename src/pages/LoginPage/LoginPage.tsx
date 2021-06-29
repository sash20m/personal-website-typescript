import { auth } from 'libs/http/auth/auth';
import React, { useState } from 'react';
import { Button } from 'ui/atoms/Button/Button';
import { Input } from 'ui/atoms/Input/Input';
import { history } from 'libs/history';
import { save } from 'react-cookies';

import './LoginPage.scss';
import { UserContext } from 'contexts/UserContext';

export const LoginPage = (): React.ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsUserLogged } = React.useContext(UserContext);

  const onChangeUsername = (value: string): void => {
    setUsername(value);
  };

  const onChangePassword = (value: string): void => {
    setPassword(value);
  };

  const onLogin = async () => {
    const { data } = await auth.login({ username, password });
    console.log(data);

    if (data?.accessToken) {
      save('token', data.accessToken, { path: '/' });
      setIsUserLogged(true);
      history.push('/');
    }
  };

  return (
    <div className="login">
      <div className="login__items">
        <div className="login__items__title">Hello, log in</div>
        <Input
          value={username}
          placeholder="username"
          onChange={onChangeUsername}
          className="login__items__input"
        />
        <Input
          value={password}
          placeholder="password"
          type="password"
          onChange={onChangePassword}
          className="login__items__input"
        />
        <Button text="Login" onClick={onLogin} />
      </div>
    </div>
  );
};
