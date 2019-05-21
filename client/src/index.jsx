import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(<BrowserRouter>
    <Route path = "/res/:name" component = {App} />
    </BrowserRouter>, document.getElementById('app'));


