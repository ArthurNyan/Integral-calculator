import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePage,
    },
    // {
    // 	path: '*',
    // 	Component: ErrorPage,
    // }
]);

export const Provider = () => {
    return <ReactRouterProvider router={router} />;
};
