import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd';

const Buttons = props => {
    const { pokemonTypes, setPokemonFilter } = props;

    return  pokemonTypes.map( (pokemonType, index) => (
        <Button key={index} 
            type="primary"
            onClick={() => setPokemonFilter(pokemonType.name)}
            >
            {pokemonType.name}
        </Button>
    ))
}

export default Buttons
