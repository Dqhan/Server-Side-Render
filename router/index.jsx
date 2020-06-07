import Home from '../src/Home';
import PageA from '../src/PageA';
import PageB from '../src/PageB';
import PageATask from '../src/PageATask';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import PageARouter from '../src/PageARouter'

const router = [
    {
        component: Home,
        path: '/',
        exact: true
    },
    // {
    //     component: PageARouter,
    //     path: '/page_a',
    //     routes: [
    //         {
    //             component: PageA,
    //             path: '/page_a',
    //             exact: true
    //         },
    //         {
    //             component: PageATask,
    //             path: '/page_a/page_a_task'
    //         }
    //     ],
    //     // exact: true
    // },
    {
        component: PageA,
        path: '/page_a',
        routes: [
            {
                component: PageATask,
                path: '/page_a/page_a_task'
            }
        ],
        // exact: true
    },
    {
        component: PageB,
        path: '/page_b',
        // exact: true
    },
]


const NestedRoute = (route) => (
    <Route path={route.path} exact={route.exact}
        render={(props) => <route.component {...props} router={route.routes} />}
    />
);


export {
    router,
    NestedRoute
}

