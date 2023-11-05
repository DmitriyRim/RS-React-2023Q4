import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
