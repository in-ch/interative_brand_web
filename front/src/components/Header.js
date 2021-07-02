import styled from "styled-components";

const SHeader = styled.div`
    width:10%;height:100vh;background:none;position:fixed;z-index:2;top:0px;left:0px;text-align:center;align-items: center;
    justify-content: space-between;display:flex;writing-mode: vertical-rl;
    text-orientation: upright;padding-top:20px;
    p{
        font-size:20px;color:white;
    }
`;


const Header = () => {
    
    return (
        <>
            <SHeader>
                <p>HOME</p>
                <p>MAN</p>
                <p>WOMAN</p>
            </SHeader>
        </>
    )
};

export default Header;