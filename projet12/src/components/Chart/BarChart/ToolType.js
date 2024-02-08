import React from 'react';
import {Container, Texts} from "./barChartStyle";
import PropTypes from 'prop-types';


 export default function ToolType({active, payload}) {
    if (active){
    return (
        <Container>
            <Texts>{payload[0].value}kg</Texts>
            <Texts>{payload[1].value}Kcal</Texts>
        </Container>
    
     );
    }
    return null
}

ToolType.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};