import { NavLink } from 'react-router-dom';
import { Users } from '../../types/types';

export interface Props {
  data: Users[];
}

export const Main = ({ data }: Props) => {
  const getLinksUrl = (urlItem: string) => {
    const url = new URL(urlItem);
    return url.pathname.slice(11) + location.search;
  };

  return (
    <ul>
      {data.length
        ? data.map((item, index) => (
            <NavLink to={getLinksUrl(item.url)} key={index}>
              {item.name}
            </NavLink>
          ))
        : 'not found'}
    </ul>
  );
};
