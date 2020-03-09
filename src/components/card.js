import React, { useEffect, useState} from 'react'
import { Card, Col, Row } from 'antd';
import { getPokemon } from '../api/pokemon';

const PokemonCard = props => {

    const { Meta } = Card;
    const { pokemon } = props;
    const [ pokemonSprites, setPokemonSprites] = useState([]);

    useEffect(() => {
        async function fetchPokemon(){
            const newPokemonSprites = await getPokemon(pokemon.pokemon.name)
            setPokemonSprites(newPokemonSprites.front_default);
        }
        fetchPokemon()
    }, [])

    if(pokemon.data){
        return  (
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={pokemon.data.sprites.front_default}/>}
                    >
                    <Meta title={pokemon.data.name} description={pokemon.data.name} />
                </Card>
            </Col>
        ) 
    }

    return  (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={pokemonSprites}/>}
            >
            <Meta title={pokemon.pokemon.name} description={pokemon.pokemon.name} />
        </Card>
    )
}


export default PokemonCard
