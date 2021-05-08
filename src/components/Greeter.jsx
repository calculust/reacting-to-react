import React from 'react';
import styled from 'styled-components';

const Greeter = props => {
    return (
        <div className="card rounded-pill py-2 px-4 mb-3">
            <Greeting className="card-title">{props.phrase}, {props.name}!</Greeting>
        </div>
    );
}

const Greeting = styled.h1`
    color: slateblue;
`;

export default Greeter;