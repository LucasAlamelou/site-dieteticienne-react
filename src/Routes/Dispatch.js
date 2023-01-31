import '../App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './Error';
import Home from './Home';
import Recettes, { action as recettesAction, loader as recetteLoader } from './Recettes';
import Login, { action as loginAction } from './Login';
import AddModifyRecette, {
  loader as addModifyRecette,
  action as addOrModifiyRecette,
} from './AddModifyRecette';
import Contact, { action as contactAction } from './Contact';
import AddUser, { action as addUserAction, loader as addUserLoader } from './AddUser';
import Logout from './Logout';
import Mention from './Mention';
import { Politique } from './Politique';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: 'recettes',
    element: <Recettes />,
    errorElement: <ErrorPage />,
    loader: recetteLoader,
    action: recettesAction,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction,
  },
  {
    path: 'contact',
    element: <Contact />,
    action: contactAction,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: 'modifyRecette',
    loader: addModifyRecette,
    action: addOrModifiyRecette,
    element: <AddModifyRecette />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'addUser',
    loader: addUserLoader,
    action: addUserAction,
    element: <AddUser />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'logout',
    element: <Logout />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'mentions-legale',
    element: <Mention />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'politique-confidentialite',
    element: <Politique />,
    errorElement: <ErrorPage />,
  },
]);

function Dispatch() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default Dispatch;
