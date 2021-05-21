import React from 'react';

import { Card } from '../card';
import { tvData } from '../../data/tv';

import style from './main.module.css';

export class Main extends React.Component {
    render() {
        return (
            <div className={style.main}>
                {tvData.map((item) => <Card item={item}/>)}
            </div>
        )
    }
};
