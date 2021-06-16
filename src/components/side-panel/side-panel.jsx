import React from 'react';

import './side-panel.css';

export const SidePanel = () => (
  <div className="side-panel">
    <a className="link" href="/main">Главная</a>
    <a className="link" href="/catalogue">Каталог</a>
    <a className="link" href="/table">Таблица данных</a>
    <a className="link" href="/todo">ToDo</a>
  </div>
)