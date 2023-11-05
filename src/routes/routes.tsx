import { createBrowserRouter } from 'react-router-dom';
import { Root } from './root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/people/:peopleId',
        element: <h1>1</h1>,
      },
    ],
  },
]);
