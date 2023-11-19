import { Outlet, useLocation } from 'react-router-dom';
import { getQueryParameters } from '../../utils/utils';
import './CardList.scss';
import { useLoaderData } from '../../utils/hooks';
import { Card } from '../Card/Card';
import { Search } from '../Search/Search';
import { Pagination } from '../Pagination/Pagination';
import { useGetDataQuery } from '../../api/apiSlice';
import { CardsData } from '../../types/types';

export const CardList = () => {
  const location = useLocation();
  const loader = useLoaderData<{ categoryName: string; userId: string }>();
  const getSearchParams = () => {
    const query = [];
    const ls = localStorage.getItem('search');
    const pageNumber = getQueryParameters('page');

    if (ls) query.push(`search=${ls}`);
    if (pageNumber) query.push(`page=${pageNumber}`);

    return `?${query.join('&')}`;
  };

  const { data: cardsData = {}, isFetching } = useGetDataQuery(
    `${loader.categoryName}${getSearchParams()}`
  );

  const getLinksUrl = (urlItem: string) => {
    const url = new URL(urlItem);
    return url.pathname.slice(4) + location.search;
  };

  return (
    <>
      <Search />
      {isFetching ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="card__list">
            {cardsData.results?.length > 0
              ? cardsData.results.map((item: CardsData, index: number) => (
                  <Card data={item} url={getLinksUrl(item.url)} key={index} />
                ))
              : 'not found'}
          </div>
          <Pagination count={Math.ceil(cardsData.count / 10)} />
          <div className="popup">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};
