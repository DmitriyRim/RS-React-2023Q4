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
        path: '/',
        element: <h2>Not information</h2>,
      },
      {
        path: '/:peopleId',
        element: <Info />,
        loader: loaderInfo,
      },
    ],
  },
]);
