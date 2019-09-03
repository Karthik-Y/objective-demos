import App from './App';
import Layouts from './Components/Layouts';
import Mobile from './Components/Mobile';

const routes = [
    {
        path: "/home",
        component: App
    },
    {
        path: "/layouts",
        component: Layouts
    },
    {
        path: "/mobile",
        component: Mobile
    }
];

export default routes;