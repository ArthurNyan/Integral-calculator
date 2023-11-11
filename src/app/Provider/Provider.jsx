import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import AuthorPage from '../../pages/AuthorPage/AuthorPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePage,
    },
    {
        path: '/author/',
        Component: AuthorPage,
    },
    {
        path: '*',
        Component: ErrorPage,
    }
]);

export const RouterProvider = () => {
    return <ReactRouterProvider router={router} />;
};