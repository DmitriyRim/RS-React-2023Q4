import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
      <h1>404</h1>
      <Link to="/">Go back to the main page</Link>
    </>
  );
};
