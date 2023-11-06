import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Search } from '../components/Search/Search';
import { MenuLinks } from '../components/MenuLinks/MenuLinks';
import { getContent } from '../api/api';

export function Root() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [nextPageNumber, setNextPageNumber] = useState<string | null>(null);
  const [prevPageNumber, setPrevPageNumber] = useState<string | null>(null);

  const buttonHandle = async () => {
    setLoading(false);
    const response = await getContent(getQueryString());
    const data = await response.json();

    if (data.next) {
      const url = new URL(data.next);
      setNextPageNumber(url.searchParams.get('page'));
    } else {
      setNextPageNumber(null);
    }
    if (data.previous) {
      const url = new URL(data.previous);
      setPrevPageNumber(url.searchParams.get('page'));
    } else {
      setPrevPageNumber(null);
    }

    setData(data.results);
    setLoading(true);
  };

  const getQueryString = (): string => {
    const url = new URL(location.href);
    const pageNumber = url.searchParams.get('page');
    const queryString = localStorage.getItem('search');
    const query = [];

    if (queryString) {
      query.push(`search=${queryString}`);
    }
    if (pageNumber) {
      query.push(`page=${pageNumber}`);
    }

    return query.length > 0 ? `?${query.join('&')}` : '';
  };

  useEffect(() => {
    const url = new URL(location.href);
    const searchString = url.searchParams.get('search');

    if (searchString) {
      localStorage.setItem('search', searchString);
    }

    buttonHandle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPageNumber]);

  if (errorStatus) {
    throw new Error('Писец');
  }

  return (
    <>
      <div className="sidebar">
        <h2>The Star Wars</h2>
        <button onClick={() => setErrorStatus(true)}>Error</button>
        <Search handle={buttonHandle} />
        {loading ? (
          <MenuLinks
            data={data}
            nextPage={nextPageNumber}
            prevPage={prevPageNumber}
            handle={buttonHandle}
          />
        ) : (
          <div className="loader"></div>
        )}
      </div>
      <div id="details">
        <Outlet />
      </div>
    </>
  );
}
