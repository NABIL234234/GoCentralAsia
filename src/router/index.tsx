import {useRoutes} from 'react-router-dom';
import Home from '../pages/Home';
import DestinationPage from "../pages/DestinationPage";
import ConditionsPage from "../pages/ConditionsPage";
import Karakol from "../pages/Karakol/Karakol.tsx";
import Transfers from "../pages/Transfers/Transfers.tsx";
import GroupTours from "../pages/GroupTours/GroupTours.tsx";

const routes = [
    {path: '/', element: <Home/>},
    {path: '/destination', element: <DestinationPage/>},
    {path: '/conditions', element: <ConditionsPage/>},
    {path: '/karakol', element: <Karakol/>},
    {path: '/transfers', element: <Transfers/>},
    {path: '/grouptours', element: <GroupTours/>},



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
