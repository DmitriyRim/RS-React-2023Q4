import {
  useLoaderData as useLoaderDataOriginal,
  useNavigation,
  useNavigate,
} from 'react-router-dom';
import { Users } from '../types/types';

interface UseLoaderDataHook {
  <T>(): T;
}
const useLoaderData: UseLoaderDataHook = () => {
  const useLoaderDataRef = useLoaderDataOriginal as UseLoaderDataHook;
  return useLoaderDataRef();
};

export const Profile = () => {
  const loaderData = useLoaderData<Users>();
  const navigation = useNavigation();
  const navigate = useNavigate();

  return (
    <div className="profile">
      {navigation.state !== 'loading' ? (
        <>
          <h2>{loaderData.name}</h2>
          <ul>
            <li>{`Birth year: ${loaderData.birth_year}`}</li>
            <li>{`Created: ${loaderData.created}`}</li>
            <li>{`Edited: ${loaderData.edited}`}</li>
            <li>{`Eye color: ${loaderData.eye_color}`}</li>
            <li>{`gender: ${loaderData.gender}`}</li>
            <li>{`hair_color: ${loaderData.hair_color}`}</li>
            <li>{`height: ${loaderData.height}`}</li>
            <li>{`mass: ${loaderData.mass}`}</li>
            <li>{`skin_color: ${loaderData.skin_color}`}</li>
          </ul>
          <button
            className="close"
            onClick={() => navigate(`/${location.search}`)}
          >
            Close
          </button>
        </>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};
