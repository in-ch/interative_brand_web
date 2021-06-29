import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
    
    width:100%;height:580px;position:relative;
    background-image: url('imgs/clinic_background.png');
    .box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        height: 350px;
        background: RGBA(0,0,0,0.5);
        box-sizing: border-box;
        overflow: hidden;  
        color: white;
        padding: 20px;
        @media (max-width: 520px) {
            width:250px;height:250px;
            background: RGBA(0,0,0,0.7);
        }
    }
    .box:before{
        content: '';
        position:absolute;
        top:0;
        left:-100%;
        width:100%;
        height:100%;
        background: rgba(150,150,150,0.5);
        transition:0.5s;
        pointer-events: none;
    }
    
    .box:hover:before{
        left:-20%;
        transform: skewX(-10deg);  // 호버 이벤트 
    }
    
    .box .content{
        position:absolute;
        top:15px;
        left:15px;
        right:15px;
        bottom:15px;
        padding:22px;
        text-align:center;
    }
    .box span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        box-sizing: border-box;
    }
    .box span:nth-child(1)
    {
        transform:rotate(0deg);
    }
    
    .box span:nth-child(2)
    {
        transform:rotate(90deg);
    }
    
    .box span:nth-child(3)
    {
        transform:rotate(180deg);
    }
    
    .box span:nth-child(4)
    {
        transform:rotate(270deg);
    }
    
    .box span:before
    {
        content: '';
        position: absolute;
        width:100%;
        height: 3px;
        background: RGBA(255,255,255,0.9);
        animation: animate 3s linear 0.5;
    }
    .content {
        display:flex;align-items: center;
        h3{
            font-size:80px;transition: All 2s;font-weight:normal;position:relative;top:-12px;
            font-family: 'Yellowtail', cursive;margin:0 auto;
            @media (max-width: 520px) {
                font-size:30px;
            }
        }
    }
    @keyframes animate {
        0% {
            transform:scaleX(0);
            transform-origin: left;
        }
        50%
        {
            transform:scaleX(1);
            transform-origin: left;
        }
        50.1%
        {
            transform:scaleX(1);
            transform-origin: right;
        }
        100%
        {
            transform:scaleX(0);
            transform-origin: right;
        }
    } 
`;

const style = {
    leftToggle1 : {
        left: '-30px',
        opacity: 0,
    },
    leftToggle2 : {
        left: '30px',
        opacity: 0,
    },
    leftToggleOff: {
        left: 0,
        opacity: 1,
    }
};

const Intro = ({text1,text2,text3,text4}) => {
    const [moving,setMoving] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setMoving(false);
        },1000);
    },[]);

    return (
        <>
            <Wrapper>
                <div class="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="content">
                        <h3 style={Object.assign({}, moving? style.leftToggle2 : style.leftToggleOff )}>{text2}</h3>
                    </div>
                </div>
            </Wrapper>
        </>
    )
};

export default Intro;