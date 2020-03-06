import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
const { Search } = Input;

const PokemonSearch = props => {

    const { setPokemonInput } = props;

    return (
        <div>
            <Search
                placeholder="input search text"
                enterButton="Search"
                style={{ width: '50%' }}
                onSearch={(value) => {setPokemonInput(value)}}
            />
        </div>
    )
}


export default PokemonSearch
