import React from 'react';
import PropTypes from 'prop-types';
import { Input, Row, Col } from 'antd';
const { Search } = Input;

const PokemonSearch = props => {

    const { setPokemonInput } = props;

    return (
        <div>
            <Row justify="center">
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        style={{ width: '50%' }}
                        onSearch={(value) => {setPokemonInput(value)}}
                    />
                </Col>
            </Row>
        </div>
    )
}


export default PokemonSearch
