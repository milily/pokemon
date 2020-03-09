import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { getTypes, getPokemonByType, getPokemonbySearch } from '../api/pokemon';
import Buttons from '../components/buttons';
import PokemonCard from '../components/card';
import PokemonSearch from '../components/search';
import PokemonHeader from '../components/header';
import { Layout, Row, Col } from 'antd';


const MainView = props => {

    const [ pokemonTypes, setPokemonTypes] = useState([]);
    const [ currentPokemonFilter, setPokemonFilter] = useState(null);
    const [ pokemonFilterResult, setPokemon] = useState([]);
    const [ pokemonInputSearch, setPokemonInput] = useState(null);
    console.log("setPokemonInput :", pokemonInputSearch);

    useEffect(() => {
        async function fetchData(){
            const newPokemonTypes = await getTypes()
            setPokemonTypes(newPokemonTypes);
        }
        fetchData();

        
    },[])

    useEffect(() => {
        async function fetchPokemonByType(){
            const newPokemon = await getPokemonByType(currentPokemonFilter)
            setPokemon( newPokemon);
        }
        if(currentPokemonFilter){
            setPokemon([]);
            fetchPokemonByType();
        }
    },[ currentPokemonFilter])

    useEffect(() => {
        async function fetchPokemonBySearch(){
            const newPokemonBySearch = await getPokemonbySearch(pokemonInputSearch)
            setPokemon([newPokemonBySearch]);
        }
        fetchPokemonBySearch()
    },[ pokemonInputSearch ])

    return (
        <Fragment>
            <PokemonHeader></PokemonHeader>
            <PokemonSearch
                setPokemonInput={setPokemonInput}
            />
            <Row justify="center" align="middle">
                <Col span={20}>
                    <Buttons
                        setPokemonFilter={setPokemonFilter}
                        pokemonTypes={pokemonTypes}
                        className="pokemon-button"
                    />
                    <Row align="center">
                        {
                            pokemonFilterResult.map((pokemon, index) => (
                                <PokemonCard
                                    key={index}
                                    pokemon={pokemon}
                                />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}


export default MainView
