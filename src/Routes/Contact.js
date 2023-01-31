import React from 'react';
import { redirect } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import { sendFormContact } from '../Api/request';

/**
 * Requete API pour le contact
 * Sucess = redirection
 */
export async function action({ request }) {
  let formData = await request.formData();
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');
  const lastName = formData.get('lastName');
  const firstName = formData.get('firstName');
  const content = {
    email,
    phone,
    message,
    lastName,
    firstName,
  };
  const result = await sendFormContact(content);
  if (result) {
    return redirect('/');
  }
  return null;
}

const Login = () => {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default Login;
