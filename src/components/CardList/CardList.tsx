import { Outlet, useLocation } from 'react-router-dom';
import {
  People,
  Planets,
  Films,
  Species,
  Vehicles,
  Starships,
} from '../../types/types';
import { createContext, useCallback, useEffect, useState } from 'react';
import { getContent, getQueryParameters } from '../../utils/utils';
import './CardList.scss';
import { useLoaderData } from '../../utils/hooks';
import { Card } from '../Card/Card';
import { Search } from '../Search/Search';
import { Pagination } from '../Pagination/Pagination';

export const CardContext = createContext<
  People[] | Planets[] | Films[] | Species[] | Vehicles[] | Starships[]
>([]);

export const CardList = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState('');
  const [queryParams, setQueryParams] = useState('');
  const [countPages, setCountPages] = useState(0);
  const [cartData, setCartData] = useState<
    People[] | Planets[] | Films[] | Species[] | Vehicles[] | Starships[]
  >([]);
  const [loading, setLoading] = useState(false);
  const loader = useLoaderData<{ categoryName: string; userId: string }>();

  const getLinksUrl = (urlItem: string) => {
    const url = new URL(urlItem);
    return url.pathname.slice(4) + location.search;
  };

  const getSearchParams = () => {
    const query = [];
    const ls = localStorage.getItem('search');
    const pageNumber = getQueryParameters('page');

    if (ls) query.push(`search=${ls}`);
    if (pageNumber) query.push(`page=${pageNumber}`);

    return `?${query.join('&')}`;
  };

  const getCartData = useCallback(async () => {
    setLoading(true);
    const response = await getContent(
      `/${loader.categoryName}${getSearchParams()}`
    );
    const data = await response.json();
    setCartData(data.results);
    setCountPages(Math.ceil(data.count / 10));
    setLoading(false);
  }, [loader.categoryName]);

  useEffect(() => {
    const query = getSearchParams();

    if (
      '/' + loader.categoryName !== currentLocation ||
      query !== queryParams
    ) {
      setQueryParams(query);
      setCurrentLocation(location.pathname);
      getCartData();
    }
  }, [
    currentLocation,
    getCartData,
    loader.categoryName,
    location.pathname,
    location.search,
    queryParams,
  ]);
  return (
    <>
      <Search />
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="card__list">
            {cartData.length > 0
              ? cartData.map((item, index) => (
                  <CardContext.Provider value={cartData} key={index}>
                    <Card index={index} url={getLinksUrl(item.url)} />
                  </CardContext.Provider>
                ))
              : 'not found'}
          </div>
          <Pagination count={countPages} />
          <div className="popup">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};
