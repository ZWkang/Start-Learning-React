// passed props
// 传递参数。首先是像react dom一样传递

import React,{ Component } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    padding:8px;
    margin:8px;
    color:pink;
    background:papayawhip;
    border:none;
    border-radius:3px;
`;

export default class PassedProps extends Component{
    render() {
        return (
            <div>
                <Input placeholder = "@mxstbr" type="text" />
                <Input value="@geelen" type="text" />
            </div>
        )
    }
}