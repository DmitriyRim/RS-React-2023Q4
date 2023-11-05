import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../components/Main/Main';
import { Root } from './root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Main data={[]} />,
      },
    ],
  },
]);
