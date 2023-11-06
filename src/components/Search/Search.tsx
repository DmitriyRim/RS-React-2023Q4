import { FC, useEffect, useState } from 'react';
import './Search.scss';
import { Form } from 'react-router-dom';

interface PropsSearch {
  handle: () => void;
}

export const Search: FC<PropsSearch> = (props) => {
  const [defaultQuery, setDefaultQuery] = useState('');

  useEffect(() => {
    const string = localStorage.getItem('search');

    if (string) {
      setDefaultQuery(string);
    }
  }, []);

  const searchHandle = (event: React.FormEvent<HTMLInputElement>): void => {
    let string = event.currentTarget.value;

    string = string.trim();
    localStorage.setItem('search', string);
  };

  return (
    <Form className="search-container">
      <input
        type="text"
        defaultValue={defaultQuery}
        onChange={searchHandle}
        name="search"
      />
      <button onClick={props.handle}>Search</button>
    </Form>
  );
};
