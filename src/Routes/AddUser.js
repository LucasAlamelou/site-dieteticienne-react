import { redirect } from 'react-router-dom';
import Header from '../Components/Header/Header';
import AddUserForm from '../Components/AddUser/AddUserForm';
import Footer from '../Components/Footer/Footer';
import { addUser, getAllergns, getRegimes } from '../Api/request';

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
  const email = formData.get('email');
  const password = formData.get('password');
  const message = formData.get('message');
  const lastName = formData.get('lastName');
  const firstName = formData.get('firstName');
  const regime = formData.getAll('regime');
  const allergn = formData.getAll('allergn');

  const content = {
    token,
    email,
    password,
    message,
    lastName,
    firstName,
    regime,
    allergn,
  };
  const result = await addUser(content);
  if (result) {
    return redirect('/');
  }
  return null;
}

const AddUser = () => {
  return (
    <>
      <Header />
      <AddUserForm />
      <Footer />
    </>
  );
};

export default AddUser;
