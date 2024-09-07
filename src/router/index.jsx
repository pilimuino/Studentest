import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout/Layout';
import Contact from '@/pages/Contact';
import Cookies from '@/pages/Cookies';
import Home from '@/pages/Home';
import Privacy from '@/pages/Privacy';
import Questiontest from '@/pages/Questiontest';
import Service from '@/pages/Service';
import TermsOfUse from '@/pages/TermsOfUse';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cookies',
                element: <Cookies />,
            },
            {
                path: '/privacy',
                element: <Privacy />,
            },
            {
                path: '/questiontest',
                element: <Questiontest/>
            },        
            {
                path: '/service',
                element: <Service/>        
            },
            {
                path: '/termsofuse',
                element: <TermsOfUse />,
            },
            {
                path: '/*',
                element: <Home />, 
            },
        ],
    },
]);

export default router;