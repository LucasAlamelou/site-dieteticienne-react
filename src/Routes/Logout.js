import { redirect } from 'react-router-dom';

const Logout = () => {
  window.localStorage.removeItem('tokenMyApp');
  window.localStorage.removeItem('roleMyApp');
  redirect(`/contact`);
};

export default Logout;
