import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <span>Время: </span>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

// Когда мы передаём <Clock /> в ReactDOM.render(), React вызывает конструктор компонента. Clock должен отображать текущее время, поэтому мы задаём начальное состояние this.state объектом с текущим временем.
// React вызывает метод render() компонента Clock. Таким образом React узнаёт, что отобразить на экране. Далее React обновляет DOM так, чтобы он соответствовал выводу рендера Clock.
// Как только вывод рендера Clock вставлен в DOM, React вызывает метод жизненного цикла componentDidMount(). Внутри него компонент Clock указывает браузеру установить таймер, который будет вызывать tick() раз в секунду.
// Таймер вызывает tick() ежесекундно. Внутри tick() мы просим React обновить состояние компонента, вызывая setState() с текущим временем. React реагирует на изменение состояния и снова запускает render(). На этот раз this.state.date в методе render() содержит новое значение, поэтому React заменит DOM. Таким образом компонент Clock каждую секунду обновляет UI.
// Если компонент Clock когда-либо удалится из DOM, React вызовет метод жизненного цикла componentWillUnmount() и сбросит таймер.
