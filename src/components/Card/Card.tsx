import { NavLink } from 'react-router-dom';
import './Card.scss';
import { CardsData } from '../../types/types';

interface Props {
  data: CardsData;
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
