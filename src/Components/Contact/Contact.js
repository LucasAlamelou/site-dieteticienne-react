import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import styled from './Contact.module.css';
import img from '../../Image/photo-contact.jpeg';

const Contact = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={styled.contact}>
      <img className={styled.ContactImg} src={img} alt="img-contact"></img>
      <Form method="post" className={styled.FormContact}>
        <div className={styled.DivInput}>
          <label for="firstName">Nom</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            name="firstName"
            required={true}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
        </div>

        <div className={styled.DivInput}>
          <label for="lastName">Prénom</label>
          <input
            id="lastName"
            type="text"
            required={true}
            value={lastName}
            name="lastName"
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
        </div>

        <div className={styled.DivInput}>
          <label for="email">Adresse email</label>
          <input
            id="email"
            value={email}
            name="email"
            required={true}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>

        <div className={styled.DivInput}>
          <label for="phone">Télephone</label>
          <input
            id="phone"
            type="phone"
            required={true}
            value={phone}
            name="phone"
            onChange={(event) => setPhone(event.currentTarget.value)}
          />
        </div>

        <div className={styled.DivInput}>
          <label for="message">Votre message</label>
          <input
            id="message"
            type="text"
            className={styled.DivInputSpe}
            required={true}
            value={message}
            name="message"
            onChange={(event) => setMessage(event.currentTarget.value)}
          />
        </div>
        <div className={styled.DivInput}>
          <button type="submit" className={styled.button}>
            Transmettre
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
