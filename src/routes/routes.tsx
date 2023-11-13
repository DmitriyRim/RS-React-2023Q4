import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../pages/Root';
import { CardList } from '../components/CardList/CardList';
import { DetailedCard } from '../components/DetailedCard/DetailedCard';
import { ErrorPage } from '../pages/ErrorPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/:categoryName',
        element: <CardList />,
        loader: ({ params }) => params,
        children: [
          {
            path: ':userId',
            element: <DetailedCard />,
            loader: ({ params }) => {
              return fetch(
                `https://swapi.dev/api/${params.categoryName}/${params.userId}`
              );
            },
          },
        ],
      },
    ],
  },
]);
