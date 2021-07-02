import { useState,useEffect } from "react";
import styled from "styled-components";
import Intro from "../components/Intro";
import useWindowSize from "../hooks/useResize";
import {Wrapper, Container, BG_ONE, BG_TWO, BG_THREE, Container2, Container3, Content, ContentDiv, ContainerIntro, style } from "../styles";
import Header from "../components/Header";

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
        if(wheelIndex2 > 10){
            console.log("adsg");
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

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
      }, []); 

    return (
        <>
            <Header />
            <Wrapper onWheel={scrollEvent}>
                <ContainerIntro top={wheelIndex > 9 ? height*((wheelIndex-10)) : 0 }>
                    <Intro text1={'asdf'} text2={'fdfa'} text3={'zvvvv'} text4={'vvvvv'}/>
                </ContainerIntro>
                <Container top={wheelIndex > 9 ? height*((wheelIndex-10)) : 0 }>
                    <BG_ONE height={height} width={wheelIndex < 5  ? width*(wheelIndex/5) : width} />
                    <BG_TWO height={4< wheelIndex && wheelIndex <10  ?  height*((wheelIndex-5)/5) : height } width={width} style={4< wheelIndex ? style.show : style.hidden} />
                </Container>

                <Container2 onWheel={scrollEvent2Page} top={wheelIndex > 9 ? height*((wheelIndex-10)) : 0 }>
                    <Content>
                        <ContentDiv  style={{backgroundImage:"url(https://i.pinimg.com/564x/d3/f8/10/d3f81017090b5bfa809768f5578c719b.jpg)",backgroundSize:"cover"}}>
                            <div style={{background:'white',border:"2px solid black"}}>
                                <p style={ wheelIndex2 < 2 ? style.fontSizeBig : style.fontSizeNormal}>Awesome</p>
                                <p style={ wheelIndex2 > 1 && wheelIndex2 < 4? style.fontSizeBig : style.fontSizeNormal}>Tiny</p>
                                <p style={ wheelIndex2 > 3 && wheelIndex2 < 7 ? style.fontSizeBig : style.fontSizeNormal}>Amazing</p>
                                <p style={ wheelIndex2 > 6 && wheelIndex2 < 9 ? style.fontSizeBig : style.fontSizeNormal}>Natural</p>
                                <p style={ wheelIndex2 > 8 && wheelIndex2 < 12 ? style.fontSizeBig : style.fontSizeNormal}>Every</p>
                            </div>
                        </ContentDiv>
                        <ContentDiv>
                            <div style={style.default, wheelIndex2 < 2 ? style.bg1 : wheelIndex2 > 1 && wheelIndex2 < 4 ? style.bg2 : wheelIndex2 > 3 && wheelIndex2 < 7  ? style.bg3 : wheelIndex2 > 6 && wheelIndex2 < 9 ? style.bg4 : style.bg5}>

                            </div>
                        </ContentDiv>
                    </Content>
                </Container2>

                <Container3>
                    
                </Container3>
            </Wrapper>
        </>
    );
};

export default Main;
