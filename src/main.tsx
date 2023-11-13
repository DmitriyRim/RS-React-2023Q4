import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={routes} />
    </ErrorBoundary>
  </React.StrictMode>
);
