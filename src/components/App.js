import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            <h2>PageOne</h2>
            <Link to="/pagetwo">Page Two</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            <h2>PageTwo</h2>
            <Link to="/">Page One</Link>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />
            </BrowserRouter>
        </div>
    )
}

export default App;