import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../pages/Root';
import { Profile } from '../pages/Profile';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/:userId',
        element: <Profile />,
        loader: ({ params }) => {
          return fetch(`https://swapi.dev/api/people/${params.userId}`);
        },
      },
    ],
  },
]);
