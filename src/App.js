import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playScore: 0,
      start: false,
      indexCartasViradas: [],
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
      <div className="carta" key={`carta-${index}`} onClick={() => this.abrirCarta(index)}>
        <span className={carta.finded && 'acerto'}>{carta.opened && carta.number}</span>
      </div>
    ) 
  }

  renderCartas() {
    return this.state.cartas.map((carta, index) => this.cartaDisplay(index));
  }

  verficarCartasAbertas() {
    const indexCartasViradas = this.state.indexCartasViradas;
    const todasCartas = this.state.cartas;
    if (indexCartasViradas.length === 2) {
      const indexA = indexCartasViradas[0]
      const indexB = indexCartasViradas[1]
      const cartaA = todasCartas[indexA];
      const cartaB = todasCartas[indexB];
      if (cartaA.number === cartaB.number) {
        cartaA.finded = true;
        cartaB.finded = true;
        todasCartas[indexA] = cartaA;
        todasCartas[indexB] = cartaB;
        this.setState({ cartas: todasCartas, indexCartasViradas: [] });
      } else {
        alert('Errado');
        cartaA.opened = false;
        cartaB.opened = false;
        todasCartas[indexA] = cartaA;
        todasCartas[indexB] = cartaB;
        this.setState({ cartas: todasCartas, indexCartasViradas: [] });
      }
    }
  }
  abrirCarta(index) {
    const indexCartasViradas = this.state.indexCartasViradas
    const carta = this.state.cartas[index];
    carta.opened = true;
    const allCartas = this.state.cartas;
    allCartas[index] = carta;
    if (indexCartasViradas.length > 2) {return;}
    indexCartasViradas.push(index);
    this.setState({ cartas: allCartas, indexCartasViradas: indexCartasViradas})
    setTimeout(() => this.verficarCartasAbertas(), 200);
    
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