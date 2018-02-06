import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderItem = styled.li`
    color: green;
    background:white;
    flex:1;
    list-style:none;
    border:1px solid green;
`;
const HeaderContainer = styled.ul`
    display:flex;
    padding:0;
    margin:0;
`;


const HeaderList = ['index','about','name'];
export default class TestProps extends Component{
    render(){
        return (
            <div>
                <HeaderContainer>
                {
                    HeaderList.map((value)=>{
                        return <HeaderItem>{value}</HeaderItem>
                    })
                }
                </HeaderContainer>
            </div>
        )
    }
}