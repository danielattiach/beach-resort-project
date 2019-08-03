import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms'
import Room from './pages/Room';

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/rooms/" exact component={Rooms}/>
                <Route path="/room/:slug" exact component={Room}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;
