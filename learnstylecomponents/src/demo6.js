import React,{Component} from 'react'
import styled from 'styled-components'

// Attaching additional props
// 附加额外的属性
// 主要是.attr(构造函数) 它是一个构造函数。然后再传入模板字符串

const Input = styled.input.attrs({
    type:'password',

    margin: props=>props.size || '1em',
    padding: props=>props.size || '1em'
})`
    color : palevioletred;
    font-size:1em;
    border:2px solid palevioletred;
    border-radius:3px;
    margin : ${props => props.margin};
    padding: ${props=>props.padding};
`

export default class PropsAttach extends Component{
    render (){
        return (
            <div>
                <Input placeholder = "A small text input" size="1em" />
                <Input placeholder = "A small text input" size="2em"/>
            </div>
        )
    }
}