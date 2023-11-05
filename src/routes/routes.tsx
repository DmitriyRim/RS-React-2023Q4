import { createBrowserRouter } from 'react-router-dom';
import { Root } from './root';
import { Info } from './info';
import { loaderInfo } from '../api/loaders';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/people/:peopleId',
        element: <Info />,
        loader: loaderInfo,
      },
    ],
  },
]);
