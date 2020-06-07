import { Link, Route, Switch } from 'react-router-dom'
import { NestedRoute } from '../router'
import Task from './PageATask';
import PageA from './PageA'

export default class PageARouter extends React.Component {
    render() {
        return <div>
            {/* <NestedRoute /> */}

            {/* {
                this.props.router.map((route, i) => (
                    <NestedRoute key={i} {...route} />
                ))
            } */}
            <Switch>
                {/* <Route path='/page_a' component={PageA} exact={true} />
                <Route path='/page_a/page_a_task' component={Task} /> */}
                {
                    this.props.router.map((route, i) => (
                        <NestedRoute key={i} {...route} />
                    ))
                }
            </Switch>
        </div>
    }
}