import React, { Component } from "react"

class ListaCarta extends Component {

    constructor(prop) {
        super(prop)
        this.state = {
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

    carta(index) {
        const carta = this.state.cartas[index]
        return (
            <div className="carta" key={`carta-${index}`} onClick={() => this.abrirCarta(index)}>
                <span className={carta.finded && 'acerto'}>{carta.opened && carta.number}</span>
            </div>
        )
    }

    listaCartas() {
        return this.state.cartas.map((carta, index) => this.carta(index));
    }

    abrirCarta(index) {
        const indexCartasViradas = this.state.indexCartasViradas
        if (indexCartasViradas.length === 2) {return;}
        const carta = this.state.cartas[index];
        carta.opened = true;
        const listaCartas = this.state.cartas;
        listaCartas[index] = carta;        
        indexCartasViradas.push(index);
        this.setState({ cartas: listaCartas, indexCartasViradas: indexCartasViradas})
        // setTimeout(() => this.verficarCartasAbertas(), 200);
        
      }
    
    render() {
        return this.listaCartas()
    }
}

export default ListaCarta