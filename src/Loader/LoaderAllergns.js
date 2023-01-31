import { getAllergns } from '../Api/request';

export async function loader() {
  const allergns = await getAllergns();
  if (allergns !== null) {
    console.log(allergns);
    return allergns.listAllergn;
  }
  return null;
}
