
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import DestinationPage from "../pages/DestinationPage";

const routes = [
  { path: '/', element: <Home /> },
  { path: '/desitination', element: <DestinationPage /> },
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
