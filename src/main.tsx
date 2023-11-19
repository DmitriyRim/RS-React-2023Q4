import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.tsx';
import { Provider } from 'react-redux';
import { store } from './utils/store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
