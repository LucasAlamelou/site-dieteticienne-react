import React from 'react';
import { redirect } from 'react-router-dom';
import { getLogin } from '../Api/request';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import FormLogin from '../Components/Login/FormLogin';

/**
 * Requete API pour le login
 * Sucess = redirection
 */
export async function action({ request }) {
  let formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const content = {
    email: email,
    password: password,
  };
  const userSeeting = getLogin(content);
  if (userSeeting.status === 'error') {
    return <div>Erreur de connexion email ou mot de passe incorrect ! </div>;
  }
  return redirect(`/recettes`);
}

const Login = () => {
  return (
    <>
      <Header />
      <FormLogin />
      <Footer />
    </>
  );
};

export default Login;
