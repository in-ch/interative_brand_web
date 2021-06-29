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
    flex:5;display:flex;align-items: center;
    justify-content: space-between;
    div{
        transition: all 1s;
        width:300px;height:300px;margin:0 auto;text-align:center;
        p{
            line-height: 60px;opacity:0.3;transition: all 1s;
        }
    }
`;

const style= {
    show :{
        display:"block",
    },
    hidden: {
        display:"none",
    },
    fontSizeBig: {
        fontSize:"35px",
        opacity:1,
    },
    fontSizeNormal:{
        fontSize:"20px",
        opacity:0.3
    },

    bg1:{
        backgroundImage: "url(https://cdn.shopify.com/s/files/1/0015/4530/6173/products/collinastradaSS20_17of73_1200x.jpg?v=1621895070)",
        backgroundSize:"cover"
    },
    bg2:{
        backgroundImage: "url(https://cdn.shopify.com/s/files/1/0015/4530/6173/products/collinastradaSS20_15of73_1200x.jpg?v=1621895070)",
        backgroundSize:"cover"
    },
    bg3:{
        backgroundImage: "url(https://cdn.shopify.com/s/files/1/0015/4530/6173/products/collinastradaSS20_16of73_1200x.jpg?v=1621895070)",
        backgroundSize:"cover"
    },
    bg4:{
        backgroundImage: "url(https://cdn.shopify.com/s/files/1/0015/4530/6173/products/collinastradaSS20_18of73_1200x.jpg?v=1621895070)",
        backgroundSize:"cover"
    },
    bg5:{
        backgroundImage: "url(https://cdn.shopify.com/s/files/1/0015/4530/6173/products/kordal-ss21-shot-4_1200x.jpg?v=1620930547)",
        backgroundSize:"cover"
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
