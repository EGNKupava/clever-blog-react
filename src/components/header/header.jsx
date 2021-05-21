import React from 'react';

import logo from './assets/logo.svg'

import style from './header.module.css';

const bool = false;

export class Header extends React.Component {
    render() {
        return (
            <div className={style.header}>
                <img src={logo} alt="картинка" className={style.logo} />
                <div style={{backgroundColor: bool ? "yellow" : "green"}}>надпись</div>
                HEADER
            </div>
        )
    }
};
