import React, { useState } from 'react';
import { useLoaderData, Form } from 'react-router-dom';
import styled from './AddUserForm.module.css';

const AddUserForm = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allergn, setAllergn] = useState([]);
  const [regime, setRegime] = useState([]);

  const result = useLoaderData();
  const listAllergn = result[0];
  const listRegime = result[1];

  return (
    <>
      <Form method="post" className={styled.FormContact}>
        <div className={styled.DivInput}></div>
        <label for="firstName">Nom</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          name="firstName"
          onChange={(event) => setFirstName(event.currentTarget.value)}
        />
        <div className={styled.DivInput}></div>
        <label for="lastName">Prénom</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          name="lastName"
          onChange={(event) => setLastName(event.currentTarget.value)}
        />
        <div className={styled.DivInput}></div>
        <label for="email">Adresse email</label>
        <input
          id="email"
          value={email}
          name="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <div className={styled.DivInput}></div>
        <label for="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          value={password}
          name="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
        />

        <div className={styled.DivInput}>
          <label>Allergène</label>
          {listAllergn.length < 1
            ? ''
            : listAllergn.map((allergnOnMap) => (
                <div key={allergnOnMap._id}>
                  <input
                    type="checkbox"
                    id={allergnOnMap._id}
                    value={allergnOnMap._id}
                    name="allergn"
                    onChange={(event) => setAllergn((allergn) => [...allergn, event.target.id])}
                  />
                  <label for={allergnOnMap._id}>{allergnOnMap.name}</label>
                </div>
              ))}
        </div>
        <div className={styled.DivInput}>
          <label>Régime</label>
          {listRegime.length < 1
            ? ''
            : listRegime.map((regimeOnMap) => (
                <div key={regimeOnMap._id}>
                  <input
                    type="checkbox"
                    id={regimeOnMap._id}
                    value={regimeOnMap._id}
                    name="regime"
                    onChange={(event) => {
                      console.log(event.target.id);
                      setRegime((regime) => [...regime, event.target.id]);
                    }}
                  />
                  <label for={regimeOnMap._id}>{regimeOnMap.name}</label>
                </div>
              ))}
        </div>
        <div className={styled.DivInput}>
          <button type="submit">Ajouter</button>
        </div>
      </Form>
    </>
  );
};

export default AddUserForm;
