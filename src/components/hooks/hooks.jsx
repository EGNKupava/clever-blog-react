import React, { useMemo, useState, useRef } from "react";

import "./style.css";

const Summarize = () => {
  const stopWatch = () => {
    function multiply(num) {
      for (let i = 0; i < num; i++) {
        let doSomething = i * i * i;
      }
    }
    const startTime = Date.now();
    multiply(10000000);
    const endTime = Date.now();
    const diff = endTime - startTime;
    return diff;
  };
  console.log(" РЕНДЕР Мемоизированный компонент");
  return (
    <div>
      <span>Время вычисления:</span>
      <span>{stopWatch()}</span> мс
    </div>
  );
};

export const Hooks = (props) => {
  const [start, setStart] = useState(0);
  const [render, setRender] = useState(0);

  const memoizedValue = useMemo(Summarize, [start]);

  const onButton = () => {
    setStart(start + 1);
  };
  console.log("RENDER");

  const inputRef = useRef(null);

  return (
    <div>
      HOOKS
      <h2>useMemo</h2>
      <div>
        <button type="button" onClick={onButton}>
          Без мемоизации
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setRender(render + 1)}>
          Ререндер {render}
        </button>
      </div>
      {memoizedValue}
      <input type="text" ref={inputRef} />
      <button
        type="button"
        onClick={() => {
          console.log(inputRef.current.value);
          inputRef.current.value = 1234;
        }}
      >
        Взять значение
      </button>
    </div>
  );
};
