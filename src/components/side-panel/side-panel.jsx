import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

import './side-panel.css';

export const SidePanel = () => {
const history = useHistory();
console.log('history: ', history);
let location = useLocation();
console.log('location: ', location);

  const onButton = () => {
    history.goBack();
  } 

return (
  <div className="side-panel">
    <NavLink className="link" to="/main">Главная</NavLink>
    <NavLink className="link" to="/catalogue">Каталог</NavLink>
    <NavLink className="link" to="/table">Таблица данных</NavLink>
    <NavLink className="link" to="/todo">ToDo</NavLink>
    <button type="button" onClick={onButton}>Click</button>
  </div>
);
}