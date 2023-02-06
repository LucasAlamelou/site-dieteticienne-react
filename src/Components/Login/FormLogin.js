import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import styled from '../Contact/Contact.module.css';
import img from '../../Image/photo-contact.jpeg';

const Field = ({ id, name, value, setValue, label, type }) => {
  return (
    <div className={styled.DivInput}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </div>
  );
};

const FormLogin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <div className={styled.contact}>
        <img className={styled.ContactImg} src={img} alt="img-contact"></img>
        <Form method="post" className={styled.FormContact}>
          <Field
            label={'Email'}
            name={'email'}
            id={'email - id'}
            value={login}
            setValue={setLogin}
          />
          <Field
            type={'password'}
            label={'Mot de passe'}
            name={'password'}
            id={'password-id'}
            value={password}
            setValue={setPassword}
          />
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
