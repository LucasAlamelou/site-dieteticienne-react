import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import styled from '../Contact/Contact.module.css';
import img from '../../Image/photo-contact.jpeg';

const FormLogin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <div className={styled.contact}>
        <img className={styled.ContactImg} src={img} alt="img-contact"></img>
        <Form method="post" className={styled.FormContact}>
          <div className={styled.DivInput}>
            <label>Email</label>
            <input
              value={login}
              name="email"
              onChange={(event) => setLogin(event.currentTarget.value)}
            />
          </div>

          <div className={styled.DivInput}>
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </div>

          <div className={styled.DivInput}>
            <button type="submit" className={styled.button}>
              Connexion
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormLogin;
