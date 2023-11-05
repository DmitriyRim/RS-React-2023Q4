import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLinks.scss';
import { Profile } from '../../types/type';

export interface Props {
  data: Profile[];
}

export const MenuLinks: FC<Props> = ({ data }) => {
  return (
    <ul className="sidebar__menu">
      {data.length
        ? data.map((item, index) => {
            const url = new URL(item.url);
            return (
              <NavLink to={url.pathname.slice(4)} key={index}>
                {item.name}
              </NavLink>
            );
          })
        : 'not found'}
    </ul>
  );
};
