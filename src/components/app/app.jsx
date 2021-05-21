import React from 'react';

import { Header } from '../header';
import { Main } from '../main';

import './app.css';

export const App = () => {
    return (
    <div className="app">
        <Header />
        <Main />
    </div>
    );
};