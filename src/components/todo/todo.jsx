import React, { useState } from "react";

import styles from "./todo.module.css";

export const Todo = () => {
  const [todoArr, setTodoArr] = useState([]);
  const [text, setText] = useState('');

  const addItem = () => {
    setTodoArr([
      ...todoArr,
      {
        key: Date.now(),
        task: text,
      }
  ]);
    setText('');
  };

  const onDelete = (itemKey) => {
    setTodoArr(todoArr.filter(({key}) => key !== itemKey));
  }

  return (
    <div>
      <input value={text} type="text" onChange={({target: { value }}) => {setText(value)}} />
      <button type='button' onClick={addItem}>ADD</button>
      <hr/>
      <ol>
      {todoArr.map(({task, key}) => (
        <li key={key}>
          {task}
          <button onClick={() => {onDelete(key)}}>X</button>
        </li>
      ))}
      </ol>
    </div>
  )}