import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import AuthorPage from '../Pages/AuthorPage/AuthorPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePage,
    },
    {
        path: '/author/',
        Component: AuthorPage,
    },
    // {
    // 	path: '*',
    // 	Component: ErrorPage,
    // }
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};