import React from 'react'
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { JounarlScreen } from '../components/journal/JounarlScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path='/auth'
                        component={AuthRouter}
                    />
                    <Route
                        exact
                        path='/'
                        component={JounarlScreen}
                    />

                    <Redirect to='/auth/login' />
                </Switch>
            </div>

            {

            }
        </Router>
    )
}
