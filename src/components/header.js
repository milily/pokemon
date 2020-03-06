import React from 'react';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';

const PokemonHeader = props => {
    return (
        <PageHeader
            className="site-page-header"
            title="Pokemon"
            subTitle="Gotta Catch 'Em All"
        />
    )
}

export default PokemonHeader
