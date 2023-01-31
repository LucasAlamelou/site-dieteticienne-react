import { getRegimes } from '../Api/request';

export async function loader() {
  const regimes = await getRegimes();
  if (regimes !== null) {
    return regimes.listRegimes;
  }
  return null;
}
