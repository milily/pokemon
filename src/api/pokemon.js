import axios from 'axios';
import { URL } from './constant';

export const getTypes = () => axios.get(`${URL}/type`)
                            .then(response => response.data.results);
    
export const getPokemonByType = (pokemonType) => axios.get(`${URL}/type/${pokemonType}`)
                            .then(response => response.data.pokemon);

export const getPokemon = (pokemon) => axios.get(`${URL}/pokemon/${pokemon}`)
                            .then(response => response.data.sprites);

export const getPokemonbySearch = (pokemonInput) => axios.get(`${URL}/pokemon/${pokemonInput}`)
                            .then(response => response);
