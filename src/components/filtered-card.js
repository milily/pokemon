import React from 'react'
import PropTypes from 'prop-types'

const FilteredCard = props => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={pokemonSprites}/>}
            >
            <Meta title={pokemon.name} description={pokemon.name} />
        </Card>
    )
}


export default FilteredCard
