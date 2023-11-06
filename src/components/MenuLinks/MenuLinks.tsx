import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Profile } from '../../types/type';

export interface Props {
  data: Profile[];
  nextPage: string | null;
  prevPage: string | null;
  handle: () => void;
}

export const MenuLinks: FC<Props> = ({ data, nextPage, prevPage, handle }) => {
  const navigate = useNavigate();

  const setNextPage = (nextPage: string | null) => {
    const url = new URL(location.href);

    if (nextPage) {
      url.searchParams.set('page', nextPage);

      navigate(url.search);
      handle();
    }
  };

  return (
    <>
      <ul className="sidebar__menu">
        {data.length
          ? data.map((item, index) => {
              const url = new URL(item.url);
              const localUrl = new URL(location.href);
              const pageNumber = localUrl.searchParams.get('page');
              const queryString = localStorage.getItem('search');
              const query = [];

              if (queryString) {
                query.push(`search=${queryString}`);
              }
              if (pageNumber) {
                query.push(`page=${pageNumber}`);
              }

              return (
                <NavLink
                  to={`${url.pathname.slice(11)}?${
                    query.length > 0 ? query.join('&') : ''
                  }`}
                  key={index}
                >
                  {item.name}
                </NavLink>
              );
            })
          : 'not found'}
      </ul>
      <div>
        <button
          disabled={prevPage === null}
          onClick={() => setNextPage(prevPage)}
        >
          Prev
        </button>
        <button
          disabled={nextPage === null}
          onClick={() => setNextPage(nextPage)}
        >
          Next
        </button>
      </div>
    </>
  );
};
