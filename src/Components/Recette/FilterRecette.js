import React, { useState } from 'react';
import styled from './Recette.module.css';
import { useSubmit } from 'react-router-dom';
import filterSvg from '../../Image/filter.svg';

const FilterRecette = ({ recettes, fonctionFilter, regimeList, allergnList }) => {
  const [toggle, setToggle] = useState(window.innerWidth < 768 ? false : true);
  // Permet l'envoi imédiat du form
  const submit = useSubmit();
  return (
    <div className={styled.DivFilter}>
      <div className={styled.FilterTitle}>
        <h4>Filter par : </h4>
        <img
          onClick={() => setToggle(!toggle)}
          src={filterSvg}
          alt="filter-svg"
          class={styled.ButtonToggle}
        ></img>
      </div>

      {toggle ? (
        <div className={styled.optionFilter}>
          <label for="filter-cooking">Temps de cuisson</label>
          {objectTimeCooking.map((value) => (
            <form id="filter-cooking">
              <input
                id={value.name}
                type="checkbox"
                name={value.name}
                onChange={(event) => {
                  submit(fonctionFilter(event, recettes));
                }}
              />
              <label for={value.name}>{value.title}</label>
            </form>
          ))}

          <label for="filter-calorie">Calories</label>
          {objectCalories.map((value) => (
            <form id="filter-calorie">
              <input
                id={value.name}
                type="checkbox"
                name={value.name}
                onChange={(event) => {
                  submit(fonctionFilter(event, recettes));
                }}
              />
              <label for={value.name}>{value.title}</label>
            </form>
          ))}

          <label for="filter-regime">Regime</label>
          {regimeList.map((value) => (
            <form id="filter-regime">
              <input
                id={value._id}
                type="checkbox"
                name={'regime-' + value._id}
                onChange={(event) => {
                  submit(fonctionFilter(event, recettes));
                }}
              />
              <label for={value._id}>{value.name}</label>
            </form>
          ))}

          <label for="filter-allergn">Allergène</label>
          {allergnList.map((value) => (
            <form id="filter-allergn">
              <input
                id={value._id}
                type="checkbox"
                name={'allergn-' + value._id}
                onChange={(event) => {
                  submit(fonctionFilter(event, recettes));
                }}
              />
              <label for={value._id}>{value.name}</label>
            </form>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const objectCalories = [
  {
    name: 'filter-calorie-500',
    title: 'Moins de 500 kcal',
  },
  {
    name: 'filter-calorie-1000',
    title: 'Moins de 1000 kcal',
  },
  {
    name: 'filter-calorie-more-1000',
    title: 'Supérieur à 1000 kcal',
  },
];

const objectTimeCooking = [
  {
    name: 'filter-cooking-10',
    title: 'Moins de 10 min',
  },
  {
    name: 'filter-cooking-20',
    title: 'Moins de 20 min',
  },
  {
    name: 'filter-cooking-30',
    title: 'Moins de 30 min',
  },
];

export default FilterRecette;
