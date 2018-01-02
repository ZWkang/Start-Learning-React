import React,{Component} from 'react'
import styled,{keyframes} from 'styled-components'


//利用keyframes生成唯一关键帧动画 然后再使用
const rotate360 = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate360} 2s linear infinite;
    padding: 2rem 1rem ;
    font-size: 1.2rem;
`

export default class KeyframsTest extends Component{
    render (){
        return (
            <div>
                <Rotate>&lt;=-=&gt;</Rotate>
            </div>
        )
    }
}