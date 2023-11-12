import { NavLink } from 'react-router-dom';
import {
  Films,
  People,
  Planets,
  Species,
  Starships,
  Vehicles,
} from '../../types/types';
import './Card.scss';

interface Props {
  data: People | Planets | Films | Species | Vehicles | Starships;
  url: string;
}

export const Card = ({ data, url }: Props) => {
  return (
    <>
      <div className="card">
        <h3>{data.title || data.name}</h3>
        <NavLink to={url}>Details</NavLink>
      </div>
    </>
  );
};
