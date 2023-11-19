import { Form } from 'react-router-dom';
import './Search.scss';
import { useSelector, useDispatch } from 'react-redux';
import { SearcSlice, setSearchQuery } from './searchSlice';

export const Search = () => {
  const search = useSelector(
    (state: { search: SearcSlice }) => state.search.value
  );
  const dispatch = useDispatch();

  return (
    <Form
      className="search-container"
      onSubmit={(event) =>
        dispatch(setSearchQuery({ value: event.currentTarget.value }))
      }
    >
      <input
        type="text"
        defaultValue={search}
        name="search"
        onChange={(e) => localStorage.setItem('search', e.currentTarget.value)}
      />
      <button type="submit">Search</button>
    </Form>
  );
};
