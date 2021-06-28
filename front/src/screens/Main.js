import { useState,useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;border:1px solid #000;height:100vh;
`;

const BG_ONE = styled.div`
    border:1px solid #000;width:100%;height:100%;
    background-image: url(https://64.media.tumblr.com/263fd8f6ebe3cd0b3541fd6790c11a7a/tumblr_nrvd2wh8bN1rhpqeho1_1280.jpg);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    clip: rect( 0px, ${((props)=>props.width)}px, ${((props)=>props.height)}px, 0px );
    transition: all 0.5s;
`;

const Main = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [wheelIndex, setWheelIndex] = useState(0);
    const scrollEvent = (e) => {
        if(e.deltaY>0){
            setWheelIndex(wheelIndex + 1);
        } else if(wheelIndex<0) {
            return;
        } else {
            setWheelIndex(wheelIndex - 1);
        }
        console.log(width/wheelIndex);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        return () => {
          window.removeEventListener("scroll", scrollEvent);
        };
    });
    // 무조건 100단위로 끊기 
    return (
        <>
            <Container onWheel={scrollEvent}>
                <BG_ONE height={height} width={wheelIndex < 1000  ? width/wheelIndex : width} />
            </Container>
            
        </>
    );
};

export default Main;
