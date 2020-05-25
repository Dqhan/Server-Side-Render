import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import Post from './Post';

// export default () => (
//     <div>
//         <Switch>
//             <Route exact path="/" component={ Home } />
//             <Route exact path="/post" component={ Post } />
//         </Switch>
//     </div>
// )

// module.exports = () => (
//     <div>
//         <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/post" component={Post} />
//         </Switch>
//     </div>
// )


class App extends React.Component {
    render() {
        return <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/post" component={Post} />
                </Switch>
            </BrowserRouter>
        </div>
    }
}

module.exports = App;



