import { useState,useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Container = styled.div`
    width:100%;height:100vh;position:relative;top:-${(props)=> props.top}px;transition:all 0.4s;
`;

const BG_ONE = styled.div`
    width:100%;height:100%;
    background-image: url(https://64.media.tumblr.com/263fd8f6ebe3cd0b3541fd6790c11a7a/tumblr_nrvd2wh8bN1rhpqeho1_1280.jpg);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    clip: rect( 0px, ${((props)=>props.width)}px, ${((props)=>props.height)}px, 0px );
    transition: all 0.5s;
`;

const BG_TWO = styled.div`
    width:100%;height:100%;
    background-image: url(https://64.media.tumblr.com/049cc412464cc3d07551a2d083b8970a/tumblr_nb7xbpDLEs1s9u0z3o1_1280.jpg);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    clip: rect( 0px, ${((props)=>props.width)}px, ${((props)=>props.height)}px, 0px );
    transition: all 0.5s;
`;

const BG_THREE = styled.div`
    width:100%;height:100%;
    background-image: url(https://64.media.tumblr.com/828d52791d0db84fb0258e2966e80dec/tumblr_njvlsfFYlQ1qi73s5o1_1280.jpg);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    transition: all 0.4s;
`;

const Container2 = styled.div`
    width:100%;height:100vh;position:relative;position:relative;top:-${(props)=> props.top}px;transition:all 0.4s;
`;

const Content = styled.div`
    width:100%;height:100vh;display:flex;
`;
const ContentDiv = styled.div`
    flex:5;border:1px solid #000;display:flex;justify-item:center;
`;

const style= {
    show :{
        display:"block",
    },
    hidden: {
        display:"none",
    }
}

const Main = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [check,setCheck] = useState(true);

    const [wheelIndex, setWheelIndex] = useState(0);
    const [wheelIndex2, setWheelIndex2] = useState(0);
    const scrollEvent = (e) => {
        if(!check){
            return;
        }

        if(e.deltaY>0){
            if(wheelIndex > 10){
                return;
            }
            setWheelIndex(wheelIndex + 1);
        } else if(wheelIndex<0) {
            return;
        } else {
            if(wheelIndex2 > 0){
                return;
            }
            setWheelIndex(wheelIndex - 1);
        }
        setCheck(false);
        setTimeout(()=>{
            setCheck(true);
        },200);
        console.log("첫번째 휠"+wheelIndex);
    };

    const scrollEvent2Page = (e) => {
        if(!check){
            return;
        }
        if(e.deltaY>0){
            setWheelIndex2(wheelIndex2 + 1);
        } else if(wheelIndex2<0) {
            return;
        } else {
            setWheelIndex2(wheelIndex2 - 1);
        }
        setCheck(false);
        setTimeout(()=>{
            setCheck(true);
        },200);
        console.log("2번째 휠"+ wheelIndex2);
        
    };

    // 무조건 100단위로 끊기 
    return (
        <>
            <Wrapper  onWheel={scrollEvent}>
                <Container top={wheelIndex > 9? height*((wheelIndex-10)) : 0 }>
                    <BG_ONE height={height} width={wheelIndex < 5  ? width*(wheelIndex/5) : width} />
                    <BG_TWO height={4< wheelIndex && wheelIndex <10  ?  height*((wheelIndex-5)/5) : height } width={width} style={4< wheelIndex ? style.show : style.hidden} />
                </Container>

                <Container2 onWheel={scrollEvent2Page} top={wheelIndex > 9 ? height*((wheelIndex-10)) : 0 }>
                    <Content>
                        <ContentDiv>
                            
                        </ContentDiv>
                        <ContentDiv>
                            
                        </ContentDiv>
                    </Content>
                </Container2>
            </Wrapper>
        </>
    );
};

export default Main;
