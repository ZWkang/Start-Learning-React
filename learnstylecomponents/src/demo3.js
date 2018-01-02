import React,{ Component } from 'react'
import styled from 'styled-components'
//Adapting based on props

const Button = styled.button`
    background: ${props => props.primary ? 'palevioletred':'white'};
    color: ${props => props.primary? 'white':'palevioletred'};

    font-size:1em;
    margin:1em;
    padding:0.25em 1em;
    border:2px solid palevioletred;
    border-radius:3px;
`;


export default class ButtonGroupInJs extends Component{
    render(){
        return (
            <div>
                <Button>Normal</Button>
                <Button primary>Primary</Button>
                {/* <p>123</p> */}
            </div>
        )
    }
}