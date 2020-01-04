import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Reg from './components/Reg/Reg';
import NotFound from './components/NotFound/NotFound';
import Context from './Context';

const App = () => {
    const [secret, setSecret] = useState(false);
    const location = window.location.host;

    return (
        <Context.Provider value={{ secret, setSecret, location }}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Join} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/chat" component={Chat} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Context.Provider>
    )
}

export default App;