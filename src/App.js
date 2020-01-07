import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import NotFound from './components/NotFound/NotFound';
import Context from './Context';

const App = () => {
    const [secret, setSecret] = useState(false);

    return (
        <Context.Provider value={{ secret, setSecret}}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Join} />
                    <Route path="/chat" component={Chat} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Context.Provider>
    )
}

export default App;