import { useState,useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
    border:1px solid #000;width:100%;min-height:100px;background:red;
    padding:15%;overflow:scroll;
`;
const ProductWrapper = styled.div`
    width:250px;height:350px;border:1px solid #000;display:inline-block;margin-left:1%;
`; 

const Main = () => {

    return (
        <>
            <Header black={true} display={true} />
            <Wrapper>
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
                <ProductWrapper />
            </Wrapper>
        </>
    );
};

export default Main;
