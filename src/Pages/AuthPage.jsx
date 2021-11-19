import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import api from 'conf';

export default function AuthPage() {
  const [form, setForm] = useState({
    email: null,
    password: null,
    passwordBis: null,
    pseudo: null,
  });
  const [, setCookie, removeCookie] = useCookies(['token']);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const newForm = { ...form };
    newForm[evt.target.name] = evt.target.value;
    setForm(newForm);
  };
  const handleLogin = (evt) => {
    evt.preventDefault();
    api
      .post('/auth/login', form)
      .then(({ data }) => {
        const { user, token } = data;
        setCookie('token', token, { sameSite: 'lax' });
        api.defaults.headers.authorization = `Bearer ${token}`;
        toast(`You're now logged in, ${user.pseudo} <3`);
        dispatch({
          type: 'USER_LOGIN',
          load: user,
        });
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const handleSignin = (evt) => {
    evt.preventDefault();
    if (form.password !== form.passwordBis) {
      toast.error('Wow, nope!');
      return;
    }
    const formData = { ...form };
    delete formData.passwordBis;
    api
      .post('/auth/signup', formData)
      .then(({ data }) => {
        const { user, token } = data;
        setCookie('token', token);
        api.defaults.headers.authorization = `Bearer ${token}`;
        toast(`You're now logged in, ${user.pseudo} <3`);
        dispatch({
          type: 'USER_LOGIN',
          load: user,
        });
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const handleLogout = () => {
    removeCookie('token');
    dispatch({ type: 'USER_LOGOUT' });
  };

  return (
    <>
      <h2>Authentification</h2>
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Sign In</Tab>
          <Tab>Log Out</Tab>
        </TabList>
        <TabPanel>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              onChange={handleChange}
            />
            <input type="submit" value="Login" />
          </form>
        </TabPanel>
        <TabPanel>
          <form onSubmit={handleSignin}>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              onChange={handleChange}
            />
            <input
              type="password"
              name="passwordBis"
              placeholder="Repeat your password"
              onChange={handleChange}
            />
            <input
              type="text"
              name="avatar"
              placeholder="https://"
              onChange={handleChange}
            />
            <input
              type="text"
              name="pseudo"
              placeholder="Type your display name"
              onChange={handleChange}
            />
            <input type="submit" value="Sign In" />
          </form>
        </TabPanel>
        <TabPanel>
          <button type="button" onClick={handleLogout}>
            Log Out
          </button>
        </TabPanel>
      </Tabs>
    </>
  );
}
