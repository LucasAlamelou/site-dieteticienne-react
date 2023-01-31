import React, { useState } from 'react';
import { useLoaderData, Form, Navigate, useLocation } from 'react-router-dom';
import styled from './Recette.module.css';
import img from '../../Image/photo-contact.jpeg';

const AddRecette = () => {
  const { state } = useLocation();
  const recetteToModify = state !== null ? state.recette.recette : null;
  const idRecette = recetteToModify !== null ? recetteToModify._id : 0;
  const [title, setTitle] = useState(recetteToModify !== null ? recetteToModify.title : '');
  const [description, setDescription] = useState(
    recetteToModify !== null ? recetteToModify.description : ''
  );
  const [calories, setCalories] = useState(recetteToModify !== null ? recetteToModify.calories : 0);
  const [timePrepare, setTimePrepare] = useState(
    recetteToModify !== null ? recetteToModify.timePrepare : 0
  );
  const [timeCooking, setTimeCooking] = useState(
    recetteToModify !== null && title !== '' ? recetteToModify.timeCooking : 0
  );
  const [timeRest, setTimeRest] = useState(recetteToModify !== null ? recetteToModify.timeRest : 0);
  const [steps, setSteps] = useState(
    recetteToModify !== null && title !== '' ? recetteToModify.steps : ''
  );
  const [allergn, setAllergn] = useState(recetteToModify !== null ? recetteToModify.allergn : []);
  const [regime, setRegime] = useState(recetteToModify !== null ? recetteToModify.regime : []);

  const result = useLoaderData();
  const listAllergn = result[0];
  const listRegime = result[1];

  const role = window.localStorage.getItem('roleMyApp');
  if (role !== 'admin') {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/" state={{ from: window.location }} />;
  }
  return (
    <div className={styled.contact}>
      <img src={img} alt="img" className={styled.ContactImg}></img>
      <Form method="post" className={styled.FormAddOrModifyRecette}>
        <input value={idRecette} type="hidden" name="idRecette" />
        <div className={styled.DivInput}>
          <label>Titre</label>
          <input
            value={title}
            name="title"
            required={true}
            type="text"
            onChange={(event) => setTitle(event.currentTarget.value)}
          />
        </div>
        <div className={styled.DivInput}>
          <label>Description</label>
          <input
            className={styled.DivInputSpe}
            value={description}
            name="description"
            required={true}
            type="text"
            onChange={(event) => setDescription(event.currentTarget.value)}
          />
        </div>
        <div className={styled.DivInput}>
          <label>Calories</label>
          <input
            type="number"
            min="0"
            value={calories}
            name="calories"
            onChange={(event) => setCalories(event.currentTarget.value)}
          />
        </div>
        <div className={styled.DivInput}>
          <label>Temps de préparation</label>
          <input
            type="number"
            min="0"
            value={timePrepare}
            name="timePrepare"
            onChange={(event) => setTimePrepare(event.currentTarget.value)}
          />
        </div>

        <div className={styled.DivInput}>
          <label>Temps de repos</label>
          <input
            type="number"
            min="0"
            value={timeRest}
            name="timeRest"
            onChange={(event) => setTimeRest(event.currentTarget.value)}
          />
        </div>

        <div className={styled.DivInput}>
          <label>Temps de cuisson</label>
          <input
            type="number"
            min="0"
            value={timeCooking}
            name="timeCooking"
            onChange={(event) => setTimeCooking(event.currentTarget.value)}
          />
        </div>

        <div className={styled.DivInput}>
          <label>Préparation</label>
          <input
            className={styled.DivInputSpe}
            type="text"
            value={steps}
            name="steps"
            onChange={(event) => setSteps(event.currentTarget.value)}
          />
        </div>

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
          <button type="submit" className={styled.button}>
            Ajouter/Modifier la recette
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddRecette;
