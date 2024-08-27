import {useRoutes} from 'react-router-dom';
import Home from '../pages/Home';
import DestinationPage from "../pages/DestinationPage";
import ConditionsPage from "../pages/ConditionsPage";

const routes = [
    {path: '/', element: <Home/>},
    {path: '/destination', element: <DestinationPage/>},
    {path: '/conditions', element: <ConditionsPage/>},
];

const RouterView = () => {
    const element = useRoutes(routes);

    return (
        <div>
            {element}
        </div>
    );
};

export default RouterView;
