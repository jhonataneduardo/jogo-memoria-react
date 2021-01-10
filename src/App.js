import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playScore: 0,
      start: false,
      cartas: [
        {
          number: 2,
          opened: false,
          finded: false
        },
        {
          number: 4,
          opened: false,
          finded: false
        },
        {
          number: 3,
          opened: false,
          finded: false
        },
        {
          number: 2,
          opened: false,
          finded: false
        },
        {
          number: 1,
          opened: false,
          finded: false
        },
        {
          number: 4,
          opened: false,
          finded: false
        },
        {
          number: 1,
          opened: false,
          finded: false
        },
        {
          number: 3,
          opened: false,
          finded: false
        }
      ]
    }
  }

  playStart() {
    const start = true
    this.setState({ start })
  }

  cartaDisplay(index) {
    const carta = this.state.cartas[index];
    if (!this.state.start) { return; }
    return (
      <div className="carta" key={`carta-${index}`}>
        <span>{carta.opened && carta.number}</span>
      </div>
    ) 
  }

  renderCartas() {
    return this.state.cartas.map((carta, index) => this.cartaDisplay(index));
  }

  render() {
    return (
      <div className="container">
        <h1>Jogo da Memória</h1>
        <hr/>
        <div className="start">
          <button onClick={() => this.playStart()}>Iniciar Jogo</button>
        </div>
        {this.renderCartas()}
      </div>
    )
  }

}

export default App;