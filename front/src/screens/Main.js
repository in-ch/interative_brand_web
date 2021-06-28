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
`;

const Main = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const scrollEvent = () => {
        console.log('Gd');
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        return () => {
          window.removeEventListener("scroll", scrollEvent);
        };
    });

    return (
        <>
            <Container>
                <BG_ONE height={100} width={width} />
            </Container>
            
        </>
    );
};

export default Main;
