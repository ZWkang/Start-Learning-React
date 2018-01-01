import React, { Component } from 'react'
import styled from 'styled-components'

const Tips = styled.h1`
    color:pink;
    font-weight:700;
`;
const Container = styled.div`
    text-align:center;
    width:960px;
    height:auto;
    margin:'0 auto;
`;
export default class Tip extends Component {
    render() {
        return (
            <Container>
                <Tips>Here is styled-components first demo</Tips>
            </Container>
        )
    }
}

