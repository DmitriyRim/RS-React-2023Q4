import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

export function Root() {
  const [pages, setPages] = useState<string[]>([]);
  const [errorStatus, setErrorStatus] = useState(false);

  const showError = () => {
    setErrorStatus(true);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/`)
      .then((data) => data.json())
      .then((links) => {
        const a = Object.keys(links).map((key) => {
          const url = new URL(links[key]);
          return url.pathname.slice(5, -1);
        });
        setPages(a);
      });
  }, []);

  if (errorStatus) {
    throw new Error('Писец');
  }

  return (
    <>
      <header className="header">
        <h1>The Star Wars</h1>
        <nav>
          <ul className="menu">
            {pages.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink to={link} className="menu__link">
                    {link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2023 Dimitry Rym</p>
        <button onClick={showError}>Error</button>
      </footer>
    </>
  );
}
