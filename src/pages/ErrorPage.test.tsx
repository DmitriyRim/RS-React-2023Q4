import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { ErrorPage } from './ErrorPage';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

const routes = createMemoryRouter(
  [
    {
      path: '/',
      element: <h1>Test</h1>,
      errorElement: <ErrorPage />,
    },
  ],
  {
    initialEntries: ['/45454'],
  }
);

test('full app rendering/navigating', async () => {
  render(<RouterProvider router={routes}></RouterProvider>);

  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
