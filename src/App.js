import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { StartScreen, PraxisScreen, TeamScreen, LeistungenScreen, ServiceScreen, KontaktScreen } from './screens'
import './App.scss'
import './subtabbar.scss'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={props => <StartScreen {...props} />} />
                    <Route path="/start" render={props => <StartScreen {...props} />} />
                    <Route path="/praxis" render={props => <PraxisScreen {...props} />} />
                    <Route path="/team" render={props => <TeamScreen {...props} />} />
                    <Route path="/leistungen" render={props => <LeistungenScreen {...props} />} />
                    <Route path="/service" render={props => <ServiceScreen {...props} />} />
                    <Route path="/kontakt" render={props => <KontaktScreen {...props} />} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}