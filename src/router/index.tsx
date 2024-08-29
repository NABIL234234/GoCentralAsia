import {useRoutes} from 'react-router-dom';
import Home from '../pages/Home';
import DestinationPage from "../pages/DestinationPage";
import ConditionsPage from "../pages/ConditionsPage";
import TermsPrivacyPolicyPage from "../pages/TermsPrivacyPolicyPage";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage";

const routes = [
    {path: '/', element: <Home/>},
    {path: '/destination', element: <DestinationPage/>},
    {path: '/conditions', element: <ConditionsPage/>},
    {path: '/terms-privacy-policy', element: <TermsPrivacyPolicyPage/>},
    {path: '/contact-us', element: <ContactUsPage/>},
    {path: '/about-us', element: <AboutUsPage/>},
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
