import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Context from './Context';

const App = () => {
    const [secret, setSecret] = useState(false);
    const location = window.location.host;

    return (
        <Context.Provider value={{ secret, setSecret, location }}>
            <Router>
                <Route path="/" exact component={Join} />
                <Route path="/chat" component={Chat} />
            </Router>
        </Context.Provider>
    )
}

export default App;