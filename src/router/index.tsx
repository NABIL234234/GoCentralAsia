import {useRoutes} from 'react-router-dom';
import Home from '../pages/Home';
import DestinationPage from "../pages/DestinationPage";
import ConditionsPage from "../pages/ConditionsPage";
import TermsPrivacyPolicyPage from "../pages/TermsPrivacyPolicyPage";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage";
import BlogPage from "../pages/BlogPage";
import BlogTourismPage from "../pages/BlogTourismPage";

const routes = [
    {path: '/', element: <Home/>},
    {path: '/desitination', element: <DestinationPage/>},
    {path: '/conditions', element: <ConditionsPage/>},
    {path: '/TermsPrivacyPolicy', element: <TermsPrivacyPolicyPage/>},
    {path: '/ContactUs', element: <ContactUsPage/>},
    {path: '/AboutUs', element: <AboutUsPage/>},
    {path: '/Blog', element: <BlogPage/>},
    {path: '/BlogTourism', element: <BlogTourismPage/>},
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
