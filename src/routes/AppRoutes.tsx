import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load HomePage to reduce initial bundle & break network dependency chain
const HomePage = lazy(() => import('../pages/public/HomePage'));

// Minimal loading fallback (invisible — avoids layout shift)
const PageLoader = () => (
  <div
    className="font-outfit flex min-h-screen items-center justify-center"
    style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #faf5ff 40%, #fff7ed 100%)' }}
  >
    <div
      className="h-10 w-10 animate-spin rounded-full border-4 border-pink-200 border-t-pink-500"
      role="status"
      aria-label="Loading"
    />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <HomePage />
      </Suspense>
    ),
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
