import React,{Component} from 'react'
import styled from 'styled-components'
// styling any components
// 提供样式化的方法更好的为兼容第三方库
// react-native中使用style替代className

const Link = (a)=>{
    console.log(a);
    const {className,children} = a;
    return (<a className = {className}>
        {children}
    </a>)
}

const StyledLink = styled(Link)`
    color:palevioletred;
    font-weight:bold;
`;
// 样式化组件总是生成一个真正的类样式表。然后通过className prop将类名传递给React组件（包括第三方组件）。
// styled() ~= styled('tagname') ~= styled.tagname``
export default class StylingComponent extends Component{
    render(){
        return(
            <div>
                <Link> boring Link</Link>
                <br />
                <StyledLink> Styled exciting</StyledLink>
            </div>
        )
    }
}


