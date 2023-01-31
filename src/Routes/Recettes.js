import React from 'react';
import Recette from '../Components/Recette/Recette';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { getAllergns, getRecettes, getRegimes, postNote } from '../Api/request';

export async function action({ request, params }) {
  let formData = await request.formData();
  const idRecette = formData.get('_id');
  const note = formData.get('noteNumber');
  const content = {
    _id: idRecette,
    note: note,
  };
  return postNote(content);
}

export async function loader({ request }) {
  const token = window.localStorage.getItem('tokenMyApp');
  const recettes = await getRecettes(token);
  const allergn = await getAllergns();
  const regime = await getRegimes();
  if (recettes !== null) {
    return [recettes.listRecette, allergn.listAllergn, regime.listRegime];
  }
  return null;
}
const Recettes = () => {
  return (
    <>
      <Header />
      <Recette />
      <Footer />
    </>
  );
};

export default Recettes;
