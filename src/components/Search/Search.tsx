import { Form } from 'react-router-dom';
import { getQueryParameters } from '../../utils/utils';
import './Search.scss';
import { useEffect, useState } from 'react';

export const Search = () => {
  const [defaultValue, setDefaultValue] = useState('');

  useEffect(() => {
    const query = getQueryParameters('search');

    if (query) {
      localStorage.setItem('search', query);
      setDefaultValue(query);
    } else {
      setDefaultValue(localStorage.getItem('search') || '');
    }
  }, []);

  return (
    <Form className="search-container">
      <input
        type="text"
        defaultValue={defaultValue || ''}
        name="search"
        onChange={(e) => localStorage.setItem('search', e.currentTarget.value)}
      />
      <button type="submit">Search</button>
    </Form>
  );
};
