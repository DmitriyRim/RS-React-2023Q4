import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Search } from '../components/Search/Search';
import { MenuLinks } from '../components/MenuLinks/MenuLinks';
import { getContent } from '../api/api';

export function Root() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const buttonHandle = async () => {
    const queryString = localStorage.getItem('search');
    setLoading(false);
    const response = await getContent(`?search=${queryString}` || '');
    const data = await response.json();

    setData(data.results);
    setLoading(true);
  };

  useEffect(() => {
    buttonHandle();
  }, []);

  if (errorStatus) {
    throw new Error('Писец');
  }

  return (
    <>
      <div className="sidebar">
        <h2>The Star Wars</h2>
        <button onClick={() => setErrorStatus(true)}>Error</button>
        <Search handle={buttonHandle} />
        {loading ? <MenuLinks data={data} /> : <div className="loader"></div>}
      </div>
      <div id="details">
        <Outlet />
      </div>
    </>
  );
}
