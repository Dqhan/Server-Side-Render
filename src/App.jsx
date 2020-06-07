import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { router, NestedRoute } from '../router';

import Home from './Home';
import PageARouter from './PageARouter'

class App extends React.Component {
    render() {
        return <div>
            <BrowserRouter>
                <Switch>
                    {
                        router.map((route, i) => {
                            // return <Route key={i} path={route.path} component={route.component} exact={route.exact} />
                            return <NestedRoute key={i} {...route} />
                        })

                    }
                    {/* 
                    <Route path='/' component={Home} exact={true} />
                    <Route path='/page_a' component={PageARouter} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    }
}
{
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
}



module.exports = App;



