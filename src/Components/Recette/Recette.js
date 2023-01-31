import React, { useState } from 'react';
import { Link, useLoaderData, useFetcher } from 'react-router-dom';
import Image from '../../Image/photo-recette.jpeg';
import FilterRecette from './FilterRecette';
import styled from './Recette.module.css';
import addSVG from '../../Image/add.svg';

/**
 * Filtre le tableau des recettes
 * @param {Array} recettes
 * @param {String} inputName
 * @returns {Array} tableau filtrer selon les paramettres
 */
const filterAll = (recettes, inputName) => {
  switch (inputName) {
    case 'filter-cooking-10':
      return recettes.filter((r) => r.timeCooking <= 10);
    case 'filter-cooking-20':
      return recettes.filter((r) => r.timeCooking <= 20);
    case 'filter-cooking-30':
      return recettes.filter((r) => r.timeCooking <= 30);
    case 'filter-calorie-500':
      return recettes.filter((r) => r.calories <= 500);
    case 'filter-calorie-1000':
      return recettes.filter((r) => r.calories <= 1000);
    case 'filter-calorie-more-1000':
      return recettes.filter((r) => r.calories >= 1000);
  }
  if (inputName.includes('regime')) {
    const name = inputName.split('-');
    const tempo = recettes.filter((r) => r.regime.name === name[1]);
    return tempo;
  }
  if (inputName.includes('allergn')) {
    const name = inputName.split('-');
    return recettes.filter((r) => {
      return r.allergn.forEach((value) => {
        return value === name[1];
      });
    });
  }
};

const Recette = () => {
  let [recettes, allergnList, regimeList] = useLoaderData();
  const [listRecette, setListRecette] = useState(recettes);
  const [input, setInput] = useState(false);
  let token = window.localStorage.getItem('tokenMyApp');
  let role = window.localStorage.getItem('roleMyApp');

  const changeRecettefilter = (event, recettes) => {
    const inputName = event.target.name;
    const checked = event.target.checked;
    if (checked && input === false) {
      setListRecette(filterAll(recettes, inputName));
      setInput(true);
    } else if (!checked && input === true) {
      setListRecette(recettes);
      setInput(false);
    }
  };

  return (
    <>
      <img src={Image} className={styled.ImageRecette} alt="recette-image"></img>
      <div className={styled.DivGlobal}>
        <div className={styled.DivFilter}>
          <FilterRecette
            recettes={recettes}
            regimeList={regimeList}
            allergnList={allergnList}
            fonctionFilter={changeRecettefilter}
          ></FilterRecette>
        </div>

        <div className={styled.DivRecettes}>
          {token !== null && role === 'admin' ? (
            <>
              <Link to="/modifyRecette" className={styled.LinkAdd}>
                <img src={addSVG} alt="add-button" />
                Ajouter une recette
              </Link>
              <Link to="/addUser" className={styled.LinkAdd}>
                <img src={addSVG} alt="add-button" />
                Ajouter un utilisateur
              </Link>
            </>
          ) : (
            <></>
          )}
          {listRecette.map((recette) => (
            <div className={styled.DivRecette} key={recette.id}>
              <h3 className={styled[('ElementRecette', 'title')]}>{recette.title}</h3>
              <div className={styled[('ElementRecette', 'div3Element')]}>
                <div className={styled[('ElementRecette', 'ElementDescription')]}>
                  <h4>Description: </h4>
                  {recette.description}
                </div>
                <div className={styled[('ElementRecette', 'ElementDescription')]}>
                  <h4>Etape : </h4>
                  {recette.steps}
                </div>
                <div className={styled[('ElementRecette', 'time')]}>
                  <h4>Temps de préparation : {recette.timePrepare}</h4>

                  <h4>Temps de cuisson : {recette.timeCooking}</h4>

                  <h4>Temps de repos : {recette.timeRest} </h4>
                </div>
              </div>

              <div className={styled[('ElementRecette', 'ingredient')]}>
                <h4>Ingrédient : </h4>
                <ul>
                  {recette.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
                <h4>Allergène(s) : </h4>
                <ul>
                  {recette.allergn.length === 0 ? (
                    <>Aucun</>
                  ) : (
                    recette.allergn.map((allergn) => {
                      const name = allergnList.find((r) => r._id === allergn);
                      return <li>{name !== undefined ? name.name : 'Aucun'}</li>;
                    })
                  )}
                </ul>
              </div>
              <div
                className={
                  styled[('ElementRecette', 'ElementDescription', 'DerniereElementRecette')]
                }
              >
                <div className={styled.RecetteRegime}>
                  <h4>Régime(s) : </h4>
                  <ul>
                    {recette.regime.length === 0 ? (
                      <>Aucun</>
                    ) : (
                      recette.regime.map((regime) => {
                        const name = regimeList.find((r) => r._id === regime);
                        return <li>{name !== undefined ? name.name : 'Aucun'}</li>;
                      })
                    )}
                  </ul>
                </div>
                <div className={styled.note}>
                  <Favorite recette={recette} />
                </div>
                {token !== null && role === 'admin' ? (
                  <>
                    <Link
                      to="/modifyRecette"
                      state={{ recette: { recette } }}
                      className={styled.LinkModify}
                    >
                      Modifier
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

function Favorite({ recette }) {
  // Communiquer avec les chargeurs sans modifier la navigation
  const fetcher = useFetcher();
  // yes, this is a `let` for later
  let favorite = recette.note;
  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';
  }

  return (
    <>
      <fetcher.Form method="post" className={styled.inputNote}>
        <input type="hidden" name="noteNumber" value={1} />
        <input type="hidden" name="_id" value={recette._id} />
        <button name="note" value={favorite >= 1 ? 'true' : 'false'} aria-label={'Notez'}>
          {favorite >= 1 ? '★' : '☆'}
        </button>
      </fetcher.Form>
      <fetcher.Form method="post" className={styled.inputNote}>
        <input type="hidden" name="noteNumber" value={2} />
        <input type="hidden" name="_id" value={recette._id} />
        <button name="note" value={favorite >= 2 ? 'true' : 'false'} aria-label={'Notez'}>
          {favorite >= 2 ? '★' : '☆'}
        </button>
      </fetcher.Form>
      <fetcher.Form method="post" className={styled.inputNote}>
        <input type="hidden" name="noteNumber" value={3} />
        <input type="hidden" name="_id" value={recette._id} />
        <button name="note" value={favorite >= 3 ? 'true' : 'false'} aria-label={'Notez'}>
          {favorite >= 3 ? '★' : '☆'}
        </button>
      </fetcher.Form>
      <fetcher.Form method="post" className={styled.inputNote}>
        <input type="hidden" name="noteNumber" value={4} />
        <input type="hidden" name="_id" value={recette._id} />
        <button name="note" value={favorite >= 4 ? 'true' : 'false'} aria-label={'Notez'}>
          {favorite >= 4 ? '★' : '☆'}
        </button>
      </fetcher.Form>
      <fetcher.Form method="post" className={styled.inputNote}>
        <input type="hidden" name="noteNumber" value={5} />
        <input type="hidden" name="_id" value={recette._id} />
        <button name="note" value={favorite >= 5 ? 'true' : 'false'} aria-label={'Notez'}>
          {favorite >= 5 ? '★' : '☆'}
        </button>
      </fetcher.Form>
    </>
  );
}

export const getRecettefilter = (event, recettes) => {
  console.log(event.target.id);
  const idInput = event.target.id;
  const checked = event.target.checked;
  if (idInput === 'filter10' && checked === true) {
    return recettes.filter((r) => r.timeCooking < 10);
  }
  if (idInput === 'filter30') {
    return recettes.filter((r) => r.timeCooking < 20);
  }
  if (idInput === 'filter30') {
    return recettes.filter((r) => r.timeCooking < 30);
  }
};

export default Recette;
