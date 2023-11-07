import { useEffect, useState } from 'react';
import { Main } from '../components/Main/Main';
import { Search } from '../components/Search/Search';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { getQueryParameters } from '../utils/utils';

export function Root() {
  const locations = useLocation();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const getContent = async (): Promise<Response> => {
    const query = [];
    if (getQueryParameters('search'))
      query.push('search=' + getQueryParameters('search'));
    if (getQueryParameters('page'))
      query.push('page=' + getQueryParameters('page'));
    console.log(
      `https://swapi.dev/api/people/${
        query.length > 0 ? '?' + query.join('&') : ''
      }`
    );
    return await fetch(
      `https://swapi.dev/api/people/${
        query.length > 0 ? '?' + query.join('&') : ''
      }`
    );
  };

  const buttonHandle = async () => {
    setLoading(false);
    const response = await getContent();
    const data = await response.json();
    setData(data.results);
    setCount(data.count);
    setLoading(true);
  };
  const getPagination = () => {
    const numbers = [];
    const totalPages = Math.round(count / 10);

    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }

    return numbers;
  };
  const showError = () => {
    setErrorStatus(true);
  };

  useEffect(() => {
    buttonHandle();
    console.log(getQueryParameters('page'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations]);

  if (errorStatus) {
    throw new Error('Писец');
  }

  return (
    <>
      <header>
        <h1>The Star Wars</h1>
      </header>
      <main className="main">
        <div className="sidebar">
          <button onClick={showError}>Error</button>
          <Search />
          {loading ? <Main data={data} /> : <div className="loader"></div>}
          <div className="sidebar__pagination">
            {getPagination().map((item, index) => {
              return (
                <Link to={`/?page=${item}`} key={index}>
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="page">
          <Outlet />
        </div>
      </main>
    </>
  );
}
