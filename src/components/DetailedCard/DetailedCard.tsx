import { useNavigation, useNavigate } from 'react-router-dom';
import { useLoaderData } from '../../utils/hooks';
import './DetailedCard.scss';

export const DetailedCard = () => {
  const loaderData = useLoaderData<{ [key: string]: string | string[] }>();
  const navigation = useNavigation();
  const navigate = useNavigate();

  return (
    <div
      className="detailed__wrapper"
      onClick={(e) => {
        if (
          e.currentTarget === e.target ||
          e.target instanceof HTMLButtonElement
        ) {
          navigate(-1);
        }
      }}
    >
      <div className="detailed__card">
        {navigation.state !== 'loading' ? (
          <>
            <h2>{loaderData?.name || loaderData?.title}</h2>
            <ul>
              {Object.keys(loaderData).map((key: string, index: number) => {
                if (
                  key === 'name' ||
                  key === 'title' ||
                  key === 'url' ||
                  loaderData[key] instanceof Array
                ) {
                  return;
                }

                return <li key={index}>{`${key}: ${loaderData[key]}`}</li>;
              })}
            </ul>
            <button className="close">Close</button>
          </>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
};
