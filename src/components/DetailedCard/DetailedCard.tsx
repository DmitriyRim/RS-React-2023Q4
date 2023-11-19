import { useNavigate, useLocation } from 'react-router-dom';
import { useGetDataQuery } from '../../api/apiSlice';
import './DetailedCard.scss';

export const DetailedCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: detailsData = {}, isFetching } = useGetDataQuery(
    location.pathname
  );
  console.log(detailsData, isFetching);

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
        {!isFetching ? (
          <>
            <h2>{detailsData?.name || detailsData?.title}</h2>
            <ul>
              {Object.keys(detailsData).map((key: string, index: number) => {
                if (
                  key === 'name' ||
                  key === 'title' ||
                  key === 'url' ||
                  detailsData[key] instanceof Array
                ) {
                  return;
                }

                return <li key={index}>{`${key}: ${detailsData[key]}`}</li>;
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
