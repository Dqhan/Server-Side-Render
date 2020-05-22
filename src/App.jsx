import React from 'React';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Post from './Post';

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/post" component={ Post } />
        </Switch>
    </div>
)