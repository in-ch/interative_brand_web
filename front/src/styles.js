import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import reset from "styled-reset"

export const GlobalStyles = createGlobalStyle` 
    ${reset}
    input{
        all:unset;
    }
    *{
        box-size:border-box
    }
    body{
        width:100%;height:100%;overflow:hidden;
    }
`;

export const Wrapper = styled.div`
    min-width:1000px;
`;

export const ContainerIntro = styled.div`
    width:100%;height:100vh;position:absolute;top:-${(props)=> props.top}px;transition:all 0.4s;
    background-image:url(https://cdn.shopify.com/s/files/1/0015/4530/6173/files/kordal-ss21-shot-74_ab300577-9a13-4899-a775-ca863824d44d_2000x.progressive.jpg?v=1621911349);
    background-size:cover;
    display:flex;align-items: center;
    justify-content: space-between;

`;

export const Container = styled.div`
    width:100%;height:100vh;position:relative;top:-${(props)=> props.top}px;transition:all 0.4s;
`;

export const BG_ONE = styled.div`
    width:100%;height:100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0015/4530/6173/files/kordal-finals-shot-113_2000x.progressive.jpg?v=1624556690);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    clip: rect( 0px, ${((props)=>props.width)}px, ${((props)=>props.height)}px, 0px );
    transition: all 0.5s;
`;

export const BG_TWO = styled.div`
    width:100%;height:100%;
    background-image: url(https://64.media.tumblr.com/049cc412464cc3d07551a2d083b8970a/tumblr_nb7xbpDLEs1s9u0z3o1_1280.jpg);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    clip: rect( 0px, ${((props)=>props.width)}px, ${((props)=>props.height)}px, 0px );
    transition: all 0.5s;
`;

export const BG_THREE = styled.div`
    width:100%;height:100%;
    background-image: url(https://64.media.tumblr.com/828d52791d0db84fb0258e2966e80dec/tumblr_njvlsfFYlQ1qi73s5o1_1280.jpg);background-size:cover;
    position: absolute;
    top:0px;left:0px;
    transition: all 0.4s;
`;

export const Container2 = styled.div`
    width:100%;height:100vh;position:relative;position:relative;top:-${(props)=> props.top}px;transition:all 0.4s;
`;

export const Container3 = styled.div`
    width:100%;height:100vh;position:relative;position:relative;top:-${(props)=> props.top}px;transition:all 0.4s;background:red;
`;


export const Content = styled.div`
    width:100%;height:100vh;display:flex;
`;
export const ContentDiv = styled.div`
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

export const style= {
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