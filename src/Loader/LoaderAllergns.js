import { getAllergns } from '../Api/request';

export async function loader() {
  const allergns = await getAllergns();
  if (allergns !== null) {
    return allergns.listAllergn;
  }
  return null;
}
