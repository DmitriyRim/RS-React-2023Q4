import {
  useLoaderData as useLoaderDataOriginal,
  useNavigation,
} from 'react-router-dom';
import { Profile } from '../types/type';

interface UseLoaderDataHook {
  <T>(): T;
}
const useLoaderData: UseLoaderDataHook = () => {
  const useLoaderDataRef = useLoaderDataOriginal as UseLoaderDataHook;
  return useLoaderDataRef();
};

export const Info = () => {
  const data: Profile = useLoaderData<Profile>();
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === 'idle' ? (
        <div>
          <h1>{data.name}</h1>
          <ul>
            <li>Birth year: {data.birth_year}</li>
            <li>Gender: {data.gender}</li>
            <li>Height: {data.height}</li>
            <li>Hair color: {data.hair_color}</li>
          </ul>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};
