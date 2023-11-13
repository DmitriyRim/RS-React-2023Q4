import { NavLink } from 'react-router-dom';
import './Card.scss';
import { useContext } from 'react';
import { CardContext } from '../CardList/CardList';

interface Props {
  index: number;
  url: string;
}

export const Card = ({ index, url }: Props) => {
  const context = useContext(CardContext);

  return (
    <>
      <div className="card">
        <h3>{context[index].title || context[index].name}</h3>
        <NavLink to={url}>Details</NavLink>
      </div>
    </>
  );
};
