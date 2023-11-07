import { Form } from 'react-router-dom';
import { getQueryParameters } from '../../utils/utils';

export const Search = () => {
  return (
    <Form className="search-container">
      <input
        type="text"
        defaultValue={getQueryParameters('search') || ''}
        name="search"
      />
      <button type="submit">Search</button>
    </Form>
  );
};
