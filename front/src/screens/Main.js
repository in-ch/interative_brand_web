import { useState,useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;height:100vh;position:relative;top:-${(props)=> props.top}px;transition:all 1s;
`;

const BG_ONE = styled.div`
    width:100%;height:100%;
    background-image: url(https://64.media.tumblr.com/263fd8f6ebe3cd0b3541fd6790c11a7a/tumblr_nrvd2wh8bN1rhpqeho1_1280.jpg);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    clip: rect( 0px, ${((props)=>props.width)}px, ${((props)=>props.height)}px, 0px );
    transition: all 1s;
`;

const BG_TWO = styled.div`
    width:100%;height:100%;
    background-image: url(https://64.media.tumblr.com/049cc412464cc3d07551a2d083b8970a/tumblr_nb7xbpDLEs1s9u0z3o1_1280.jpg);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    clip: rect( 0px, ${((props)=>props.width)}px, ${((props)=>props.height)}px, 0px );
    transition: all 1s;
`;

const BG_THREE = styled.div`
    width:100%;height:100%;
    background-image: url(https://64.media.tumblr.com/828d52791d0db84fb0258e2966e80dec/tumblr_njvlsfFYlQ1qi73s5o1_1280.jpg);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    transition: all 0.5s;
`;

const Container2 = styled.div`
    width:100%;height:100vh;position:relative;position:relative;top:-${(props)=> props.top}px;transition:all 0.5s;
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
    const scrollEvent = (e) => {
        if(!check){
            return;
        }

        if(e.deltaY>0){
            setWheelIndex(wheelIndex + 1);
        } else if(wheelIndex<0) {
            return;
        } else {
            setWheelIndex(wheelIndex - 1);
        }
        setCheck(false);
        setTimeout(()=>{
            setCheck(true);
        },1000);
        console.log(wheelIndex/10);
    };

    // 무조건 100단위로 끊기 
    return (
        <>
            <Container top={wheelIndex > 36 ? height*(((wheelIndex-36)/height)*80) : 0 } onWheel={scrollEvent}>
                <BG_ONE height={height} width={wheelIndex < 10  ? width*(wheelIndex/10) : width} />
                <BG_TWO height={9< wheelIndex && wheelIndex <20  ?  height*((wheelIndex-10)/10) : height } width={width} style={9< wheelIndex ? style.show : style.hidden}/>
            </Container>
            <Container2 top={wheelIndex > 36 ? height*(((wheelIndex-36)/height)*80) : 0 } onWheel={scrollEvent} style={{background:'red'}}>

            </Container2>
            
        </>
    );
};

export default Main;
