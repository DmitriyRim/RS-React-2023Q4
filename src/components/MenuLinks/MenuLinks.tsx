import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLinks.scss';

export interface Props {
  data: {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
  }[];
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
