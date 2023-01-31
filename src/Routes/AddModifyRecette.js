import React from 'react';
import AddRecette from '../Components/Recette/AddRecette';
import { getAllergns, getRegimes, addOrModifiyRecette } from '../Api/request';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { redirect } from 'react-router-dom';

export async function loader() {
  const listRegime = await getRegimes();
  const listAllergn = await getAllergns();
  if (listAllergn !== null && listRegime !== null) {
    return [listAllergn.listAllergn, listRegime.listRegime];
  }
  return null;
}

export async function action({ request }) {
  const token = window.localStorage.getItem('tokenMyApp');
  let formData = await request.formData();
  const idRecette = formData.get('idRecette');
  const title = formData.get('title');
  const description = formData.get('description');
  const calories = formData.get('calories');
  const timePrepare = formData.get('timePrepare');
  const timeCooking = formData.get('timeCooking');
  const timeRest = formData.get('timeRest');
  const regime = formData.getAll('regime');
  const steps = formData.get('steps');
  const allergn = formData.getAll('allergn');
  const contentFormForAPI = {
    title,
    description,
    calories,
    timePrepare,
    timeCooking,
    timeRest,
    regime,
    steps,
    allergn,
  };
  const contentModify = {
    token,
    _id: idRecette,
    modify: contentFormForAPI,
  };
  const contentAdd = {
    token,
    contentFormForAPI,
  };
  if (idRecette !== 0) {
    await addOrModifiyRecette(contentModify, true);
    return redirect('/recettes');
  }
  await addOrModifiyRecette(contentAdd, false);
  return redirect('/recettes');
}

function AddModifyRecette() {
  return (
    <>
      <Header />
      <AddRecette />
      <Footer />
    </>
  );
}

export default AddModifyRecette;
