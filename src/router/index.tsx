import {useRoutes} from 'react-router-dom';
import Home from '../pages/Home';
import DestinationPage from "../pages/DestinationPage";
import ConditionsPage from "../pages/ConditionsPage";
import TermsPrivacyPolicyPage from "../pages/TermsPrivacyPolicyPage";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage";
import BlogPage from "../pages/BlogPage";
import BlogTourismPage from "../pages/BlogTourismPage";
import Karakol from "../pages/Karakol/Karakol.tsx";
import JalalAbad from "../pages/JalalAbad/JalalAbad.tsx";
import GroupTours from '../pages/GroupTours/GroupTours.tsx'
import Transfers from "../pages/Transfers/Transfers.tsx";

const routes = [
    {path: '/', element: <Home/>},
    {path: '/destination', element: <DestinationPage/>},
    {path: '/conditions', element: <ConditionsPage/>},
    {path: '/terms-privacy-policy', element: <TermsPrivacyPolicyPage/>},
    {path: '/kara-kol', element: <Karakol /> },
    {path: '/transfers', element: <Transfers />},
    {path: '/group-tours', element: <GroupTours />},
    {path: '/jalal-abad', element: <JalalAbad /> },
    {path: '/contact-us', element: <ContactUsPage/>},
    {path: '/about-us', element: <AboutUsPage/>},
    {path: '/blog', element: <BlogPage/>},
    {path: '/blog-tourism', element: <BlogTourismPage/>},
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
