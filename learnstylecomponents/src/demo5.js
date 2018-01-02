import React, { Component } from 'react'
import styled from 'styled-components'
/**
 * 以前的样式扩展，往往是将参数传入一个函数 类似mixin之类的处理
 * 而在这里 使用更简单的extend来生成另外一个。
 * 覆盖了来自初始组件的组件，并保留了初始组件
 */


const Button = styled.button`
    color:blue;
    font-size:1em;
    margin:1em;
    padding:0.25em 1em;
    border: 2px solid blue;
    border-radius:3px;
 `;

const GreenButton = Button.extend`
    color:green;
    border-color:green;
 `;
// 不要使用驼峰
export default class ExtendStyleClass extends Component {
    render() {
        return (
            <div>
                <Button>normal button</Button>
                <GreenButton>extends button</GreenButton>
            </div>
        )
    }
}