import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Events from "../pages/Events/Events";
import Tournaments from "../pages/Tournaments/Tournaments";
import Home from "../pages/Home/Home";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'events/:tournamentIds',
                element: <Events/>,
            },
            {
                path: 'tournaments/:sportId',
                element: <Tournaments/>,
            },
        ],
    }];

const router = createBrowserRouter(routes);

export default router;
