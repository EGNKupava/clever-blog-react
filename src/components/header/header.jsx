import React from 'react';

import logo from './assets/logo.svg'

import './header.css';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt="картинка"/>
                HEADER
            </div>
        )
    }
};
