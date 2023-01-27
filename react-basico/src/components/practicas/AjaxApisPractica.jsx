import React, { Component } from 'react';

function Pokemon(props) {

    return (
        <figure>
            <img src={props.avatar} alt={props.name}></img>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}


export default class AjaxApisPractica extends Component{

    state = {
        pokemons: []
    }

    componentDidMount() {
        let url = 'https://pokeapi.co/api/v2/pokemon'
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log('Data:', data);
                data.results.forEach((el) => {
                    fetch(el.url)
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json);
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            }

                            let pokemons = [...this.state.pokemons, pokemon];

                            this.setState({ pokemons })
                        })
                })
            } )
    }

    render() {

        return(
            <>
                <h3>Peticiones asíncronas en Componentes de Clase</h3>
                {this.state.pokemons.length === 0 
                    ? <h3>Cargando...</h3>
                    : (this.state.pokemons.map((el) => (
                        <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
                    )))
            }
            </>
        )
    }
}