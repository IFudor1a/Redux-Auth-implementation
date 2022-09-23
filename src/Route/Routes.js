import Secure from "../Pages/Secure";
import App from "../Components/App";
import Main from "../Pages/Main";
import Login from "../Components/Login";
import Registration from "../Components/Registration";
import Auth from "../Pages/Auth";

export const MAIN_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const SECURE_ROUTE = '/test';

export const authRoutes = [
    {
        path: SECURE_ROUTE,
        element: <Secure/>
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: <Main/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
]